'use client'

import { useEffect, useRef, useState, createContext, useContext } from 'react'

interface LenisInstance {
  raf: (time: number) => void
  scrollTo: (target: string | number | HTMLElement, options?: object) => void
  destroy: () => void
  on: (event: string, callback: (e: any) => void) => void
}

interface SmoothScrollContextType {
  lenis: LenisInstance | null
  scrollVelocity: number
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollVelocity: 0,
})

export const useSmoothScroll = () => useContext(SmoothScrollContext)

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisInstance | null>(null)
  const [scrollVelocity, setScrollVelocity] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Dynamic import of Lenis
    const initLenis = async () => {
      try {
        const Lenis = (await import('@studio-freight/lenis')).default
        
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        })

        lenisRef.current = lenis

        // Track scroll velocity
        lenis.on('scroll', (e: any) => {
          setScrollVelocity(Math.abs(e.velocity))
        })

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        return () => {
          lenis.destroy()
        }
      } catch (error) {
        console.warn('Lenis not available, using native scroll')
      }
    }

    initLenis()

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
      }
    }
  }, [])

  if (!isMounted) {
    return <>{children}</>
  }

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current, scrollVelocity }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
