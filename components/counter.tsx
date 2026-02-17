'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

export default function Counter({ end, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true
      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(easeOut * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}
