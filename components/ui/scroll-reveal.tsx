'use client'

import React, { useRef } from 'react'
import { motion, useInView, Variants } from 'framer-motion'

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    width?: 'fit-content' | '100%'
    variant?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left' | 'scale'
    delay?: number
}

const variants: Record<string, Variants> = {
    'fade-up': {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
    'fade-in': {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    'slide-in-right': {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    },
    'slide-in-left': {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
    },
    'scale': {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
}

export default function ScrollReveal({
    children,
    width = 'fit-content',
    className = '',
    variant = 'fade-up',
    delay = 0.2
}: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <div ref={ref} style={{ width, position: 'relative', overflow: 'hidden' }} className={className}>
            <motion.div
                variants={variants[variant]}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: delay, ease: 'easeOut' }}
            >
                {children}
            </motion.div>
        </div>
    )
}
