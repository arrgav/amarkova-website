'use client'

import { motion } from 'framer-motion'
import { Youtube, FileText, ArrowRight, Mic, ExternalLink } from 'lucide-react'
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
    tag: 'СМИ',
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
    tag: 'СМИ',
  },
  {
    id: 3,
    title: 'Консультация ортодонта: что происходит на первом приёме',
    desc: 'Что включает первичная консультация: диагностика прикуса, фотопротокол, план лечения. Как подготовиться и сколько стоит.',
    date: 'Авторская статья',
    readTime: '7 мин',
    link: '/blog/konsultaciya-ortodonta',
    source: 'Блог',
    external: false,
    soon: false,
    tag: 'Пациентам',
  },
  {
    id: 4,
    title: 'Брекет-системы: какие бывают, сколько стоят и как выбрать',
    desc: 'Металлические, керамические, сапфировые — сравниваю виды брекетов, объясняю разницу и помогаю выбрать подходящий вариант.',
    date: 'Авторская статья',
    readTime: '9 мин',
    link: '/blog/breketsy',
    source: 'Блог',
    external: false,
    soon: false,
    tag: 'Пациентам',
  },
  {
    id: 5,
    title: 'Элайнеры: всё, что нужно знать перед началом лечения',
    desc: 'Как работают прозрачные капы, кому подходят, сколько стоят — честный разбор от официального спикера EuroKappa с 200+ кейсами.',
    date: 'Авторская статья',
    readTime: '10 мин',
    link: '/blog/elainery',
    source: 'Блог',
    external: false,
    soon: false,
    tag: 'Пациентам',
  },
  {
    id: 6,
    title: 'Детская ортодонтия: когда начинать и что нужно знать родителям',
    desc: 'Когда первый раз к ортодонту, как работают трейнеры и пластинки, стоит ли лечить молочные зубы — разбираю главные вопросы родителей.',
    date: 'Авторская статья',
    readTime: '8 мин',
    link: '/blog/detskaya-ortodontiya',
    source: 'Блог',
    external: false,
    soon: false,
    tag: 'Родителям',
  },
  {
    id: 7,
    title: 'Профессиональное выгорание у врачей: как я с этим справляюсь',
    desc: 'Честный разговор о выгорании в медицине. Мои инструменты для сохранения любви к профессии.',
    date: 'Авторская статья',
    readTime: '6 мин',
    link: '/blog',
    source: 'Блог',
    external: false,
    soon: true,
    tag: 'Врачам',
  },
  {
    id: 8,
    title: 'Как начать работать с элайнерами: путь от «0» до уверенной практики',
    desc: 'Личный опыт освоения элайнерной практики и советы для врачей, которые делают первые шаги.',
    date: 'Авторская статья',
    readTime: '8 мин',
    link: '/blog',
    source: 'Блог',
    external: false,
    soon: true,
    tag: 'Врачам',
  },
]

const youtubeChannels = [
  {
    handle: '@drmarkova_a',
    name: 'Анастасия Маркова',
    description: 'Образовательный контент об ортодонтии, клинические разборы, выступления на конференциях',
    url: 'https://www.youtube.com/@drmarkova_a',
    gradient: 'from-violet-500 to-purple-600',
    tag: 'Профессиональный канал',
  },
  {
    handle: '@knamss',
    name: 'Подкаст КНАМСС',
    description: 'Честные разговоры о профессии врача, карьере, выгорании и жизни в медицине. Анастасия — ведущая',
    url: 'https://www.youtube.com/@knamss',
    gradient: 'from-orange-400 to-pink-500',
    tag: 'Подкаст',
  },
]

const tagColors: Record<string, string> = {
  'СМИ': 'bg-blue-100 text-blue-700',
  'Пациентам': 'bg-violet-100 text-violet-700',
  'Родителям': 'bg-orange-100 text-orange-700',
  'Врачам': 'bg-green-100 text-green-700',
}

function ArticleCard({ article, index }: { article: typeof articles[0]; index: number }) {
  const inner = (
    <GlassCard className="h-full flex flex-col group cursor-pointer relative" hover>
      {article.soon && (
        <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold bg-violet-100 text-violet-700 z-10">
          Скоро
        </span>
      )}
      {article.external && (
        <span className="absolute top-4 right-4 text-gray-400">
          <ExternalLink size={14} />
        </span>
      )}
      <div className="h-28 rounded-xl mb-4 overflow-hidden relative bg-gradient-to-tr from-violet-100 to-orange-50 flex items-center justify-center">
        <span className="px-4 py-2 bg-white/80 backdrop-blur rounded-full text-sm font-medium text-gray-700 shadow-sm">
          {article.source}
        </span>
      </div>
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[article.tag] ?? 'bg-gray-100 text-gray-600'}`}>
          {article.tag}
        </span>
        <span className="text-xs text-gray-400">{article.date}</span>
        <span className="text-xs text-gray-400">·</span>
        <span className="text-xs text-gray-400">{article.readTime}</span>
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-violet-600 transition-colors pr-6 leading-snug">
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
    <ScrollReveal key={article.id} delay={index * 0.07} className="h-full">
      {!article.soon ? (
        article.external ? (
          <a href={article.link} target="_blank" rel="noopener noreferrer" className="block h-full">
            {inner}
          </a>
        ) : (
          <Link href={article.link} className="block h-full">
            {inner}
          </Link>
        )
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

      {/* ── YouTube Channels ──────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%" className="mb-10">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Youtube className="text-red-600" />
              YouTube-каналы
            </h2>
            <p className="text-gray-500 mt-2 text-base">
              Смотрите выступления, клинические разборы и подкаст на YouTube
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {youtubeChannels.map((channel, index) => (
              <ScrollReveal key={channel.handle} delay={index * 0.1}>
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <GlassCard className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${channel.gradient} flex items-center justify-center shrink-0 shadow-md`}>
                        <Youtube className="text-white" size={28} />
                      </div>
                      <div>
                        <span className="inline-block text-xs font-semibold bg-red-100 text-red-700 px-2.5 py-1 rounded-full mb-1">
                          {channel.tag}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-tight">
                          {channel.name}
                        </h3>
                        <p className="text-sm text-gray-500">{channel.handle}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {channel.description}
                    </p>
                    <div className="flex items-center text-red-500 font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                      Перейти на канал <ArrowRight size={16} />
                    </div>
                  </GlassCard>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* YouTube embed placeholder for latest video */}
          <ScrollReveal width="100%">
            <div className="rounded-3xl border border-red-100 bg-gradient-to-br from-red-50/60 to-white/80 p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Youtube className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Смотрите новые видео</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">
                Выступления на конференциях, разборы клинических случаев, подкаст КНАМСС о жизни врача — подписывайтесь, чтобы не пропустить новые выпуски.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://www.youtube.com/@drmarkova_a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2"
                >
                  <Youtube size={16} /> @drmarkova_a
                </a>
                <a
                  href="https://www.youtube.com/@knamss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button-outline px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2"
                >
                  <Youtube size={16} /> @knamss
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Short Videos ────────────────────────────────── */}
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
