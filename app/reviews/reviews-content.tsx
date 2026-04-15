'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, User, Stethoscope, GraduationCap, Briefcase, ArrowLeft } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'
import GlassCard from '@/components/glass-card'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Анастасия Маркова',
  url: 'https://amarkova.ru',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '7',
    reviewCount: '7',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Мария К.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Анастасия — просто волшебник! Носила брекеты 1.5 года и результат превзошёл все ожидания.',
      datePublished: '2025-01-01',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ольга Р.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Прошла менторство по элайнерам у Анастасии. Это перевернуло мою практику!',
      datePublished: '2025-03-01',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'К.В. Наам' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Коллега высокого профессионального уровня. Рекомендую как специалиста.',
      datePublished: '2025-09-03',
    },
  ],
}

type Tab = 'patients' | 'doctors' | 'colleagues'

interface Review {
  name: string
  role?: string
  text: string
}

const patientReviews: Review[] = [
  {
    name: 'Мария К.',
    text: 'Анастасия — просто волшебник! Носила брекеты 1.5 года и результат превзошёл все ожидания. Очень внимательный и профессиональный подход, всегда объясняет каждый шаг лечения. Спасибо за мою новую улыбку!',
  },
  {
    name: 'Екатерина С.',
    text: 'Обратилась с запущенным случаем скученности. Доктор Маркова составила подробный план лечения на элайнерах, объяснила каждый этап. Через год — идеальный результат! Очень благодарна за терпение и профессионализм.',
  },
  {
    name: 'Алина М.',
    text: 'Первый раз в жизни не боялась идти к стоматологу. Анастасия очень внимательно выслушала все мои опасения и страхи. Уже 6 месяцев на элайнерах — результат виден!',
  },
]

const doctorReviews: Review[] = [
  {
    name: 'Ольга Р.',
    role: 'врач-ортодонт',
    text: 'Прошла менторство по элайнерам у Анастасии. Это перевернуло мою практику! За 3 месяца уверенно начала вести собственные случаи. Анастасия — редкий преподаватель, который передаёт не только знания, но и уверенность.',
  },
  {
    name: 'Наталья В.',
    role: 'стоматолог',
    text: 'Посетила курс «Элайнеры от А до Я» в Краснодаре. Невероятная подача материала, живые примеры, разбор реальных кейсов. Рекомендую каждому врачу, кто хочет освоить элайнеры на высоком уровне.',
  },
  {
    name: 'Дмитрий К.',
    role: 'ортодонт',
    text: 'Анастасия — исключительный преподаватель. На её курсах нет воды — только практика, реальные кейсы и честный разбор ошибок. После курса сразу начал применять всё на практике.',
  },
]

const colleagueReviews: Review[] = [
  {
    name: 'К.В. Наам',
    role: 'врач-пародонтолог (ПроДокторов)',
    text: 'Коллега высокого профессионального уровня. Ответственно подходит к каждому пациенту, грамотно выстраивает план лечения, умеет работать в команде. Рекомендую как специалиста и как человека.',
  },
]

function StarRating({ accent }: { accent: string }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`w-4 h-4 fill-current ${accent}`} />
      ))}
    </div>
  )
}

function ReviewCard({
  review,
  accent,
  starAccent,
  icon: Icon,
}: {
  review: Review
  accent: string
  starAccent: string
  icon: React.ElementType
}) {
  return (
    <GlassCard className="p-6 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${accent}`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-white">{review.name}</span>
          {review.role && (
            <span className="text-sm text-white/60">{review.role}</span>
          )}
          <StarRating accent={starAccent} />
        </div>
      </div>
      <p className="text-white/80 leading-relaxed text-sm">«{review.text}»</p>
    </GlassCard>
  )
}

export default function ReviewsContent() {
  const [activeTab, setActiveTab] = useState<Tab>('patients')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'patients', label: 'Пациенты' },
    { id: 'doctors', label: 'Врачи' },
    { id: 'colleagues', label: 'Коллеги' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen gradient-bg">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                На главную
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Отзывы об{' '}
                <span className="gradient-text">Анастасии Марковой</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-xl text-white/70 mb-10">
                Реальные истории пациентов, врачей и партнёров
              </p>
            </ScrollReveal>

            {/* AggregateRating display */}
            <ScrollReveal delay={0.3}>
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 glass-card px-6 py-4 rounded-2xl">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-current text-amber-400"
                    />
                  ))}
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-2xl font-bold text-white">5.0 из 5.0</span>
                  <span className="text-sm text-white/60">
                    На основе отзывов пациентов и коллег
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Tabs + Reviews */}
        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Tab buttons */}
            <ScrollReveal delay={0.1}>
              <div className="flex gap-2 mb-10 flex-wrap">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={
                      activeTab === tab.id
                        ? 'glass-button text-sm px-5 py-2 rounded-full font-medium'
                        : 'glass-button-outline text-sm px-5 py-2 rounded-full font-medium'
                    }
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Patient reviews */}
            {activeTab === 'patients' && (
              <motion.div
                key="patients"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {patientReviews.map((review, i) => (
                  <ReviewCard
                    key={i}
                    review={review}
                    accent="bg-amber-500"
                    starAccent="text-amber-400"
                    icon={User}
                  />
                ))}
              </motion.div>
            )}

            {/* Doctor reviews */}
            {activeTab === 'doctors' && (
              <motion.div
                key="doctors"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {doctorReviews.map((review, i) => (
                  <ReviewCard
                    key={i}
                    review={review}
                    accent="bg-violet-600"
                    starAccent="text-violet-400"
                    icon={GraduationCap}
                  />
                ))}
              </motion.div>
            )}

            {/* Colleague reviews */}
            {activeTab === 'colleagues' && (
              <motion.div
                key="colleagues"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="grid gap-6 md:grid-cols-2"
              >
                {colleagueReviews.map((review, i) => (
                  <ReviewCard
                    key={i}
                    review={review}
                    accent="bg-pink-500"
                    starAccent="text-pink-400"
                    icon={Stethoscope}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="section-light py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Patients CTA */}
                <GlassCard className="p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Хотите попасть на приём?
                  </h3>
                  <p className="text-white/70 text-sm">
                    Запишитесь на консультацию к Анастасии Марковой в Москве
                  </p>
                  <a
                    href="https://t.me/drmarkova_assist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button w-full text-center py-3 rounded-xl font-medium"
                  >
                    Написать в Telegram
                  </a>
                </GlassCard>

                {/* Doctors CTA */}
                <GlassCard className="p-8 flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Хотите пройти обучение?
                  </h3>
                  <p className="text-white/70 text-sm">
                    Курсы и менторство по элайнерам для врачей
                  </p>
                  <a
                    href="https://t.me/drmarkova_assist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button-outline w-full text-center py-3 rounded-xl font-medium"
                  >
                    Узнать об обучении
                  </a>
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  )
}
