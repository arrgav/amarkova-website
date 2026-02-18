'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function OrganicBackground() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 300])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -300])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3])

    return (
        <div ref={ref} className="fixed inset-0 -z-10 overflow-hidden bg-white">
            {/* Circle 1 - Top Left */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-violet-200/40 blur-[100px]"
            />

            {/* Circle 2 - Bottom Right */}
            <motion.div
                style={{ y: y2, opacity }}
                className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-fuchsia-200/40 blur-[100px]"
            />

            {/* Circle 3 - Center */}
            <motion.div
                style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]), opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]) }}
                className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-pink-200/30 blur-[120px]"
            />
        </div>
    )
}
