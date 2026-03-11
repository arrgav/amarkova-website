'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, GraduationCap, Mic, Stethoscope, BookOpen, Headphones } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'
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
    icon: BookOpen,
    title: 'Обучение',
    desc: 'Регулярно повышаю квалификацию, прохожу курсы ведущих мировых экспертов в области ортодонтии.',
    link: '/education',
    cta: 'Смотреть курсы',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Decorative elements are now handled by OrganicBackground in layout */}

        <div className="relative max-w-[1200px] mx-auto px-4 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal variant="slide-in-right" className="z-10">
            <p className="text-lg font-medium text-violet-600 mb-2">
              Добро пожаловать
            </p>
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
          </ScrollReveal>

          {/* Hero Image */}
          <ScrollReveal variant="scale" delay={0.4} width="100%" className="relative z-10 w-full">
            <div
              className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl"
              style={{ paddingBottom: '133.33%' }}
            >
              <Image
                src="/hero-photo.jpg"
                alt="Анастасия Маркова — врач-ортодонт"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating glass card moved out of ScrollReveal if needed or wrapped differently */}
            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 max-w-[200px]">
              <p className="text-3xl font-bold gradient-text">10+</p>
              <p className="text-sm text-gray-600">лет опыта</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-20 section-light">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%" className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Чем я <span className="gradient-text">занимаюсь</span>
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Объединяю медицинскую практику и образовательную деятельность для развития профессии
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directions.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1} variant="fade-up" className="h-full">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 section-light">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="slide-in-right" width="100%">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-xl mb-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/lifestyle-photo.jpg"
                  alt="Анастасия Маркова - лайфстайл"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <p className="text-white font-bold text-xl drop-shadow-lg">Стендап & Теннис</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-6">
                Не только <span className="gradient-text">ортодонтия</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Верю, что врач должен быть разносторонней личностью.
                Мои увлечения помогают мне сохранять баланс и заряжать энергией своих пациентов.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 shrink-0">
                    <Mic size={20} />
                  </div>
                  <p className="text-gray-600"><span className="font-semibold text-gray-900">Стендап:</span> Юмор помогает находить общий язык с кем угодно.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>
                  </div>
                  <p className="text-gray-600"><span className="font-semibold text-gray-900">Теннис:</span> Спорт учит фокусироваться на цели и побеждать.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                    <Headphones size={20} />
                  </div>
                  <p className="text-gray-600"><span className="font-semibold text-gray-900">Подкаст и медиа:</span> Веду стоматологический подкаст КНАМСС совместно с коллегами-врачами.</p>
                </div>
              </div>
              <Link
                href="/blog"
                className="glass-button px-8 py-3 rounded-full text-lg font-medium inline-flex items-center gap-2"
              >
                Мой лайфстайл блог <ArrowRight size={20} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Removed static gradient opacity layer to show organic background */}
        <div className="max-w-[1200px] mx-auto px-4 text-center relative z-10">
          <ScrollReveal variant="scale">
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
