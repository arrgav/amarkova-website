'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Stethoscope,
  Sparkles,
  Baby,
  ArrowRight,
  CheckCircle2,
  Send,
  GraduationCap,
  Mic2,
  Presentation,
  Flame,
  Briefcase,
  Video,
  Users,
  Calendar,
  MapPin,
} from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'
import GlassCard from '@/components/glass-card'
import Link from 'next/link'

const patientServices = [
  {
    icon: Stethoscope,
    title: 'Консультация ортодонта',
    desc: 'Первичная диагностика, составление плана лечения, фотопротокол',
  },
  {
    icon: Sparkles,
    title: 'Брекет-системы',
    desc: 'Лечение на металлических, керамических и сапфировых брекетах',
  },
  {
    icon: Sparkles,
    title: 'Элайнеры',
    desc: 'Исправление прикуса прозрачными каппами (EuroKappa и др.)',
  },
  {
    icon: Baby,
    title: 'Детская ортодонтия',
    desc: 'Лечение детей: пластинки, трейнеры, частичные брекет-системы',
  },
]

const doctorServices = [
  {
    icon: GraduationCap,
    title: 'Обучение и курсы',
    desc: 'Авторские курсы по ортодонтии, мастер-классы и вебинары',
    link: '/education',
  },
  {
    icon: Mic2,
    title: 'Спикерство',
    desc: 'Выступления на конференциях и конгрессах',
    link: '/education',
  },
  {
    icon: Presentation,
    title: 'Наставничество',
    desc: 'Индивидуальный разбор клинических случаев (Mentoring)',
    link: '/education',
  },
  {
    icon: Flame,
    title: 'Курс по выгоранию',
    desc: 'Личный онлайн курс по профилактике профессионального выгорания для врачей. Скоро!',
    link: '/contacts',
  },
]

const upcomingEvents = [
  {
    title: 'Элайнеры от А до Я',
    type: 'Сертификационный курс',
    location: 'Москва',
    date: 'Апрель 2026',
  },
  {
    title: 'ОртоРестарт',
    type: 'Совместный курс',
    location: 'Москва',
    date: '9 июня 2026',
  },
  {
    title: 'Элайнеры без иллюзий: зачем врачу нужен наставник?',
    type: 'Бесплатный вебинар',
    location: 'Онлайн',
    date: 'Скоро',
  },
]

const partnerServices = [
  {
    icon: Briefcase,
    title: 'Амбассадорство бренда',
    desc: 'Представляю продукты на конференциях, вебинарах и в социальных сетях перед аудиторией 10 000+ специалистов',
  },
  {
    icon: Mic2,
    title: 'Корпоративный спикер',
    desc: 'Провожу обучающие мероприятия для дилеров, дистрибьюторов и клиентов компании',
  },
  {
    icon: Video,
    title: 'Контент-партнёрство',
    desc: 'Создаю образовательный контент: обзоры, клинические кейсы, обучающие видео',
  },
  {
    icon: Users,
    title: 'Презентации продуктов',
    desc: 'Провожу демонстрацию и тестирование новых продуктов для врачей-ортодонтов',
  },
]

const currentPartners = [
  'American Orthodontics Russia',
  'EuroKappa',
  '6Elements',
  'Andrews Appliance System',
  'Orthoplus',
]

const partnerStats = [
  { value: '5+', label: 'брендов-партнёров' },
  { value: '10 000+', label: 'врачей в аудитории' },
  { value: '15+', label: 'городов России' },
]

const benefits = [
  '10+ лет клинического опыта',
  'Преподаватель кафедры РУДН',
  'Лучший лектор РУДН (победитель конкурса)',
  'Спикер международных конгрессов',
  '200+ завершённых кейсов на элайнерах',
  'Комплексный подход к лечению',
  'Современное цифровое оборудование',
  'Преподавание на русском и английском',
]

type Tab = 'patients' | 'doctors' | 'partners'

export default function ServicesContent() {
  const [activeTab, setActiveTab] = useState<Tab>('patients')

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
          <ScrollReveal width="100%">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Услуги и <span className="gradient-text">Направления</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Выбирайте направление, которое вас интересует
            </p>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/95 p-1 rounded-full border border-gray-200 inline-flex flex-wrap gap-1 sm:gap-0">
                {(
                  [
                    { key: 'patients', label: 'Пациентам' },
                    { key: 'doctors', label: 'Врачам' },
                    { key: 'partners', label: 'Партнёрам' },
                  ] as { key: Tab; label: string }[]
                ).map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium transition-all duration-300 ${
                      activeTab === key
                        ? 'bg-violet-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-violet-600'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 section-light min-h-[400px]">
        <div className="max-w-[1200px] mx-auto px-4">
          <AnimatePresence mode="wait">
            {/* ── PATIENTS ── */}
            {activeTab === 'patients' && (
              <motion.div
                key="patients"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {patientServices.map((service, index) => (
                    <ScrollReveal key={service.title} delay={index * 0.1} className="h-full">
                      <GlassCard className="h-full">
                        <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4">
                          <service.icon className="text-white" size={28} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.desc}</p>
                      </GlassCard>
                    </ScrollReveal>
                  ))}
                </div>

                {/* Patient CTA */}
                <div className="text-center">
                  <ScrollReveal variant="scale">
                    <h2 className="text-2xl font-bold mb-4">Запишитесь на приём</h2>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Первичная консультация — это уже первый шаг к красивой улыбке. Напишите мне в Telegram, и мы подберём удобное время.
                    </p>
                    <a
                      href="https://t.me/ortho_amarkova"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-button px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
                    >
                      <Send size={20} /> Записаться в Telegram
                    </a>
                  </ScrollReveal>
                </div>
              </motion.div>
            )}

            {/* ── DOCTORS ── */}
            {activeTab === 'doctors' && (
              <motion.div
                key="doctors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                id="doctors"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                  {doctorServices.map((service, index) => (
                    <ScrollReveal key={service.title} delay={index * 0.1} className="h-full">
                      <GlassCard className="h-full flex flex-col">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4">
                          <service.icon className="text-white" size={28} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>
                        <Link
                          href={service.link}
                          className="text-violet-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                        >
                          Подробнее <ArrowRight size={16} />
                        </Link>
                      </GlassCard>
                    </ScrollReveal>
                  ))}
                </div>

                {/* Upcoming events */}
                <ScrollReveal>
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    Ближайшие <span className="gradient-text">мероприятия</span>
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-5 mb-12">
                    {upcomingEvents.map((event, index) => (
                      <motion.div
                        key={event.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/80 border border-violet-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <span className="inline-block text-xs font-semibold uppercase tracking-wide text-violet-500 bg-violet-50 rounded-full px-3 py-1 mb-3">
                          {event.type}
                        </span>
                        <h3 className="font-semibold text-gray-800 mb-3 leading-snug">{event.title}</h3>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-1">
                          <MapPin size={13} className="shrink-0" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                          <Calendar size={13} className="shrink-0" />
                          {event.date}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Doctor CTA */}
                <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/education"
                    className="glass-button px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
                  >
                    <GraduationCap size={20} /> Записаться на курс
                  </Link>
                  <a
                    href="https://t.me/drmarkovaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button-outline px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
                  >
                    <Send size={20} /> Написать о менторстве
                  </a>
                </div>
              </motion.div>
            )}

            {/* ── PARTNERS ── */}
            {activeTab === 'partners' && (
              <motion.div
                key="partners"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Partner service cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                  {partnerServices.map((service, index) => (
                    <ScrollReveal key={service.title} delay={index * 0.1} className="h-full">
                      <GlassCard className="h-full">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-violet-600 flex items-center justify-center mb-4">
                          <service.icon className="text-white" size={28} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.desc}</p>
                      </GlassCard>
                    </ScrollReveal>
                  ))}
                </div>

                {/* Stats row */}
                <ScrollReveal>
                  <div className="grid grid-cols-3 gap-4 mb-12">
                    {partnerStats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center bg-white/70 border border-violet-100 rounded-2xl py-6 px-4 shadow-sm"
                      >
                        <p className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                        <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Current partners */}
                <ScrollReveal>
                  <h2 className="text-2xl font-bold mb-5 text-center">
                    Текущие <span className="gradient-text">партнёры</span>
                  </h2>
                  <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {currentPartners.map((partner) => (
                      <span
                        key={partner}
                        className="bg-white border border-violet-200 text-gray-700 font-medium rounded-full px-5 py-2 text-sm shadow-sm"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Partner CTA */}
                <div className="text-center">
                  <ScrollReveal variant="scale">
                    <h2 className="text-2xl font-bold mb-3">Обсудим сотрудничество?</h2>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Напишите мне на почту или в Telegram — расскажите о вашем продукте, и мы найдём подходящий формат.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <a
                        href="mailto:hello@amarkova.ru"
                        className="glass-button px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
                      >
                        <ArrowRight size={20} /> hello@amarkova.ru
                      </a>
                      <a
                        href="https://t.me/drmarkova_a"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-button-outline px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
                      >
                        <Send size={20} /> @drmarkova_a
                      </a>
                    </div>
                  </ScrollReveal>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="slide-in-right">
              <h2 className="text-3xl font-bold mb-6">
                Почему мне <span className="gradient-text">доверяют</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-violet-600 shrink-0" size={22} />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} variant="scale">
              <GlassCard className="p-8 text-center bg-gradient-to-br from-white to-violet-50">
                <h3 className="text-2xl font-bold mb-4">Качество и Результат</h3>
                <p className="text-gray-600 mb-6">
                  Моя цель — не просто исправить прикус, а улучшить качество жизни моих пациентов и уровень знаний моих студентов.
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
