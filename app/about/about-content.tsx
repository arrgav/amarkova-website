'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Heart, Award, Users, Clock,
  Plane, Trophy, Mic, Headphones,
  ExternalLink, Newspaper,
} from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'
import GlassCard from '@/components/glass-card'
import Counter from '@/components/counter'

const stats = [
  { icon: Clock, value: 919, suffix: '+', label: 'часов приёма в 2025' },
  { icon: Users, value: 136, suffix: '', label: 'часов обучения студентов' },
  { icon: Heart, value: 1000, suffix: '+', label: 'счастливых улыбок' },
  { icon: Award, value: 5, suffix: '+', label: 'брендов-партнёров' },
]

const timelineItems = [
  { year: '2013', text: 'Начало пути в стоматологии', side: 'left' },
  { year: '2015', text: 'Специализация в ортодонтии', side: 'right' },
  { year: '2019', text: 'Преподаватель кафедры ортодонтии РУДН (ассистент)', side: 'left' },
  { year: '2020', text: 'Первые кейсы на элайнерах', side: 'right' },
  { year: '2022', text: 'Победитель конкурса «Лучший лектор РУДН»', side: 'left' },
  { year: '2023', text: 'Официальный спикер и амбассадор ортодонтических брендов', side: 'right' },
  { year: '2024', text: '200+ завершённых кейсов на элайнерах', side: 'left' },
  { year: '2025', text: '919 часов клинического приёма, 136 часов преподавания', side: 'right' },
]

const achievements = [
  {
    emoji: '🏆',
    title: '«Лучший лектор РУДН»',
    desc: 'Победитель университетского конкурса среди преподавателей',
  },
  {
    emoji: '📚',
    title: 'Автор методических пособий',
    desc: 'Разработка учебных материалов по ортодонтии для студентов-медиков',
  },
  {
    emoji: '🌍',
    title: 'Преподавание на английском',
    desc: 'Обучение иностранных студентов РУДН на английском языке',
  },
  {
    emoji: '🎤',
    title: 'Спикер конференций',
    desc: 'Выступления на конференциях и конгрессах по всей России',
  },
]

const mediaItems = [
  {
    title: 'Нейросети в ортодонтии: может ли ИИ проверить прикус дома',
    source: 'РИАМО',
    date: '5 ноября 2025',
    link: 'https://riamo.ru/news/zdravoohranenie/nejroseti-v-ortodontii-mozhet-li-ii-proverit-prikus-doma/',
  },
  {
    title: 'Доктор Маркова объяснила, может ли ИИ проверить прикус дома',
    source: 'СПб Дневник',
    date: '5 ноября 2025',
    link: 'https://spbdnevnik.ru/news/2025-11-05/doktor-markova-obyasnila-mozhet-li-ii-proverit-prikus-doma',
  },
]

export default function AboutContent() {
  return (
    <div className="min-h-screen pt-24">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
              Больше, чем <span className="gradient-text">ортодонт</span>
            </h1>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            <ScrollReveal delay={0.1} variant="scale" width="100%">
              <div
                className="relative w-full rounded-3xl overflow-hidden shadow-xl"
                style={{ paddingBottom: '66.67%' }}
              >
                <Image
                  src="/hero-photo.jpg"
                  alt="Анастасия Маркова"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} variant="slide-in-right">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Привет! Я Анастасия Маркова — врач-ортодонт с{' '}
                  <span className="font-semibold text-violet-600">10+ летним опытом</span>,
                  преподаватель кафедры ортодонтии РУДН, спикер и амбассадор ведущих стоматологических брендов.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Моя миссия — не просто исправлять прикус, а дарить людям уверенность через красивую улыбку.
                  Являюсь наставником для специалистов, которые только начинают свой путь в работе с элайнерами.
                  Делюсь знаниями с коллегами и студентами, развиваю профессию и вдохновляю.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Вне клиники я{' '}
                  <span className="font-semibold text-violet-600">выступаю со StandUp</span>,
                  играю в большой теннис, веду подкаст о стоматологии и жизни, выступаю на конференциях
                  и просто люблю жизнь во всех её проявлениях.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl font-bold text-center mb-12">
              2025 в <span className="gradient-text">цифрах</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1} variant="fade-up" className="h-full">
                <GlassCard className="text-center h-full flex flex-col justify-center">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-white" size={28} />
                  </div>
                  <p className="text-4xl font-bold gradient-text mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Career Timeline ──────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl font-bold text-center mb-4">
              Путь в <span className="gradient-text">профессии</span>
            </h2>
            <p className="text-gray-600 text-center mb-14 max-w-2xl mx-auto">
              Больше десяти лет непрерывного роста — в клинике, в аудитории и на сцене.
            </p>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-violet-500 to-pink-500 md:-translate-x-0.5" />

            <div className="space-y-10">
              {timelineItems.map((item, index) => (
                <ScrollReveal key={item.year} delay={index * 0.08} width="100%">
                  <div
                    className={`relative flex items-center gap-6 md:gap-0 ${
                      item.side === 'right'
                        ? 'md:flex-row'
                        : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content block */}
                    <div
                      className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                        item.side === 'right'
                          ? 'md:mr-auto md:pr-8 md:text-right'
                          : 'md:ml-auto md:pl-8 md:text-left'
                      }`}
                    >
                      <GlassCard className="inline-block w-full">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold gradient-bg text-white mb-2">
                          {item.year}
                        </span>
                        <p className="text-gray-700 font-medium">{item.text}</p>
                      </GlassCard>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full gradient-bg shadow-md ring-2 ring-white shrink-0" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Achievements ─────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl font-bold text-center mb-4">
              Достижения и <span className="gradient-text">признание</span>
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Результаты, которыми я горжусь — в науке, преподавании и профессиональном сообществе.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1} variant="fade-up" className="h-full">
                <GlassCard className="h-full flex flex-col items-center text-center">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Media Appearances ────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl font-bold text-center mb-4">
              В <span className="gradient-text">СМИ</span>
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Публикации и упоминания в средствах массовой информации.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mediaItems.map((item, index) => (
              <ScrollReveal key={item.link} delay={index * 0.1} className="h-full">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <GlassCard className="h-full flex flex-col group cursor-pointer" hover>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                        <Newspaper className="text-white" size={20} />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wide gradient-text">
                          {item.source}
                        </span>
                        <p className="text-xs text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-violet-600 transition-colors flex-grow">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-violet-600 font-medium text-sm mt-auto">
                      Читать статью{' '}
                      <ExternalLink size={14} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </GlassCard>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lifestyle ────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl font-bold text-center mb-4">
              Не только <span className="gradient-text">работа</span>
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Жизнь — это баланс. Верю, что врач, который живёт полной жизнью, лучше понимает своих пациентов.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <GlassCard className="flex items-start gap-4 h-full">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Trophy className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Большой теннис</h3>
                  <p className="text-gray-600">
                    Активный образ жизни помогает сохранять энергию и ясность мышления.
                    Теннис — мой способ перезагрузки и поддержания формы.
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <GlassCard className="flex items-start gap-4 h-full">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Mic className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Стендап комедия</h3>
                  <p className="text-gray-600">
                    Юмор — мой способ коммуникации. Выступаю на открытых микрофонах и верю, что смех лечит.
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <GlassCard className="flex items-start gap-4 h-full">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Plane className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Путешествия</h3>
                  <p className="text-gray-600">
                    Познаю мир и вдохновляюсь новыми культурами. Каждое путешествие —
                    это новый взгляд на жизнь и профессию.
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <GlassCard className="flex items-start gap-4 h-full">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Headphones className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Подкаст КНАМСС</h3>
                  <p className="text-gray-600">
                    Веду стоматологический подкаст КНАМСС совместно с другими врачами.
                    Обсуждаем профессию, карьеру и жизнь в медицине.
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </div>
  )
}
