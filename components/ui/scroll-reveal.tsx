'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  width?: 'fit-content' | '100%'
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  variant?: 'fade-up' | 'slide-in-right' | 'scale' // Legacy support
  stagger?: number // Delay multiplier for staggered children
  once?: boolean
}

export default function ScrollReveal({
  children,
  className = '',
  width = 'fit-content',
  delay = 0,
  duration = 0.5,
  direction = 'up',
  variant,
  stagger = 0,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    once, 
    margin: '-50px',
    amount: 0.2 
  })

  // Handle legacy variant prop
  let actualDirection = direction
  let isScale = false
  
  if (variant) {
    if (variant === 'fade-up') actualDirection = 'up'
    else if (variant === 'slide-in-right') actualDirection = 'right'
    else if (variant === 'scale') isScale = true
  }

  // GPU-optimized transforms
  const getInitialTransform = () => {
    if (isScale) return 'scale3d(0.95, 0.95, 1)'
    switch (actualDirection) {
      case 'up': return 'translate3d(0, 40px, 0)'
      case 'down': return 'translate3d(0, -40px, 0)'
      case 'left': return 'translate3d(40px, 0, 0)'
      case 'right': return 'translate3d(-40px, 0, 0)'
      default: return 'translate3d(0, 40px, 0)'
    }
  }

  const totalDelay = delay + stagger

  const variants: Variants = {
    hidden: {
      opacity: 0,
      transform: getInitialTransform(),
    },
    visible: {
      opacity: 1,
      transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
      transition: {
        duration,
        delay: totalDelay,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing for smooth feel
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      style={{
        width,
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
      }}
    >
      {children}
    </motion.div>
  )
}

// Stagger container for child animations
interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'up',
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const getOffset = () => {
    switch (direction) {
      case 'up': return { y: 30 }
      case 'down': return { y: -30 }
      case 'left': return { x: 30 }
      case 'right': return { x: -30 }
      default: return { y: 30 }
    }
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...getOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={itemVariants}>{children}</motion.div>
      }
    </motion.div>
  )
}
