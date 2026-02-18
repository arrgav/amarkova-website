'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function OrganicBackground() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    // Mouse tracking for desktop
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth spring physics for mouse movement
    const springConfig = { damping: 25, stiffness: 150 }
    const mouseXSpring = useSpring(mouseX, springConfig)
    const mouseYSpring = useSpring(mouseY, springConfig)

    // Detect if device is mobile (touch-based)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Check for touch device
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(pointer: coarse)').matches)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)

        // Mouse move handler for desktop
        const handleMouseMove = (e: MouseEvent) => {
            if (!isMobile) {
                const { clientX, clientY } = e
                const { innerWidth, innerHeight } = window
                // Normalize to -1 to 1 range
                mouseX.set((clientX / innerWidth - 0.5) * 2)
                mouseY.set((clientY / innerHeight - 0.5) * 2)
            }
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', checkMobile)
        }
    }, [isMobile, mouseX, mouseY])

    // Scroll-based transforms (enhanced for mobile)
    const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 400 : 300])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -400 : -300])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])

    // Mouse-based transforms (desktop only)
    const mouseX1 = useTransform(mouseXSpring, [-1, 1], [-100, 100])
    const mouseY1 = useTransform(mouseYSpring, [-1, 1], [-100, 100])
    const mouseX2 = useTransform(mouseXSpring, [-1, 1], [100, -100])
    const mouseY2 = useTransform(mouseYSpring, [-1, 1], [100, -100])

    return (
        <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden bg-white">
            {/* Blob 1 - Top Left - Violet */}
            <motion.div
                style={{
                    y: isMobile ? y1 : useTransform(() => y1.get() + mouseY1.get()),
                    x: isMobile ? 0 : mouseX1,
                    opacity
                }}
                className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-violet-200/40 blur-[100px] floating-blob"
            />

            {/* Blob 2 - Bottom Right - Fuchsia */}
            <motion.div
                style={{
                    y: isMobile ? y2 : useTransform(() => y2.get() + mouseY2.get()),
                    x: isMobile ? 0 : mouseX2,
                    opacity
                }}
                className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-fuchsia-200/40 blur-[100px] floating-blob"
            />

            {/* Blob 3 - Center - Pink */}
            <motion.div
                style={{
                    scale,
                    opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]),
                    x: isMobile ? 0 : useTransform(mouseXSpring, [-1, 1], [-50, 50]),
                    y: isMobile ? 0 : useTransform(mouseYSpring, [-1, 1], [-50, 50])
                }}
                className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-pink-200/30 blur-[120px] floating-blob-slow"
            />
        </div>
    )
}
