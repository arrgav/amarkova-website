'use client'

import { motion } from 'framer-motion'
import { Stethoscope, Sparkles, Baby, Users2, ArrowRight, CheckCircle2, Send } from 'lucide-react'
import AnimatedSection from '@/components/animated-section'
import GlassCard from '@/components/glass-card'

const services = [
  {
    icon: Stethoscope,
    title: 'Консультация ортодонта',
    desc: 'Диагностика, план лечения, ответы на все вопросы',
  },
  {
    icon: Sparkles,
    title: 'Брекет-системы',
    desc: 'Металлические, керамические, сапфировые, лингвальные',
  },
  {
    icon: Sparkles,
    title: 'Элайнеры',
    desc: 'Invisalign, Star Smile и другие системы прозрачных капп',
  },
  {
    icon: Baby,
    title: 'Детская ортодонтия',
    desc: 'Раннее лечение, пластинки, трейнеры',
  },
  {
    icon: Users2,
    title: 'Комплексное лечение',
    desc: 'Совместная работа с хирургами, имплантологами, терапевтами',
  },
]

const benefits = [
  '10+ лет опыта в ортодонтии',
  'Индивидуальный подход к каждому',
  'Современные методики и материалы',
  'Прозрачное ценообразование',
  'Комфортная атмосфера приёма',
]

export default function ServicesContent() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-orange-50" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-200 rounded-full blur-[100px] opacity-30" />

        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Ортодонтическое <span className="gradient-text">лечение</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Современные методы для идеальной улыбки. Исправление прикуса у детей и взрослых.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <GlassCard className="h-full">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4">
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">
                Почему выбирают <span className="gradient-text">меня</span>
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
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlassCard className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Готовы к красивой улыбке?</h3>
                <p className="text-gray-600 mb-6">
                  Запишитесь на консультацию, чтобы узнать оптимальный план лечения именно для вас
                </p>
                <a
                  href="https://t.me/drmarkovaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2 w-full justify-center"
                >
                  <Send size={20} /> Записаться на консультацию
                </a>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
