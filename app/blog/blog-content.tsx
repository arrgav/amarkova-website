'use client'

import { motion } from 'framer-motion'
import { Youtube, Instagram, FileText, ArrowRight, Play, Mic } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'
import GlassCard from '@/components/glass-card'
import Link from 'next/link'

// Mock data for blog posts/media
const articles = [
    {
        id: 1,
        type: 'article',
        title: 'Как выбрать ортодонта?',
        desc: '5 ключевых вопросов, которые стоит задать врачу на первой консультации.',
        date: '15 Фев 2026',
        readTime: '5 мин',
        link: '#',
        image: '/blog/article-1.jpg' // Placeholder
    },
    {
        id: 2,
        type: 'article',
        title: 'Брекеты или элайнеры: что лучше?',
        desc: 'Разбираем плюсы и минусы двух самых популярных методов лечения.',
        date: '10 Фев 2026',
        readTime: '7 мин',
        link: '#',
        image: '/blog/article-2.jpg'
    }
]

const videos = [
    {
        id: 1,
        title: 'Мой путь в ортодонтии',
        duration: '15:20',
        platform: 'YouTube',
        link: 'https://www.youtube.com/@knamss',
        thumbnail: '/blog/video-1.jpg'
    },
    {
        id: 2,
        title: 'Интервью для телеканала "Доктор"',
        duration: '24:05',
        platform: 'TV',
        link: '#',
        thumbnail: '/blog/video-2.jpg'
    }
]

export default function BlogContent() {
    return (
        <div className="min-h-screen pt-24">
            {/* Hero */}
            <section className="relative py-16 overflow-hidden">
                <div className="relative max-w-[1200px] mx-auto px-4 text-center">
                    <ScrollReveal width="100%">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Блог и <span className="gradient-text">Медиа</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Статьи, видео и заметки о профессии, лечении и жизни
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Featured Articles */}
            <section className="py-12 section-light">
                <div className="max-w-[1200px] mx-auto px-4">
                    <ScrollReveal width="100%" className="mb-8 flex items-center justify-between">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <FileText className="text-violet-600" />
                            Новые статьи
                        </h2>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-8">
                        {articles.map((article, index) => (
                            <ScrollReveal key={article.id} delay={index * 0.1} className="h-full">
                                <GlassCard className="h-full flex flex-col group cursor-pointer" hover>
                                    <div className="h-48 rounded-xl bg-gray-200 mb-4 overflow-hidden relative">
                                        {/* Placeholder for image */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-violet-100 to-orange-50 flex items-center justify-center text-gray-400">
                                            <FileText size={48} opacity={0.5} />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                        <span>{article.date}</span>
                                        <span>•</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-violet-600 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 flex-grow">
                                        {article.desc}
                                    </p>
                                    <div className="flex items-center text-violet-600 font-medium mt-auto">
                                        Читать далее <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </GlassCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Content */}
            <section className="py-20">
                <div className="max-w-[1200px] mx-auto px-4">
                    <ScrollReveal width="100%" className="mb-8">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Youtube className="text-red-600" />
                            Видео и выступления
                        </h2>
                    </ScrollReveal>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ScrollReveal className="lg:col-span-1">
                            <GlassCard className="h-full flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-red-50 to-white">
                                <Youtube size={64} className="text-red-600 mb-6" />
                                <h3 className="text-xl font-bold mb-2">YouTube Канал</h3>
                                <p className="text-gray-600 mb-6">Подкасты, влоги и полезные видео для пациентов</p>
                                <a
                                    href="https://www.youtube.com/@knamss"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-button px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2"
                                >
                                    Подписаться
                                </a>
                            </GlassCard>
                        </ScrollReveal>

                        {videos.map((video, index) => (
                            <ScrollReveal key={video.id} delay={0.1 + index * 0.1} className="h-full">
                                <GlassCard className="h-full group cursor-pointer relative overflow-hidden" hover>
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10" />
                                    <div className="h-full flex flex-col">
                                        <div className="aspect-video bg-gray-200 rounded-xl mb-4 relative overflow-hidden">
                                            {/* Placeholder */}
                                            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                                                <Play size={48} className="text-white opacity-80 group-hover:scale-110 transition-transform" />
                                            </div>
                                        </div>
                                        <h3 className="font-bold text-lg mb-1 group-hover:text-violet-600 transition-colors">{video.title}</h3>
                                        <p className="text-sm text-gray-500">{video.platform} • {video.duration}</p>
                                    </div>
                                </GlassCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instagram Feed Teaser */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-[1200px] mx-auto px-4 text-center">
                    <ScrollReveal>
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Instagram className="text-pink-600" size={32} />
                            <h2 className="text-2xl font-bold">Instagram</h2>
                        </div>
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                            Следите за моей жизнью и работой в реальном времени. Сторис, посты и прямые эфиры.
                        </p>
                        <a
                            href="https://instagram.com/dr.markova" // Need to verify actual handle if possible, user said "links to instagram", assuming standard placeholder or user provided in chat history... user provided none, using generic or maybe checking contacts. Contacts had telegram. I'll use a placeholder or derived from context if any. Contacts page didn't have insta. I will use a generic one or leave it for user to fill.
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-button px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
                        >
                            Перейти в Instagram <ArrowRight size={20} />
                        </a>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
