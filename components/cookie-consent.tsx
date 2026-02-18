'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent')
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true)
            }, 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true')
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 100, opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-sm sm:bottom-8 sm:right-8"
                >
                    <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/98 p-6 shadow-2xl">
                        {/* Decorative background */}
                        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet-400/20 blur-2xl" />
                        <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-orange-300/20 blur-2xl" />

                        <div className="relative flex gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg">
                                <Cookie size={24} />
                            </div>

                            <div className="flex-1">
                                <h3 className="mb-1 font-semibold text-gray-900">Печеньки? 🍪</h3>
                                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                                    Используем файлы cookie, чтобы сайт работал идеально для вас.
                                </p>

                                <div className="flex gap-2">
                                    <Button
                                        onClick={acceptCookies}
                                        className="flex-1 rounded-xl bg-violet-600 hover:bg-violet-700 text-white shadow-md transition-all hover:shadow-lg active:scale-95"
                                    >
                                        Отлично
                                    </Button>
                                    <Button
                                        onClick={acceptCookies}
                                        variant="ghost"
                                        className="flex-1 rounded-xl text-gray-500 hover:bg-gray-100/50 hover:text-gray-900"
                                    >
                                        Закрыть
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
