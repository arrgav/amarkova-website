'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect, useState, useCallback, useMemo } from 'react'

// Конфигурация
const IDLE_TIMEOUT = 3000

export default function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  // Mouse tracking
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  
  // Smooth springs
  const springConfig = { damping: 30, stiffness: 100 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)
  
  // State
  const [isMobile, setIsMobile] = useState(false)
  const [isIdle, setIsIdle] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null)
  
  // Client-side initialization
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  // Определение мобильного устройства
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Reset idle timer
  const resetIdleTimer = useCallback(() => {
    setIsIdle(false)
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current)
    }
    idleTimerRef.current = setTimeout(() => {
      setIsIdle(true)
    }, IDLE_TIMEOUT)
  }, [])
  
  // Mouse/Touch handlers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window
        mouseX.set(clientX / innerWidth)
        mouseY.set(clientY / innerHeight)
        resetIdleTimer()
      }
    }
    
    const handleScroll = () => {
      if (isMobile) {
        resetIdleTimer()
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current)
      }
    }
  }, [isMobile, mouseX, mouseY, resetIdleTimer])
  
  // Scroll transforms for mobile
  const scrollY1 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const scrollY2 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const scrollY3 = useTransform(scrollYProgress, [0, 1], [0, 150])
  
  // Mouse transforms for desktop
  const mouseTransformX = useTransform(smoothMouseX, [0, 1], [-80, 80])
  const mouseTransformY = useTransform(smoothMouseY, [0, 1], [-80, 80])
  const mouseTransformX2 = useTransform(smoothMouseX, [0, 1], [60, -60])
  const mouseTransformY2 = useTransform(smoothMouseY, [0, 1], [60, -60])
  const mouseTransformX3 = useTransform(smoothMouseX, [0, 1], [-40, 40])
  const mouseTransformY3 = useTransform(smoothMouseY, [0, 1], [-40, 40])
  
  // Idle animation variants
  const idleVariants = {
    idle: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    active: {
      scale: 1,
      rotate: 0
    }
  }
  
  const idleVariants2 = {
    idle: {
      scale: [1, 1.15, 1],
      rotate: [0, -8, 8, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    },
    active: {
      scale: 1,
      rotate: 0
    }
  }
  
  const idleVariants3 = {
    idle: {
      scale: [1, 1.2, 1],
      x: [0, 30, -30, 0],
      y: [0, -20, 20, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }
    },
    active: {
      scale: 1,
      x: 0,
      y: 0
    }
  }
  
  // Статические частицы (без хуков внутри)
  const staticParticles = useMemo(() => [
    { id: 1, x: 15, y: 20, size: 120, color: 'rgba(167, 139, 250, 0.25)' },
    { id: 2, x: 75, y: 15, size: 100, color: 'rgba(196, 181, 253, 0.2)' },
    { id: 3, x: 85, y: 60, size: 140, color: 'rgba(244, 114, 182, 0.18)' },
    { id: 4, x: 25, y: 70, size: 110, color: 'rgba(251, 207, 232, 0.22)' },
    { id: 5, x: 50, y: 45, size: 90, color: 'rgba(232, 121, 249, 0.15)' },
    { id: 6, x: 10, y: 85, size: 130, color: 'rgba(167, 139, 250, 0.2)' },
    { id: 7, x: 65, y: 80, size: 95, color: 'rgba(196, 181, 253, 0.18)' },
  ], [])

  if (!isMounted) {
    // SSR fallback - простой статичный фон
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-white via-violet-50/30 to-pink-50/20" />
    )
  }

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-white via-violet-50/30 to-pink-50/20">
      {/* Aurora gradient layer */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(ellipse 80% 80% at 50% 50%, rgba(167, 139, 250, 0.12) 0%, transparent 50%)`,
        }}
      />
      
      {/* Main gradient blobs */}
      {/* Blob 1 - Top Left - Violet */}
      <motion.div
        variants={idleVariants}
        animate={isIdle ? "idle" : "active"}
        style={{
          y: isMobile ? scrollY1 : mouseTransformY,
          x: isMobile ? 0 : mouseTransformX,
        }}
        className="absolute -top-[15%] -left-[15%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-violet-300/40 via-violet-200/30 to-transparent blur-[80px]"
      />
      
      {/* Blob 2 - Bottom Right - Pink/Fuchsia */}
      <motion.div
        variants={idleVariants2}
        animate={isIdle ? "idle" : "active"}
        style={{
          y: isMobile ? scrollY2 : mouseTransformY2,
          x: isMobile ? 0 : mouseTransformX2,
        }}
        className="absolute -bottom-[15%] -right-[15%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-fuchsia-300/40 via-pink-200/30 to-transparent blur-[80px]"
      />
      
      {/* Blob 3 - Center accent */}
      <motion.div
        variants={idleVariants3}
        animate={isIdle ? "idle" : "active"}
        style={{
          y: isMobile ? scrollY3 : mouseTransformY3,
          x: isMobile ? 0 : mouseTransformX3,
        }}
        className="absolute top-[25%] left-[25%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-pink-200/25 via-violet-200/20 to-transparent blur-[100px]"
      />
      
      {/* Floating particles - CSS animations only */}
      {staticParticles.map((particle, index) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          className="absolute rounded-full blur-[60px] pointer-events-none floating-particle"
        />
      ))}
      
      {/* Subtle grid overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Light beam effect following mouse (desktop only) */}
      {!isMobile && (
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 60%)',
            left: smoothMouseX.get() * 100 + '%',
            top: smoothMouseY.get() * 100 + '%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            left: `calc(${smoothMouseX.get() * 100}% - 250px)`,
            top: `calc(${smoothMouseY.get() * 100}% - 250px)`,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 100 }}
        />
      )}
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/40 pointer-events-none" />
    </div>
  )
}
