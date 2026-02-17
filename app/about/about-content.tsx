'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Award, Users, Clock, Plane, Trophy } from 'lucide-react'
import AnimatedSection from '@/components/animated-section'
import GlassCard from '@/components/glass-card'
import Counter from '@/components/counter'

const stats = [
  { icon: Clock, value: 919, suffix: '+', label: 'часов приёма в 2024' },
  { icon: Users, value: 136, suffix: '', label: 'часов обучения студентов' },
  { icon: Heart, value: 1000, suffix: '+', label: 'счастливых улыбок' },
  { icon: Award, value: 5, suffix: '+', label: 'брендов-партнёров' },
]

export default function AboutContent() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-orange-50" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-200 rounded-full blur-[100px] opacity-30" />

        <div className="relative max-w-[1200px] mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
              Больше, чем <span className="gradient-text">ортодонт</span>
            </h1>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            <AnimatedSection delay={0.1}>
              <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/hero-photo.jpg"
                  alt="Анастасия Маркова"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Привет! Я Анастасия Маркова — врач-ортодонт с <span className="font-semibold text-violet-600">10+ летним опытом</span>, 
                  преподаватель кафедры ортодонтии РУДН и спикер ведущих стоматологических брендов.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Моя миссия — не просто исправлять прикус, а дарить людям уверенность через красивую улыбку. 
                  А ещё — делиться знаниями с коллегами и студентами, развивать профессию и вдохновлять.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Вне клиники я играю в большой теннис, веду подкаст о стоматологии и жизни, 
                  выступаю на конференциях и просто люблю жизнь во всех её проявлениях.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">
              В <span className="gradient-text">цифрах</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <GlassCard className="text-center">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="text-white" size={28} />
                  </div>
                  <p className="text-4xl font-bold gradient-text mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-4">
              Не только <span className="gradient-text">работа</span>
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Жизнь — это баланс. Верю, что врач, который живёт полной жизнью, лучше понимает своих пациентов.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <GlassCard className="flex items-start gap-4">
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
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlassCard className="flex items-start gap-4">
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
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
