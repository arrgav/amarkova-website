'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Stethoscope, Sparkles, Baby, Users2, ArrowRight, CheckCircle2, Send, GraduationCap, Mic2, Presentation } from 'lucide-react'
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
    desc: 'Исправление прикуса прозрачными каппами (Invisalign, EuroKappa)',
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
    link: '/education'
  },
  {
    icon: Mic2,
    title: 'Спикерство',
    desc: 'Выступления на конференциях и конгрессах',
    link: '/education'
  },
  {
    icon: Presentation,
    title: 'Наставничество',
    desc: 'Индивдуальный разбор клинических случаев (Mentoring)',
    link: '/education'
  },
]

const benefits = [
  '10+ лет клинического опыта',
  'Преподаватель кафедры РУДН',
  'Спикер международных конгрессов',
  'Комплексный подход к лечению',
  'Современное цифровое оборудование',
]

export default function ServicesContent() {
  const [activeTab, setActiveTab] = useState<'patients' | 'doctors'>('patients')

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
              <div className="bg-white/95 p-1 rounded-full border border-gray-200 inline-flex">
                <button
                  onClick={() => setActiveTab('patients')}
                  className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === 'patients'
                      ? 'bg-violet-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-violet-600'
                    }`}
                >
                  Пациентам
                </button>
                <button
                  onClick={() => setActiveTab('doctors')}
                  className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === 'doctors'
                      ? 'bg-violet-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-violet-600'
                    }`}
                >
                  Врачам
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 section-light min-h-[400px]">
        <div className="max-w-[1200px] mx-auto px-4">
          <AnimatePresence mode="wait">
            {activeTab === 'patients' ? (
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
                    <h2 className="text-2xl font-bold mb-4">Запишитесь на прием</h2>
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
            ) : (
              <motion.div
                key="doctors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid sm:grid-cols-3 gap-8 mb-16">
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

                {/* Doctor CTA */}
                <div className="text-center">
                  <ScrollReveal variant="scale">
                    <h2 className="text-2xl font-bold mb-4">Сотрудничество и обучение</h2>
                    <a
                      href="https://t.me/drmarkovaa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-button-outline px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
                    >
                      <Send size={20} /> Написать лично
                    </a>
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
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-violet-600 shrink-0" size={24} />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} variant="scale">
              {/* Use the same glass card content or updated contextually */}
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
