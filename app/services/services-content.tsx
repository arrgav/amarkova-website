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
  Calculator,
  X,
  Info,
  BookOpen,
} from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'
import GlassCard from '@/components/glass-card'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

// ─────────────────────────────────────────────
// КАЛЬКУЛЯТОР
// ─────────────────────────────────────────────

type CalcCategory = 'consultation' | 'braces' | 'aligners' | 'children'

const calculatorData: Record<
  CalcCategory,
  { label: string; emoji: string; options: { label: string; priceLabel: string; note?: string }[] }
> = {
  consultation: {
    label: 'Консультация ортодонта',
    emoji: '🦷',
    options: [{ label: 'Первичная консультация', priceLabel: '3 500 ₽' }],
  },
  braces: {
    label: 'Брекет-системы',
    emoji: '✨',
    options: [
      { label: 'Металлические Mini Master', priceLabel: 'от 140 000 ₽', note: '70 000 ₽/дугу × 2 дуги' },
      { label: 'Металлические с циркониевым напылением', priceLabel: 'от 160 000 ₽', note: '80 000 ₽/дугу × 2 дуги' },
      { label: 'Керамические Empower Clear', priceLabel: 'от 220 000 ₽', note: '110 000 ₽/дугу × 2 дуги' },
      { label: 'Сапфировые Radiance', priceLabel: 'от 190 000 ₽', note: '95 000 ₽/дугу × 2 дуги' },
    ],
  },
  aligners: {
    label: 'Элайнеры',
    emoji: '💎',
    options: [
      { label: 'EuroKappa Junior Little_PRO', priceLabel: 'от 250 000 ₽' },
      { label: 'EuroKappa Complete_PRO', priceLabel: 'от 300 000 ₽' },
      { label: 'EuroKappa Light_PRO', priceLabel: 'от 450 000 ₽' },
      { label: 'EuroKappa PROFI', priceLabel: 'от 520 000 ₽' },
    ],
  },
  children: {
    label: 'Детская ортодонтия',
    emoji: '👶',
    options: [
      { label: 'Трейнеры 3–6 лет (1 этап)', priceLabel: 'от 27 500 ₽' },
      { label: 'Трейнеры 6–10 лет (1 этап)', priceLabel: 'от 38 500 ₽' },
      { label: 'Трейнеры 10–15 лет (1 этап)', priceLabel: 'от 44 000 ₽' },
      { label: 'Пластинка Хааса (расширение нёба)', priceLabel: 'от 40 000 ₽' },
    ],
  },
}

const calcCategories: CalcCategory[] = ['consultation', 'braces', 'aligners', 'children']

function PriceCalculator() {
  const [category, setCategory] = useState<CalcCategory>('braces')
  const [optionIdx, setOptionIdx] = useState(0)

  const data = calculatorData[category]
  const selected = data.options[optionIdx] ?? data.options[0]

  const handleCategory = (cat: CalcCategory) => {
    setCategory(cat)
    setOptionIdx(0)
  }

  return (
    <div className="rounded-3xl border border-violet-100 bg-white/80 backdrop-blur shadow-lg p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shrink-0">
          <Calculator className="text-white" size={22} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Калькулятор стоимости</h3>
          <p className="text-sm text-gray-500">Выберите услугу, чтобы узнать ориентировочную цену</p>
        </div>
      </div>

      {/* Category buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {calcCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`rounded-2xl p-3 text-left transition-all border text-sm font-medium ${
              category === cat
                ? 'bg-violet-600 text-white border-violet-600 shadow-md'
                : 'bg-white text-gray-700 border-gray-200 hover:border-violet-300 hover:text-violet-700'
            }`}
          >
            <span className="block text-lg mb-1">{calculatorData[cat].emoji}</span>
            {calculatorData[cat].label}
          </button>
        ))}
      </div>

      {/* Options */}
      {data.options.length > 1 && (
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Вариант:</p>
          <div className="flex flex-col gap-2">
            {data.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => setOptionIdx(i)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-left border transition-all ${
                  optionIdx === i
                    ? 'bg-violet-50 border-violet-400 text-violet-800'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-violet-200'
                }`}
              >
                <span className="text-sm font-medium">{opt.label}</span>
                <span className="text-sm font-bold text-violet-600 shrink-0 ml-3">{opt.priceLabel}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Price result */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${category}-${optionIdx}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl bg-gradient-to-br from-violet-50 to-orange-50 border border-violet-100 p-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
            <span className="text-gray-700 font-medium">{selected.label}</span>
            <span className="text-2xl font-bold gradient-text">{selected.priceLabel}</span>
          </div>
          {selected.note && (
            <p className="text-xs text-gray-500 mb-2">{selected.note}</p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Disclaimer */}
      <div className="mt-4 flex gap-2 bg-amber-50 border border-amber-200 rounded-2xl p-4">
        <Info size={16} className="text-amber-500 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800 leading-relaxed">
          <strong>Это визуальный инструмент для ориентации.</strong> В реальности цены часто ниже —
          в ортодонтии оплата нередко проводится поэтапно или по факту выполненных работ.
          При полной предоплате могут действовать скидки. Точную стоимость и план лечения
          я определяю индивидуально на консультации.
        </p>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// УСЛУГИ С ПОПАПАМИ
// ─────────────────────────────────────────────

const patientServices = [
  {
    icon: Stethoscope,
    title: 'Консультация ортодонта',
    desc: 'Первичная диагностика, составление плана лечения, фотопротокол',
    blogSlug: 'konsultaciya-ortodonta',
    details: [
      'Первичная консультация — это не просто осмотр, а полноценный диагностический приём. Я анализирую прикус, состояние зубов и дёсен, изучаю историю болезни, оцениваю фотопротокол.',
      'При необходимости направлю на дополнительную диагностику: 3D-томография, цифровые слепки, телерентгенограмма. По итогам вы получаете подробный план лечения с объяснением всех вариантов, сроков и стоимости.',
      'Консультация — без спешки и давления. Главное, чтобы вы понимали каждый шаг и могли принять взвешенное решение.',
    ],
    price: '3 500 ₽',
  },
  {
    icon: Sparkles,
    title: 'Брекет-системы',
    desc: 'Лечение на металлических, керамических и сапфировых брекетах',
    blogSlug: 'breketsy',
    details: [
      'Брекет-система — надёжный и проверенный метод исправления прикуса, показанный при большинстве клинических случаев. Я работаю с металлическими, металлическими с циркониевым напылением, керамическими (Empower Clear) и сапфировыми (Radiance) брекетами.',
      'Выбор системы зависит от сложности случая и ваших пожеланий по эстетике. Металлические брекеты — самый доступный и эффективный вариант. Керамические и сапфировые — для тех, кому важна незаметность.',
      'Средний срок лечения — 1,5–2,5 года. Активации каждые 4–6 недель. На каждом этапе я объясняю, что происходит с вашими зубами и почему.',
    ],
    price: 'от 140 000 ₽',
  },
  {
    icon: Sparkles,
    title: 'Элайнеры',
    desc: 'Исправление прикуса прозрачными каппами (EuroKappa и др.)',
    blogSlug: 'elainery',
    details: [
      'Элайнеры — прозрачные индивидуальные капы, которые незаметно выравнивают зубы. Я являюсь официальным спикером и амбассадором EuroKappa — одной из ведущих российских систем. За плечами — 200+ завершённых кейсов.',
      'Лечение подходит для широкого круга случаев: от простых до сложных. Капы снимаются на время еды и чистки зубов, не ограничивают питание и минимально влияют на речь.',
      'Средний срок — 1–2,5 года в зависимости от сложности. Регулярные встречи каждые 6–8 недель для контроля лечения и выдачи следующих кап.',
    ],
    price: 'от 250 000 ₽',
  },
  {
    icon: Baby,
    title: 'Детская ортодонтия',
    desc: 'Лечение детей: пластинки, трейнеры, частичные брекет-системы',
    blogSlug: 'detskaya-ortodontiya',
    details: [
      'Детская ортодонтия — профилактика и лечение нарушений прикуса у детей с 3 до 15 лет. Раннее вмешательство часто позволяет избежать серьёзных проблем и длительного лечения во взрослом возрасте.',
      'Я работаю с миофункциональными трейнерами, которые мягко корректируют функции дыхания и глотания, и с пластинкой Хааса для расширения нёба. Для подростков — частичные и полные брекет-системы.',
      'Важно: не каждый ребёнок нуждается в лечении прямо сейчас. На консультации я честно скажу, нужно ли начинать лечение или стоит подождать, и объясню признаки, на которые стоит обращать внимание.',
    ],
    price: 'от 27 500 ₽',
  },
]

function ServiceCard({ service, index }: { service: typeof patientServices[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ScrollReveal key={service.title} delay={index * 0.1} className="h-full">
        <button onClick={() => setOpen(true)} className="w-full h-full text-left">
          <GlassCard className="h-full cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4">
              <service.icon className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-700 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.desc}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-violet-600 font-bold">{service.price}</span>
              <span className="text-violet-500 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Подробнее <ArrowRight size={14} />
              </span>
            </div>
          </GlassCard>
        </button>
      </ScrollReveal>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold pr-8">{service.title}</DialogTitle>
          </DialogHeader>

          <div className="space-y-3 mt-2">
            {service.details.map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-sm">
                {para}
              </p>
            ))}
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <span className="text-xl font-bold gradient-text">{service.price}</span>
            <Link
              href={`/blog/${service.blogSlug}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-violet-600 hover:text-violet-800 font-medium text-sm transition-colors"
            >
              <BookOpen size={16} />
              Подробная статья в блоге
            </Link>
          </div>

          <a
            href="https://t.me/ortho_amarkova"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button w-full py-3 rounded-full text-base font-medium flex items-center justify-center gap-2 mt-2"
          >
            <Send size={18} /> Записаться на консультацию
          </a>
        </DialogContent>
      </Dialog>
    </>
  )
}

// ─────────────────────────────────────────────
// ОСТАЛЬНЫЕ ДАННЫЕ
// ─────────────────────────────────────────────

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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Услуги и <span className="gradient-text">Направления</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
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
                {/* Service cards with popups */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                  {patientServices.map((service, index) => (
                    <ServiceCard key={service.title} service={service} index={index} />
                  ))}
                </div>

                {/* Price Calculator */}
                <ScrollReveal width="100%" className="mb-14">
                  <h2 className="text-2xl font-bold mb-6 text-center">
                    Ориентировочная <span className="gradient-text">стоимость</span>
                  </h2>
                  <PriceCalculator />
                </ScrollReveal>

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
