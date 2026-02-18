'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface Star {
  x: number
  y: number
  z: number
  size: number
  baseSpeed: number
  color: { r: number; g: number; b: number }
}

const STAR_COUNT = 150
const COLORS = [
  { r: 139, g: 92, b: 246 },   // violet-500
  { r: 167, g: 139, b: 250 },  // violet-400
  { r: 196, g: 181, b: 253 },  // violet-300
  { r: 244, g: 114, b: 182 },  // pink-400
  { r: 232, g: 121, b: 249 },  // fuchsia-400
  { r: 255, g: 255, b: 255 },  // white
]

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>(0)
  const lastScrollRef = useRef(0)
  const scrollVelocityRef = useRef(0)
  const shakeCountRef = useRef(0)
  const lastShakeTimeRef = useRef(0)
  const chaosActiveRef = useRef(false)
  const chaosStartTimeRef = useRef(0)
  const [isLowPower, setIsLowPower] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  // Detect low power mode / reduced motion
  useEffect(() => {
    setIsMounted(true)
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    // Check for low-end device (rough heuristic)
    const isLowEnd = navigator.hardwareConcurrency <= 2 || 
                     /Android [4-6]|iPhone [4-8]|iPad [1-4]/i.test(navigator.userAgent)
    
    setIsLowPower(prefersReducedMotion || isLowEnd)
  }, [])

  // Initialize stars
  const initStars = useCallback((width: number, height: number) => {
    const stars: Star[] = []
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * 1000 + 1,
        size: Math.random() * 2 + 0.5,
        baseSpeed: Math.random() * 0.3 + 0.1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })
    }
    starsRef.current = stars
  }, [])

  // Main animation loop
  useEffect(() => {
    if (!isMounted || isLowPower) return
    
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    
    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      if (starsRef.current.length === 0) {
        initStars(width, height)
      }
    }
    resize()
    
    // Scroll handler for velocity detection
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const delta = currentScroll - lastScrollRef.current
      const now = Date.now()
      
      // Calculate velocity
      scrollVelocityRef.current = Math.abs(delta) * 0.5
      
      // Shake detection (direction changes)
      if (Math.abs(delta) > 20) {
        const direction = delta > 0 ? 1 : -1
        const lastDirection = lastScrollRef.current > 0 ? 1 : -1
        
        if (direction !== lastDirection && now - lastShakeTimeRef.current < 500) {
          shakeCountRef.current++
          
          // Trigger chaos after 3 quick direction changes
          if (shakeCountRef.current >= 3 && !chaosActiveRef.current) {
            chaosActiveRef.current = true
            chaosStartTimeRef.current = now
            shakeCountRef.current = 0
          }
        }
        lastShakeTimeRef.current = now
      }
      
      // Reset shake count after timeout
      if (now - lastShakeTimeRef.current > 800) {
        shakeCountRef.current = 0
      }
      
      lastScrollRef.current = currentScroll
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', resize, { passive: true })

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      const now = Date.now()
      const velocity = scrollVelocityRef.current
      const isChaos = chaosActiveRef.current
      const chaosProgress = isChaos ? (now - chaosStartTimeRef.current) / 2000 : 0
      
      // End chaos after 2 seconds
      if (chaosProgress >= 1) {
        chaosActiveRef.current = false
      }
      
      // Decay velocity
      scrollVelocityRef.current *= 0.95
      
      const centerX = width / 2
      const centerY = height / 2
      
      starsRef.current.forEach((star, i) => {
        // Calculate projected position
        const k = 128 / star.z
        let sx = star.x * k + centerX
        let sy = star.y * k + centerY
        
        // Chaos explosion effect
        if (isChaos && chaosProgress < 0.5) {
          const explosionForce = Math.sin(chaosProgress * Math.PI) * 50
          const angle = Math.atan2(star.y, star.x)
          sx += Math.cos(angle) * explosionForce * (1 - star.z / 1000)
          sy += Math.sin(angle) * explosionForce * (1 - star.z / 1000)
        }
        
        // Calculate size based on depth and velocity (warp effect)
        const baseSize = star.size * (1 - star.z / 1000) * 3
        const warpStretch = Math.min(velocity * 0.1, 15)
        
        // Draw star
        const alpha = (1 - star.z / 1000) * (isChaos ? 0.8 + Math.sin(now * 0.01 + i) * 0.2 : 0.8)
        ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${alpha})`
        
        ctx.beginPath()
        if (warpStretch > 2) {
          // Warp speed - draw lines
          const angle = Math.atan2(sy - centerY, sx - centerX)
          ctx.moveTo(sx, sy)
          ctx.lineTo(
            sx - Math.cos(angle) * warpStretch,
            sy - Math.sin(angle) * warpStretch
          )
          ctx.strokeStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${alpha * 0.6})`
          ctx.lineWidth = baseSize
          ctx.stroke()
        }
        ctx.arc(sx, sy, Math.max(baseSize, 0.5), 0, Math.PI * 2)
        ctx.fill()
        
        // Move star
        const speedMultiplier = isChaos 
          ? (chaosProgress < 0.5 ? 0.2 : 1 + (1 - chaosProgress) * 2)
          : 1 + velocity * 0.1
          
        star.z -= star.baseSpeed * speedMultiplier
        
        // Reset star when it passes the camera
        if (star.z <= 1) {
          star.z = 1000
          star.x = Math.random() * width - width / 2
          star.y = Math.random() * height - height / 2
        }
        
        // Add slight drift in idle mode
        if (velocity < 0.5 && !isChaos) {
          star.x += Math.sin(now * 0.0001 + i) * 0.1
          star.y += Math.cos(now * 0.0001 + i * 0.5) * 0.1
        }
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', resize)
    }
  }, [isMounted, isLowPower, initStars])

  // Low power fallback - static gradient
  if (!isMounted) {
    return <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-violet-50/50 to-pink-50/30" />
  }
  
  if (isLowPower) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-violet-50/50 to-pink-50/30" />
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-violet-200/20 rounded-full blur-[100px] -translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-pink-200/20 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
      </div>
    )
  }

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-white via-violet-50/30 to-pink-50/20" />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ opacity: 0.7 }}
      />
    </>
  )
}
