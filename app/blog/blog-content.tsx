'use client'

import { motion } from 'framer-motion'
import { Youtube, FileText, ArrowRight, Play, Mic } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'
import GlassCard from '@/components/glass-card'
import Link from 'next/link'

const articles = [
  {
    id: 1,
    title: 'Нейросети в ортодонтии: может ли ИИ проверить прикус дома',
    desc: 'Современные технологии ИИ всё активнее внедряются в ортодонтию. Может ли нейросеть помочь оценить прикус?',
    date: '5 Ноя 2025',
    readTime: '5 мин',
    link: 'https://riamo.ru/news/zdravoohranenie/nejroseti-v-ortodontii-mozhet-li-ii-proverit-prikus-doma/',
    source: 'РИАМО',
    external: true,
    soon: false,
  },
  {
    id: 2,
    title: 'Доктор Маркова объяснила, может ли ИИ проверить прикус дома',
    desc: 'При хорошем качестве фото ИИ может определить скученность зубов и признаки неправильного прикуса.',
    date: '5 Ноя 2025',
    readTime: '3 мин',
    link: 'https://spbdnevnik.ru/news/2025-11-05/doktor-markova-obyasnila-mozhet-li-ii-proverit-prikus-doma',
    source: 'СПб Дневник',
    external: true,
    soon: false,
  },
  {
    id: 3,
    title: 'Элайнеры или брекеты: как выбрать метод лечения?',
    desc: 'Разбираю главные различия двух методов, показания и противопоказания с точки зрения практикующего ортодонта.',
    date: 'Авторская статья',
    readTime: '7 мин',
    link: '/blog',
    source: 'Блог',
    external: false,
    soon: true,
  },
  {
    id: 4,
    title: 'Профессиональное выгорание у врачей: как я с этим справляюсь',
    desc: 'Честный разговор о выгорании в медицине. Мои инструменты для сохранения любви к профессии.',
    date: 'Авторская статья',
    readTime: '6 мин',
    link: '/blog',
    source: 'Блог',
    external: false,
    soon: true,
  },
  {
    id: 5,
    title: 'Как начать работать с элайнерами: путь от «0» до уверенной практики',
    desc: 'Личный опыт освоения элайнерной практики и советы для врачей, которые делают первые шаги.',
    date: 'Авторская статья',
    readTime: '8 мин',
    link: '/blog',
    source: 'Блог',
    external: false,
    soon: true,
  },
]

const videos = [
  {
    id: 1,
    title: 'Мой путь в ортодонтии',
    platform: 'YouTube',
    link: 'https://www.youtube.com/@knamss',
    gradient: 'from-violet-500 to-orange-400',
  },
  {
    id: 2,
    title: 'Интервью для телеканала «Доктор»',
    platform: 'ТВ',
    link: '/blog',
    gradient: 'from-orange-400 to-pink-500',
  },
]

function ArticleCard({ article, index }: { article: typeof articles[0]; index: number }) {
  const inner = (
    <GlassCard className="h-full flex flex-col group cursor-pointer relative" hover>
      {article.soon && (
        <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold bg-violet-100 text-violet-700 z-10">
          Скоро
        </span>
      )}
      <div className="h-28 rounded-xl mb-4 overflow-hidden relative bg-gradient-to-tr from-violet-100 to-orange-50 flex items-center justify-center">
        <span className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-sm font-medium text-gray-700 shadow-sm">
          {article.source}
        </span>
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3 flex-wrap">
        <span>{article.date}</span>
        <span>•</span>
        <span>{article.readTime}</span>
        {!article.soon && (
          <>
            <span>•</span>
            <span className="text-violet-600 font-medium">{article.source}</span>
          </>
        )}
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-violet-600 transition-colors pr-8">
        {article.title}
      </h3>
      <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
        {article.desc}
      </p>
      {!article.soon ? (
        <div className="flex items-center text-violet-600 font-medium text-sm mt-auto">
          Читать далее{' '}
          <ArrowRight size={15} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      ) : (
        <div className="flex items-center text-gray-400 font-medium text-sm mt-auto">
          Готовится к публикации
        </div>
      )}
    </GlassCard>
  )

  return (
    <ScrollReveal key={article.id} delay={index * 0.1} className="h-full">
      {article.external ? (
        <a href={article.link} target="_blank" rel="noopener noreferrer" className="block h-full">
          {inner}
        </a>
      ) : (
        <div className="h-full">{inner}</div>
      )}
    </ScrollReveal>
  )
}

export default function BlogContent() {
  return (
    <div className="min-h-screen pt-24">

      {/* ── Hero ─────────────────────────────────────────── */}
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

      {/* ── Articles ─────────────────────────────────────── */}
      <section className="py-12 section-light">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%" className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <FileText className="text-violet-600" />
              Статьи
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Content ─────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%" className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Youtube className="text-red-600" />
              Видео и выступления
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* YouTube channel card */}
            <ScrollReveal className="lg:col-span-1">
              <GlassCard className="h-full flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-red-50 to-white">
                <Youtube size={56} className="text-red-600 mb-5" />
                <h3 className="text-xl font-bold mb-2">Подкаст КНАМСС</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  О жизни и профессии врача — подкаст на YouTube
                </p>
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

            {/* Video placeholders */}
            {videos.map((video, index) => (
              <ScrollReveal key={video.id} delay={0.1 + index * 0.1} className="h-full">
                <a
                  href={video.link}
                  target={video.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <GlassCard className="h-full group cursor-pointer" hover>
                    {/* Gradient thumbnail */}
                    <div className={`aspect-video rounded-xl mb-4 relative overflow-hidden bg-gradient-to-br ${video.gradient} flex items-center justify-center`}>
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className="w-16 h-16 rounded-full bg-white/25 backdrop-blur flex items-center justify-center shadow-lg"
                      >
                        <Play size={32} className="text-white translate-x-0.5" />
                      </motion.div>
                    </div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-violet-600 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-500">{video.platform}</p>
                  </GlassCard>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TikTok / Short Videos ─────────────────────────── */}
      <section className="py-12 section-light">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <GlassCard className="max-w-2xl mx-auto p-8 text-center">
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-5">
                <Mic className="text-white" size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-3">
                Короткие видео и <span className="gradient-text">советы</span>
              </h2>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                Полезные ролики о здоровье зубов, разборы случаев и жизнь врача в коротком формате
              </p>
              <a
                href="https://www.tiktok.com/@drmarkova"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-8 py-3 rounded-full text-base font-medium inline-flex items-center gap-2"
              >
                @drmarkova в TikTok <ArrowRight size={18} />
              </a>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
