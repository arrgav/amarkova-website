'use client'

import { motion } from 'framer-motion'
import {
  UserCheck,
  Users,
  MessageCircle,
  CheckCircle2,
  Star,
  Award,
  BookOpen,
  GraduationCap,
  Send,
  ExternalLink,
  Mic2,
  TrendingUp,
} from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'
import GlassCard from '@/components/glass-card'

const painPoints = [
  'Вы уже прошли базовый курс, но боитесь брать первых пациентов самостоятельно',
  'У вас есть кейсы, которые идут не по плану, и вы не знаете как скорректировать',
  'Хотите системно выстроить работу с элайнерами, а не действовать вслепую',
  'Ищете опытного коллегу, который честно разберёт ваши ошибки',
  'Хотите расти в профессии, а не топтаться на месте',
]

const formats = [
  {
    icon: UserCheck,
    title: 'Индивидуальное менторство',
    description:
      'Еженедельные созвоны 1:1, разбор ваших кейсов, обратная связь по Setup-ам, персональный план роста.',
    cta: 'Записаться',
    highlight: true,
  },
  {
    icon: Users,
    title: 'Групповой разбор кейсов',
    description:
      'Малая группа 3–5 врачей, еженедельные разборы сложных случаев, обмен опытом, профессиональное комьюнити.',
    cta: 'Узнать о группе',
    highlight: false,
  },
  {
    icon: MessageCircle,
    title: 'Консультация по кейсу',
    description:
      'Разовая онлайн-встреча для разбора конкретного случая: что пошло не так и как скорректировать.',
    cta: 'Записаться',
    highlight: false,
  },
]

const outcomes = [
  'Уверенность в работе с элайнерами на реальных пациентах',
  'Системный подход к планированию лечения',
  'Разбор ошибок без осуждения — только рост',
  'Доступ к опыту 200+ завершённых кейсов',
  'Понимание биомеханики и работы с Troubleshooting',
  'Профессиональный рост и уверенность в себе как специалиста',
]

const credentials = [
  { icon: Award, text: '13 лет в стоматологии, 10 лет в ортодонтии, 6+ лет с элайнерами' },
  { icon: CheckCircle2, text: '200+ завершённых кейсов на элайнерах' },
  { icon: Mic2, text: 'Официальный спикер EuroKappa Academy' },
  { icon: GraduationCap, text: 'Преподаватель кафедры ортодонтии РУДН' },
  { icon: Star, text: 'Победитель «Лучший лектор РУДН»' },
  { icon: BookOpen, text: 'Автор методических пособий' },
]

const testimonials = [
  {
    name: 'Ольга Р.',
    role: 'Врач-ортодонт',
    text: 'Прошла менторство по элайнерам у Анастасии. За 3 месяца уверенно начала вести собственные случаи. Редкий преподаватель, который передаёт не только знания, но и уверенность.',
    stars: 5,
  },
  {
    name: 'Наталья В.',
    role: 'Стоматолог',
    text: 'Разбор кейсов на курсе в Краснодаре изменил мой подход к работе. Анастасия объясняет сложное простым языком и всегда опирается на реальную практику.',
    stars: 5,
  },
]

export default function MentorshipContent() {
  return (
    <div className="min-h-screen pt-24">

      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient background layer */}
        <div className="absolute inset-0 gradient-bg opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-violet-50 pointer-events-none" />

        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-violet-200/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-orange-200/30 blur-3xl pointer-events-none" />

        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
          <ScrollReveal width="100%">
            {/* Tag pill */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-violet-500/10 border border-violet-200 mb-8">
              <UserCheck className="text-orange-500" size={16} />
              <span className="text-sm font-semibold text-violet-700">Для врачей-ортодонтов</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Менторство по{' '}
              <span className="gradient-text">элайнерам</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Помогу вам уверенно начать и системно развивать элайнерную практику —
              на реальных кейсах, без иллюзий
            </p>

            {/* Stats row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <div className="flex items-center gap-3 px-6 py-3 rounded-2xl glass-card">
                <TrendingUp className="text-orange-500" size={22} />
                <span className="font-bold text-gray-800 text-lg">200+ кейсов</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-3 px-6 py-3 rounded-2xl glass-card">
                <Award className="text-violet-600" size={22} />
                <span className="font-bold text-gray-800 text-lg">6+ лет с элайнерами</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://t.me/drmarkova_assist"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button px-10 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
            >
              <Send size={20} />
              Записаться на менторство
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 2. PAIN POINTS ───────────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Это менторство для вас,{' '}
                <span className="gradient-text">если...</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {painPoints.map((point, index) => (
              <ScrollReveal key={index} delay={index * 0.1} width="100%">
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-4 p-5 rounded-2xl glass-card"
                >
                  <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-white" size={16} />
                  </div>
                  <p className="text-gray-700 text-lg">{point}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. FORMATS ───────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-violet-500/10 border border-violet-200 mb-6">
                <Star className="text-orange-500" size={16} />
                <span className="text-sm font-semibold text-violet-700">Форматы работы</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Выберите <span className="gradient-text">удобный формат</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6">
            {formats.map((format, index) => (
              <ScrollReveal key={format.title} delay={index * 0.1} variant="fade-up" className="h-full">
                <GlassCard className={`p-7 h-full flex flex-col ${format.highlight ? 'ring-2 ring-violet-400/50' : ''}`}>
                  {format.highlight && (
                    <span className="inline-block self-start mb-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-violet-600 text-white">
                      Популярный выбор
                    </span>
                  )}
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-5">
                    <format.icon className="text-white" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{format.title}</h3>
                  <p className="text-gray-600 flex-1 mb-6">{format.description}</p>
                  <a
                    href="https://t.me/drmarkova_assist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                      format.highlight
                        ? 'glass-button'
                        : 'glass-button-outline'
                    }`}
                  >
                    <Send size={15} />
                    {format.cta}
                  </a>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT YOU GET ──────────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Что вы <span className="gradient-text">получите</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {outcomes.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.08} width="100%">
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-4 p-5 rounded-2xl glass-card"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-violet-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-white" size={14} />
                  </div>
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. ABOUT MENTOR ──────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-violet-500/10 border border-violet-200 mb-6">
                <GraduationCap className="text-orange-500" size={16} />
                <span className="text-sm font-semibold text-violet-700">Ваш наставник</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                О вашем <span className="gradient-text">наставнике</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <ScrollReveal delay={0.1} width="100%">
              <GlassCard className="p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                  <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">АМ</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Анастасия Маркова</h3>
                    <p className="text-violet-600 font-semibold">Ортодонт · Спикер · Наставник</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {credentials.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-100 to-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="text-orange-500" size={16} />
                      </div>
                      <p className="text-gray-700 text-sm">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 6. TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Отзывы <span className="gradient-text">коллег</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, index) => (
              <ScrollReveal key={t.name} delay={index * 0.15} variant="fade-up" className="h-full">
                <GlassCard className="p-7 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="text-orange-400 fill-orange-400" size={18} />
                    ))}
                  </div>

                  <p className="text-gray-700 italic flex-1 mb-6 text-base leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-bg opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-violet-50 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-violet-200/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-orange-200/20 blur-3xl pointer-events-none" />

        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
          <ScrollReveal width="100%">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-violet-500/10 border border-violet-200 mb-8">
                <Send className="text-orange-500" size={16} />
                <span className="text-sm font-semibold text-violet-700">Следующий шаг за вами</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                Готовы <span className="gradient-text">начать?</span>
              </h2>

              <p className="text-xl text-gray-600 mb-10">
                Напишите мне в Telegram — обсудим ваш запрос и выберем подходящий формат
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://t.me/drmarkova_assist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button px-10 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
                >
                  <Send size={20} />
                  Написать в Telegram
                </a>

                <a
                  href="https://academy.eurokappa.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button-outline px-8 py-4 rounded-full text-base font-medium inline-flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  Курсы EuroKappa Academy
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
