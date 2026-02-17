'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Users, GraduationCap, Mic, Stethoscope } from 'lucide-react'
import AnimatedSection from '@/components/animated-section'
import GlassCard from '@/components/glass-card'

const directions = [
  {
    icon: Stethoscope,
    title: 'Ортодонтия',
    desc: 'Исправление прикуса у детей и взрослых. Брекет-системы, элайнеры, комплексное лечение.',
    link: '/services',
    cta: 'Записаться на приём',
  },
  {
    icon: Mic,
    title: 'Амбассадор',
    desc: 'Представляю ведущий ортодонтический бренд. Провожу мастер-классы и вебинары для врачей.',
    link: '/education',
    cta: 'Пригласить на мероприятие',
  },
  {
    icon: GraduationCap,
    title: 'Преподавание',
    desc: 'Преподаватель кафедры ортодонтии РУДН. Обучаю будущих врачей и делюсь опытом с коллегами.',
    link: '/education',
    cta: 'Узнать о курсах',
  },
  {
    icon: Users,
    title: 'Подкаст и медиа',
    desc: 'Веду подкаст о стоматологии, карьере и жизни. Выступаю на конференциях и в СМИ.',
    link: '/podcast',
    cta: 'Слушать подкаст',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-violet-50" />

        {/* Decorative blurs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-violet-200 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-200 rounded-full blur-[100px] opacity-30" />

        <div className="relative max-w-[1200px] mx-auto px-4 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Анастасия Маркова</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-3">
              Врач-ортодонт · Спикер · Преподаватель РУДН
            </p>
            <p className="text-xl sm:text-2xl text-gray-800 mb-8 leading-relaxed">
              Создаю улыбки, которые меняют жизнь.<br />
              <span className="text-violet-600">Делюсь знаниями</span>, которые меняют профессию.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://t.me/ortho_amarkova"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-8 py-4 rounded-full text-lg font-medium inline-flex items-center justify-center gap-2"
              >
                Для пациентов <ArrowRight size={20} />
              </Link>
              <Link
                href="https://t.me/drmarkovaa"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button-outline px-8 py-4 rounded-full text-lg font-medium inline-flex items-center justify-center gap-2"
              >
                Для коллег <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-photo.jpg"
                alt="Анастасия Маркова — врач-ортодонт"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating glass card */}
            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 max-w-[200px]">
              <p className="text-3xl font-bold gradient-text">10+</p>
              <p className="text-sm text-gray-600">лет опыта</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Чем я <span className="gradient-text">занимаюсь</span>
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Объединяю медицинскую практику и образовательную деятельность для развития профессии
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directions.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <GlassCard className="h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{item.desc}</p>
                  <Link
                    href={item.link}
                    className="text-violet-600 font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {item.cta} <ArrowRight size={16} />
                  </Link>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <div className="max-w-[1200px] mx-auto px-4 text-center relative">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Готовы начать путь к <span className="gradient-text">идеальной улыбке</span>?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Запишитесь на консультацию или пригласите меня как спикера на ваше мероприятие
            </p>
            <a
              href="https://t.me/drmarkovaa"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button px-10 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
            >
              Связаться в Telegram <ArrowRight size={20} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
