'use client'

import { motion } from 'framer-motion'
import {
  GraduationCap,
  Mic2,
  Users,
  Video,
  BookOpen,
  Award,
  Send,
  Star,
  MapPin,
  Calendar,
  ExternalLink,
  UserCheck,
  Globe,
  Handshake,
  BarChart3,
  Mail,
} from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'
import GlassCard from '@/components/glass-card'

const teachingTopics = [
  'Лекции по ортодонтии',
  'Практические занятия',
  'Курирование клинических случаев',
  'Наставничество для молодых врачей',
]

const speakerFormats = [
  { icon: Mic2, title: 'Выступления на конференциях' },
  { icon: Users, title: 'Корпоративные мастер-классы' },
  { icon: Video, title: 'Вебинары и онлайн-обучение' },
  { icon: Award, title: 'Презентации продуктов' },
]

const partners = [
  { name: 'American Orthodontics Russia', logo: '/partners/ao-russia.png' },
  { name: '6Elements Orthodontic Science', logo: '/partners/6elements.png' },
  { name: 'Andrews Appliance System SL', logo: '/partners/andrews-sl.png' },
]

const eurokappaCourses = [
  {
    title: 'Элайнеры от А до Я',
    format: 'Сертификационный курс',
    description: 'Полная база для уверенной работы с элайнерами: от диагностики до финишной ретенции.',
    cities: [
      { city: 'Москва', date: '11 марта' },
      { city: 'Н. Новгород', date: '19 марта' },
      { city: 'Краснодар', date: '11 апреля' },
      { city: 'Ярославль', date: '27 апреля' },
    ],
    badge: null,
    link: 'https://academy.eurokappa.ru/',
  },
  {
    title: 'Элайнеры от А до Я — Профи',
    format: 'Продвинутый курс',
    description: 'Сложные клинические кейсы, разбор ошибок и нестандартные ситуации в практике.',
    cities: [
      { city: 'Архангельск', date: '10 июля' },
    ],
    badge: '16 НМО кредитов',
    link: 'https://academy.eurokappa.ru/',
  },
  {
    title: 'Ортозавтраки',
    format: 'Практические семинары',
    description:
      'Краснодар: «О как интересно получилось: лечение сложных кейсов» — 12 апреля.\nЯрославль: «Элайнеры и дистализация: механика, контроль, границы метода» — 28 апреля.',
    cities: [
      { city: 'Краснодар', date: '12 апреля' },
      { city: 'Ярославль', date: '28 апреля' },
    ],
    badge: null,
    link: 'https://academy.eurokappa.ru/',
  },
  {
    title: 'Бесплатные вебинары',
    format: 'Онлайн, без оплаты',
    description:
      '23 марта: «Элайнеры без иллюзий: зачем врачу нужен наставник?»\n24 марта: «Принцип работы с элайнерами в подростковом возрасте»',
    cities: [
      { city: 'Онлайн', date: '23–24 марта' },
    ],
    badge: 'Бесплатно',
    link: 'https://academy.eurokappa.ru/',
  },
]

const mentorshipFormats = [
  { icon: UserCheck, title: 'Индивидуальное менторство', description: 'Разбор ваших клинических кейсов один на один, выработка персональной стратегии работы с элайнерами' },
  { icon: Users, title: 'Групповые разборы', description: 'Совместный анализ сложных случаев в малой группе врачей — для обмена опытом и системного роста' },
  { icon: Video, title: 'Онлайн-консультации по кейсам', description: 'Быстрая обратная связь по конкретному пациенту: что пошло не так и как скорректировать план' },
]

const brandFormats = [
  {
    icon: Star,
    title: 'Амбассадорство',
    description: 'Системное представление бренда перед аудиторией врачей-ортодонтов: регулярный контент, живые выступления и доверенное лицо в профессиональном сообществе.',
  },
  {
    icon: GraduationCap,
    title: 'Образовательные мероприятия',
    description: 'Курсы, вебинары и мастер-классы по продуктам бренда — от разработки программы до проведения для аудитории специалистов.',
  },
  {
    icon: BarChart3,
    title: 'Медиа-партнёрство',
    description: 'Обзоры, клинические кейсы и экспертный контент для профессиональной аудитории ортодонтов по всей России.',
  },
]

export default function EducationContent() {
  return (
    <div className="min-h-screen pt-24">

      {/* ─── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
          <ScrollReveal width="100%">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Обучение и <span className="gradient-text">Спикерство</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Делюсь экспертизой с коллегами — в аудитории РУДН, на курсах EuroKappa Academy
              и на конференциях ведущих ортодонтических брендов по всей России.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 2. RUDN TEACHING ────────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="slide-in-right">
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Преподаватель <span className="gradient-text">РУДН</span>
              </h2>

              {/* Badges row */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-orange-100 to-violet-100 text-violet-700 border border-violet-200">
                  <Award size={14} className="text-orange-500" />
                  Победитель «Лучший лектор РУДН»
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-orange-100 to-violet-100 text-violet-700 border border-violet-200">
                  <BookOpen size={14} className="text-orange-500" />
                  Автор методических пособий
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-orange-100 to-violet-100 text-violet-700 border border-violet-200">
                  <Globe size={14} className="text-orange-500" />
                  Преподаёт на английском
                </span>
              </div>

              <p className="text-lg text-gray-700 mb-4">
                <span className="font-semibold text-violet-600">136 часов</span> со студентами в 2025 году.
                Учила — и училась сама.
              </p>
              <p className="text-gray-600 mb-8">
                Преподаю на кафедре стоматологии детского возраста и ортодонтии Российского университета
                дружбы народов.{' '}
                <span className="font-semibold text-violet-600">
                  Веду занятия на английском языке (свободно владею English).
                </span>{' '}
                Верю, что качественное образование — основа развития профессии.
              </p>
              <div className="space-y-3">
                {teachingTopics.map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full gradient-bg flex-shrink-0" />
                    <span className="text-gray-700">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} variant="scale">
              <GlassCard className="p-8">
                <BookOpen className="text-violet-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-4">Направления обучения</h3>
                <ul className="space-y-4 text-gray-600">
                  <li>• Современные методы ортодонтического лечения</li>
                  <li>• Работа с брекет-системами и элайнерами</li>
                  <li>• Диагностика и планирование лечения</li>
                  <li>• Наставничество для начинающих специалистов</li>
                </ul>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 3. EUROKAPPA AMBASSADOR ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            {/* Section header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-violet-500/10 border border-violet-200 mb-6">
                <Star className="text-orange-500" size={16} />
                <span className="text-sm font-semibold text-violet-700">EuroKappa Academy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Официальный спикер и наставник{' '}
                <span className="gradient-text">EuroKappa Academy</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Провожу авторские курсы и семинары по элайнерам для врачей по всей России — от базового
                сертификационного уровня до разбора самых сложных клинических кейсов.
              </p>

              {/* Key stat */}
              <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-2xl gradient-bg text-white font-semibold text-lg shadow-lg">
                <Award size={22} />
                200+ завершённых клинических кейсов на элайнерах
              </div>
            </div>
          </ScrollReveal>

          {/* Events grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {eurokappaCourses.map((course, index) => (
              <ScrollReveal key={course.title} delay={index * 0.1} variant="fade-up" className="h-full">
                <GlassCard className="p-6 h-full flex flex-col">
                  {/* Badge */}
                  {course.badge && (
                    <span className="inline-block self-start mb-3 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-violet-600 text-white">
                      {course.badge}
                    </span>
                  )}
                  <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-1">
                    {course.format}
                  </p>
                  <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-1 whitespace-pre-line">{course.description}</p>

                  {/* Cities */}
                  <div className="space-y-1 mb-5">
                    {course.cities.map((item) => (
                      <div key={item.city + item.date} className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={13} className="text-violet-500 flex-shrink-0" />
                        <span className="font-medium">{item.city}</span>
                        <span className="text-gray-400">·</span>
                        <Calendar size={12} className="text-gray-400 flex-shrink-0" />
                        <span>{item.date}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button-outline inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium mt-auto"
                  >
                    Подробнее <ExternalLink size={14} />
                  </a>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Also: OrthoRestart & Aligner School */}
          <ScrollReveal delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <GlassCard className="p-6 flex flex-col gap-3">
                <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide">Со-спикер</p>
                <h3 className="text-base font-bold text-gray-900">OrthoRestart</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={13} className="text-violet-500" />
                  <span>9 июня 2026</span>
                  <span className="ml-auto px-3 py-0.5 rounded-full bg-violet-50 text-violet-700 font-semibold text-xs">9 000 ₽</span>
                </div>
              </GlassCard>
              <GlassCard className="p-6 flex flex-col gap-3">
                <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide">Aligner School</p>
                <h3 className="text-base font-bold text-gray-900">Модуль 13 — Aligners. Troubleshooting</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={13} className="text-violet-500" />
                  <span>Москва</span>
                  <span className="text-gray-400">·</span>
                  <Calendar size={13} className="text-violet-500" />
                  <span>28 мая — 24 июля</span>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.3} width="100%">
            <div className="text-center">
              <a
                href="https://academy.eurokappa.ru/schedule/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-10 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
              >
                Смотреть расписание <ExternalLink size={18} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 4. MENTORSHIP ───────────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-violet-500/10 border border-violet-200 mb-6">
                <UserCheck className="text-orange-500" size={16} />
                <span className="text-sm font-semibold text-violet-700">Для врачей</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Менторство по <span className="gradient-text">элайнерам</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Помогаю врачам уверенно войти в элайнерную практику: разбираем ваши кейсы, выстраиваем
                систему работы, разбираем ошибки — без иллюзий и с реальными результатами.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {mentorshipFormats.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1} variant="fade-up" className="h-full">
                <GlassCard className="p-6 h-full text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4">
                    <item.icon className="text-white" size={26} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3} width="100%">
            <div className="text-center">
              <a
                href="https://t.me/drmarkovaa"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-10 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
              >
                <Send size={20} /> Записаться на менторство
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 5. SPEAKER FORMATS ──────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl font-bold text-center mb-4">
              Форматы <span className="gradient-text">выступлений</span>
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Открыта к сотрудничеству в различных форматах — от конференций до корпоративных вебинаров.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakerFormats.map((format, index) => (
              <ScrollReveal key={format.title} delay={index * 0.1} variant="fade-up" className="h-full">
                <GlassCard className="text-center h-full flex flex-col justify-center">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                    <format.icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-semibold text-gray-800">{format.title}</h3>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. PARTNERS ─────────────────────────────────────────────────── */}
      <section className="py-16 section-light">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-2xl font-bold text-center mb-10">
              Партнёры и <span className="gradient-text">бренды</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1.02 }}
                  className="relative cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100 hover:drop-shadow-lg w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain w-full h-full"
                  />
                </motion.div>
              ))}

              {/* EuroKappa — text fallback since no logo file */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: partners.length * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center px-6 py-3 rounded-xl border-2 border-violet-200 bg-gradient-to-r from-orange-50 to-violet-50 opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer"
                style={{ width: 180, height: 70 }}
              >
                <span className="font-bold text-xl gradient-text tracking-tight">EuroKappa</span>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 7. FOR BRANDS ───────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-violet-500/10 border border-violet-200 mb-6">
                <Handshake className="text-orange-500" size={16} />
                <span className="text-sm font-semibold text-violet-700">Для брендов</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Сотрудничество с <span className="gradient-text">брендами</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Представляю бренды перед аудиторией практикующих ортодонтов — честно, профессионально
                и с реальным клиническим опытом применения продуктов.
              </p>
            </div>
          </ScrollReveal>

          {/* Brand format cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {brandFormats.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1} variant="fade-up" className="h-full">
                <GlassCard className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <item.icon className="text-white" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 flex-1">{item.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Stats bar */}
          <ScrollReveal delay={0.3}>
            <div className="rounded-2xl gradient-bg p-6 mb-10">
              <div className="grid grid-cols-3 gap-4 text-white text-center">
                <div>
                  <p className="text-3xl sm:text-4xl font-bold">5+</p>
                  <p className="text-sm opacity-80 mt-1">брендов-партнёров</p>
                </div>
                <div className="border-x border-white/20">
                  <p className="text-3xl sm:text-4xl font-bold">15+</p>
                  <p className="text-sm opacity-80 mt-1">городов по России</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-bold">10 000+</p>
                  <p className="text-sm opacity-80 mt-1">специалистов в аудитории</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA for brands */}
          <ScrollReveal delay={0.4} width="100%">
            <div className="text-center">
              <a
                href="mailto:hello@amarkova.ru"
                className="glass-button px-10 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
              >
                <Mail size={20} /> Предложение о сотрудничестве
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 8. FINAL CTA ────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4">
              Готовы начать <span className="gradient-text">учиться или сотрудничать</span>?
            </h2>
            <p className="text-gray-600 mb-10 max-w-xl mx-auto">
              Запишитесь на ближайший курс EuroKappa Academy или напишите мне напрямую
              — обсудим совместный проект.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://academy.eurokappa.ru/schedule/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-8 py-4 rounded-full text-base font-medium inline-flex items-center justify-center gap-2"
              >
                <GraduationCap size={20} /> Записаться на курс
              </a>
              <a
                href="https://t.me/drmarkovaa"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button-outline px-8 py-4 rounded-full text-base font-medium inline-flex items-center justify-center gap-2"
              >
                <Send size={20} /> Написать о сотрудничестве
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
