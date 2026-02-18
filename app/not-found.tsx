'use client'

import Link from 'next/link'
import { ArrowRight, FileQuestion } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'
import GlassCard from '@/components/glass-card'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            {/* Background is handled by layout.tsx, but we ensure full height centering here */}

            <ScrollReveal variant="scale">
                <GlassCard className="max-w-lg w-full text-center p-12">
                    <div className="w-20 h-20 rounded-3xl gradient-bg flex items-center justify-center mx-auto mb-8">
                        <FileQuestion className="text-white" size={40} />
                    </div>

                    <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Страница не найдена</h2>

                    <p className="text-gray-600 mb-8 text-lg">
                        Похоже, что вы перешли по неверной ссылке или страница была удалена.
                    </p>

                    <Link
                        href="/"
                        className="glass-button px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
                    >
                        Вернуться на главную <ArrowRight size={20} />
                    </Link>
                </GlassCard>
            </ScrollReveal>
        </div>
    )
}
