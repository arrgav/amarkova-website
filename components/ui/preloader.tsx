'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000) // Show preloader for 2 seconds

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="relative w-32 h-32 flex flex-col items-center gap-4"
                    >
                        <div className="relative w-24 h-24">
                            <Image
                                src="/logo.png"
                                alt="Anastasia Markova"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <motion.div
                            className="h-1 w-32 bg-gray-100 rounded-full overflow-hidden"
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-violet-400 to-fuchsia-400"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.5, ease: 'easeInOut' }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
