'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  GraduationCap,
  Mic,
  Stethoscope,
  BookOpen,
  Headphones,
  Briefcase,
  Star,
  X,
  Clock,
  Smile,
  Award,
} from 'lucide-react'

const heroStatDetails: Record<string, { title: string; icon: any; description: string; highlights: string[] }> = {
  'experience': {
    title: '10+ лет опыта',
    icon: Clock,
    description: 'С 2014 года помогаю пациентам обрести красивую улыбку. За это время прошла путь от начинающего ортодонта до спикера и преподавателя РУДН.',
    highlights: [
      'Более 919 часов приёма в 2025 году',
      'Преподаватель кафедры ортодонтии РУДН',
      'Постоянное повышение квалификации',
      'Участие в международных конференциях',
    ],
  },
  'aligners': {
    title: '200+ кейсов элайнеров',
    icon: Smile,
    description: 'Специализируюсь на лечении элайнерами — прозрачными капами для исправления прикуса. Это современный и комфортный метод, который я освоила на экспертном уровне.',
    highlights: [
      'Сертифицированный специалист по элайнерам',
      'Наставник для врачей, начинающих работу с элайнерами',
      'Работа с ведущими системами элайнеров',
      'Комплексные и сложные случаи',
    ],
  },
  'brands': {
    title: '5+ брендов-партнёров',
    icon: Award,
    description: 'Являюсь официальным спикером и амбассадором ведущих ортодонтических брендов. Провожу обучающие мероприятия для врачей по всей России.',
    highlights: [
      'American Orthodontics Russia',
      '6Elements Orthodontic Science',
      'Andrews Appliance System SL',
      'Спикер на конференциях и мастер-классах',
    ],
  },
}
import ScrollReveal from '@/components/ui/scroll-reveal'
import GlassCard from '@/components/glass-card'
import Counter from '@/components/counter'

const directions = [
  {
    icon: Stethoscope,
    title: 'Ортодонтия',
    desc: 'Исправление прикуса у детей и взрослых. Брекет-системы, элайнеры EuroKappa, комплексное лечение.',
    link: '/services',
    cta: 'Записаться на приём',
  },
  {
    icon: Mic,
    title: 'Амбассадор',
    desc: 'Официальный амбассадор ортодонтических брендов. Провожу мастер-классы и вебинары для врачей по всей стране.',
    link: '/education',
    cta: 'Пригласить на мероприятие',
  },
  {
    icon: GraduationCap,
    title: 'Преподавание',
    desc: 'Преподаватель кафедры ортодонтии РУДН. Лауреат «Лучший лектор РУДН». Обучаю будущих врачей и менторю коллег.',
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

const pathCards = [
  {
    icon: Stethoscope,
    title: 'Я пациент',
    subtitle: 'Хочу красивую улыбку',
    desc: 'Запишитесь на первичную консультацию. Вместе разберём ваш случай и подберём оптимальное лечение: брекеты или элайнеры EuroKappa.',
    link: '/services',
    cta: 'Записаться на консультацию',
    gradientClass: 'from-orange-400 to-pink-500',
    bgClass: 'bg-gradient-to-br from-orange-50 to-pink-50',
    borderClass: 'border-orange-200',
    ctaClass: 'bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:from-orange-500 hover:to-pink-600',
  },
  {
    icon: GraduationCap,
    title: 'Я врач',
    subtitle: 'Хочу развиваться профессионально',
    desc: 'Пройдите менторство по элайнерам, посетите курсы или воркшопы. Я делюсь реальными кейсами и передаю уверенность в практике.',
    link: '/services#doctors',
    cta: 'Узнать о курсах',
    gradientClass: 'from-violet-500 to-purple-600',
    bgClass: 'bg-gradient-to-br from-violet-50 to-purple-50',
    borderClass: 'border-violet-200',
    ctaClass: 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700',
  },
  {
    icon: Briefcase,
    title: 'Я представляю бренд',
    subtitle: 'Ищу амбассадора или спикера',
    desc: 'Анастасия — опытный спикер, официальный амбассадор брендов, ментор для врачей. Готова к партнёрству и участию в ваших мероприятиях.',
    link: '/contacts',
    cta: 'Обсудить партнёрство',
    gradientClass: 'from-pink-500 to-violet-500',
    bgClass: 'bg-gradient-to-br from-pink-50 to-violet-50',
    borderClass: 'border-pink-200',
    ctaClass: 'bg-gradient-to-r from-pink-500 to-violet-500 text-white hover:from-pink-600 hover:to-violet-600',
  },
]

const stats = [
  { end: 919, suffix: '+', label: 'часов приёма' },
  { end: 10, suffix: '+', label: 'лет опыта' },
  { end: 1000, suffix: '+', label: 'улыбок' },
  { end: 200, suffix: '+', label: 'кейсов элайнеров' },
]

const testimonials = [
  {
    name: 'Мария К.',
    role: 'Пациент',
    text: 'Анастасия — просто волшебник! Носила брекеты 1.5 года и результат превзошёл все ожидания. Очень внимательный и профессиональный подход, всегда объясняет каждый шаг лечения. Спасибо за мою новую улыбку!',
    stars: 5,
    type: 'patient',
  },
  {
    name: 'Екатерина С.',
    role: 'Пациент',
    text: 'Обратилась с запущенным случаем скученности. Доктор Маркова составила подробный план лечения на элайнерах, объяснила каждый этап. Через год — идеальный результат! Очень благодарна за терпение и профессионализм.',
    stars: 5,
    type: 'patient',
  },
  {
    name: 'Ольга Р.',
    role: 'Врач-ортодонт',
    text: 'Прошла менторство по элайнерам у Анастасии. Это перевернуло мою практику! За 3 месяца уверенно начала вести собственные случаи. Анастасия — редкий преподаватель, который умеет передавать не только знания, но и уверенность.',
    stars: 5,
    type: 'doctor',
  },
  {
    name: 'Наталья В.',
    role: 'Стоматолог',
    text: 'Посетила курс «Элайнеры от А до Я» в Краснодаре. Невероятная подача материала, живые примеры, разбор реальных кейсов. Рекомендую каждому врачу, кто хочет освоить элайнеры на высоком уровне.',
    stars: 5,
    type: 'doctor',
  },
  {
    name: 'К.В. Наам',
    role: 'Врач-пародонтолог (ПроДокторов)',
    text: 'Коллега высокого профессионального уровня. Ответственно подходит к каждому пациенту, грамотно выстраивает план лечения, умеет работать в команде. Рекомендую как специалиста и как человека.',
    stars: 5,
    type: 'colleague',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  )
}

function StatPopup({ statKey, onClose }: { statKey: string; onClose: () => void }) {
  const detail = heroStatDetails[statKey]
  if (!detail) return null
  const Icon = detail.icon

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <X size={16} className="text-gray-500" />
        </button>

        <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-5">
          <Icon className="text-white" size={28} />
        </div>

        <h3 className="text-2xl font-bold mb-3">{detail.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{detail.description}</p>

        <div className="space-y-3">
          {detail.highlights.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full gradient-bg mt-2 shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function HomePage() {
  const [activePopup, setActivePopup] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {activePopup && (
          <StatPopup statKey={activePopup} onClose={() => setActivePopup(null)} />
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-4 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal variant="slide-in-right" className="z-10">
            <p className="text-lg font-medium text-violet-600 mb-2">Добро пожаловать</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Анастасия Маркова</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-2 sm:mb-3">
              Врач-ортодонт · Спикер · Преподаватель РУДН
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 mb-6 sm:mb-8 leading-relaxed">
              Создаю улыбки, которые меняют жизнь.<br className="hidden sm:block" />
              <span className="text-violet-600">Делюсь знаниями</span>, которые меняют профессию.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://t.me/drmarkova_assist"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium inline-flex items-center justify-center gap-2"
              >
                Для пациентов <ArrowRight size={18} />
              </Link>
              <Link
                href="https://t.me/drmarkovaa"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button-outline px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium inline-flex items-center justify-center gap-2"
              >
                Для коллег <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>

          {/* Hero Image + Floating Cards */}
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

            {/* Floating stat card — bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePopup('experience')}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 glass-card rounded-2xl p-3 sm:p-4 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
            >
              <p className="text-2xl sm:text-3xl font-bold gradient-text">10+</p>
              <p className="text-xs sm:text-sm text-gray-600">лет опыта</p>
            </motion.div>

            {/* Floating stat card — top right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePopup('aligners')}
              className="absolute -top-4 -right-4 sm:-top-4 sm:-right-4 glass-card rounded-2xl p-3 sm:p-4 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
            >
              <p className="text-2xl sm:text-3xl font-bold gradient-text">200+</p>
              <p className="text-xs sm:text-sm text-gray-600">кейсов элайнеров</p>
            </motion.div>

            {/* Floating stat card — middle right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePopup('brands')}
              className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 glass-card rounded-2xl p-3 sm:p-4 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
            >
              <p className="text-2xl sm:text-3xl font-bold gradient-text">5+</p>
              <p className="text-xs sm:text-sm text-gray-600">брендов</p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section className="py-20 section-light">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%" className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Выберите свой <span className="gradient-text">путь</span>
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Каждый найдёт здесь то, что ему нужно — будь то лечение, обучение или партнёрство
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {pathCards.map((card, index) => (
              <ScrollReveal key={card.title} delay={index * 0.15} variant="fade-up" className="h-full">
                <Link href={card.link} className="block h-full group">
                  <div
                    className={`h-full flex flex-col rounded-3xl border ${card.borderClass} ${card.bgClass} p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradientClass} flex items-center justify-center mb-5 shadow-lg`}
                    >
                      <card.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{card.title}</h3>
                    <p className="text-sm font-medium text-gray-500 mb-4">{card.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">{card.desc}</p>
                    <span
                      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${card.ctaClass} shadow-md group-hover:shadow-lg`}
                    >
                      {card.cta} <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
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

      {/* Statistics Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-violet-50 -z-10" />
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%" className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              В цифрах и <span className="gradient-text">фактах</span>
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Результаты, которые говорят сами за себя
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1} variant="fade-up">
                <div className="glass-card rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-shadow duration-300">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                    <Counter end={stat.end} suffix={stat.suffix} duration={2000} />
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 section-light overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%" className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Отзывы <span className="gradient-text">пациентов и коллег</span>
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Реальные истории людей, чья жизнь изменилась к лучшему
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((review, index) => (
              <ScrollReveal key={index} delay={index * 0.1} variant="fade-up" className="h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <GlassCard className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-sm">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <StarRating count={review.stars} />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed flex-grow mb-4 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="border-t border-gray-100 pt-4">
                      <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.role}</p>
                    </div>
                  </GlassCard>
                </motion.div>
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
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">Стендап:</span> Юмор помогает находить общий язык с кем угодно.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m4.9 4.9 14.2 14.2" />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">Теннис:</span> Спорт учит фокусироваться на цели и побеждать.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                    <Headphones size={20} />
                  </div>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">Подкаст и медиа:</span> Веду стоматологический подкаст КНАМСС совместно с коллегами-врачами.
                  </p>
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

      {/* CTA Section — 3 audiences */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-violet-100 -z-10" />
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <ScrollReveal width="100%" className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Готовы сделать <span className="gradient-text">следующий шаг</span>?
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Выберите то, что вам актуально прямо сейчас
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {/* Patients CTA */}
            <ScrollReveal delay={0} variant="fade-up">
              <div className="glass-card rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center mb-4 shadow-lg">
                  <Stethoscope className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Пациентам</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  Запишитесь на первичную консультацию и начните путь к улыбке своей мечты
                </p>
                <a
                  href="https://t.me/drmarkova_assist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full glass-button px-6 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm"
                >
                  Записаться <ArrowRight size={16} />
                </a>
              </div>
            </ScrollReveal>

            {/* Doctors CTA */}
            <ScrollReveal delay={0.15} variant="fade-up">
              <div className="glass-card rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Врачам</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  Пройдите менторство по элайнерам или запишитесь на ближайший курс
                </p>
                <a
                  href="https://t.me/drmarkovaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full glass-button-outline px-6 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm"
                >
                  Написать коллеге <ArrowRight size={16} />
                </a>
              </div>
            </ScrollReveal>

            {/* Brands CTA */}
            <ScrollReveal delay={0.3} variant="fade-up">
              <div className="glass-card rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center mb-4 shadow-lg">
                  <Briefcase className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Брендам</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  Обсудим амбассадорство, участие в мероприятиях или образовательное партнёрство
                </p>
                <Link
                  href="/contacts"
                  className="w-full glass-button px-6 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 text-sm"
                >
                  Обсудить партнёрство <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
