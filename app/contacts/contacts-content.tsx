'use client'

import { Send, Mail, Youtube, MessageCircle, Stethoscope, GraduationCap, Briefcase, ArrowRight, Clock, MapPin, Phone, ExternalLink } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'
import GlassCard from '@/components/glass-card'

function ResponseBadge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full mt-3">
      <Clock size={12} />
      {text}
    </span>
  )
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
  desc,
  accent = 'violet',
}: {
  icon: React.ElementType
  title: string
  value: string
  href: string
  desc: string
  accent?: 'orange' | 'violet' | 'pink'
}) {
  const iconBg =
    accent === 'orange'
      ? 'bg-gradient-to-br from-orange-400 to-yellow-400'
      : accent === 'pink'
      ? 'bg-gradient-to-br from-pink-500 to-rose-400'
      : 'bg-gradient-to-br from-violet-500 to-purple-600'

  const valueColor =
    accent === 'orange'
      ? 'text-orange-600'
      : accent === 'pink'
      ? 'text-pink-600'
      : 'text-violet-600'

  return (
    <a
      href={href}
      target={href.startsWith('http') || href.startsWith('mailto') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className="block"
    >
      <GlassCard className="h-full group hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}>
            <Icon className="text-white" size={22} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-0.5">{title}</h4>
            <p className={`font-bold mb-1 group-hover:underline ${valueColor}`}>{value}</p>
            <p className="text-gray-500 text-sm">{desc}</p>
          </div>
        </div>
      </GlassCard>
    </a>
  )
}

export default function ContactsContent() {
  return (
    <div className="min-h-screen pt-24">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative py-16 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
          <ScrollReveal width="100%">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Связаться <span className="gradient-text">со мной</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите свой запрос — у каждой аудитории свой канал
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Audience Sections ────────────────────────────── */}
      <section className="py-16 section-light">
        <div className="max-w-[1200px] mx-auto px-4 space-y-10">

          {/* ─ 1. Пациентам ─ */}
          <ScrollReveal width="100%">
            <div className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50/80 to-white/80 backdrop-blur p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-400 flex items-center justify-center shrink-0 shadow-md">
                  <Stethoscope className="text-white" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Пациентам</h2>
                  <p className="text-gray-600 mt-1 max-w-xl">
                    Запись на первичную консультацию, вопросы о лечении, стоимость приёма
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
                <ContactCard
                  icon={Send}
                  title="Telegram"
                  value="@ortho_amarkova"
                  href="https://t.me/ortho_amarkova"
                  desc="Запись на консультацию"
                  accent="orange"
                />
              </div>

              <ResponseBadge text="Ответ в течение дня" />
            </div>
          </ScrollReveal>

          {/* ─ 2. Врачам и коллегам ─ */}
          <ScrollReveal width="100%" delay={0.1}>
            <div className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50/80 to-white/80 backdrop-blur p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shrink-0 shadow-md">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Врачам и коллегам</h2>
                  <p className="text-gray-600 mt-1 max-w-xl">
                    Менторство по элайнерам, участие в курсах, профессиональное общение
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
                <ContactCard
                  icon={Send}
                  title="Telegram"
                  value="@drmarkovaa"
                  href="https://t.me/drmarkovaa"
                  desc="Вопросы и менторство"
                  accent="violet"
                />
              </div>

              <ResponseBadge text="Ответ в течение дня" />
            </div>
          </ScrollReveal>

          {/* ─ 3. Брендам и партнёрам ─ */}
          <ScrollReveal width="100%" delay={0.2}>
            <div className="rounded-3xl border border-pink-200 bg-gradient-to-br from-pink-50/80 to-white/80 backdrop-blur p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center shrink-0 shadow-md">
                  <Briefcase className="text-white" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Брендам и партнёрам</h2>
                  <p className="text-gray-600 mt-1 max-w-xl">
                    Амбассадорство, спикерство, образовательные мероприятия, медиа-партнёрство
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <ContactCard
                  icon={Mail}
                  title="Email"
                  value="hello@amarkova.ru"
                  href="mailto:hello@amarkova.ru"
                  desc="Деловые предложения"
                  accent="pink"
                />
                <ContactCard
                  icon={MessageCircle}
                  title="Личный Telegram"
                  value="@drmarkova_a"
                  href="https://t.me/drmarkova_a"
                  desc="Для оперативной связи"
                  accent="pink"
                />
              </div>

              <ResponseBadge text="Ответ в течение 24 часов" />
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── Clinics ───────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%" className="mb-8">
            <h2 className="text-2xl font-bold text-center">
              Где я <span className="gradient-text">принимаю</span>
            </h2>
            <p className="text-gray-500 text-center mt-2">Клиники в Москве</p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Queen Nella */}
            <ScrollReveal delay={0}>
              <GlassCard className="h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shrink-0 shadow-md">
                    <Stethoscope className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Queen Nella</h3>
                    <p className="text-sm text-gray-500">Стоматологическая клиника</p>
                  </div>
                </div>
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <MapPin size={15} className="text-violet-500 shrink-0 mt-0.5" />
                    <span>Москва, Чапаевский пер., 3</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={15} className="text-violet-500 shrink-0" />
                    <a href="tel:+74951010222" className="hover:text-violet-700 transition-colors">
                      +7 (495) 101-02-22
                    </a>
                  </div>
                </div>
                <a
                  href="https://queennella.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-violet-600 font-medium hover:text-violet-800 transition-colors"
                >
                  queennella.ru <ExternalLink size={13} />
                </a>
              </GlassCard>
            </ScrollReveal>

            {/* Queen Nella Kids */}
            <ScrollReveal delay={0.1}>
              <GlassCard className="h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shrink-0 shadow-md">
                    <Stethoscope className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Queen Nella Kids</h3>
                    <p className="text-sm text-gray-500">Детская стоматология и ортодонтия</p>
                  </div>
                </div>
                <div className="space-y-2 mb-5">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <MapPin size={15} className="text-orange-500 shrink-0 mt-0.5" />
                    <span>Москва, Чапаевский пер., 3</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={15} className="text-orange-500 shrink-0" />
                    <a href="tel:+74951822522" className="hover:text-orange-700 transition-colors">
                      +7 (495) 182-25-22
                    </a>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-400">
                    <Clock size={13} className="shrink-0 mt-0.5" />
                    <span>Пн–Чт: 10:00–20:00, Пт: 10:00–18:00</span>
                  </div>
                </div>
                <a
                  href="https://kids.queennella.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-orange-600 font-medium hover:text-orange-800 transition-colors"
                >
                  kids.queennella.ru <ExternalLink size={13} />
                </a>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── YouTube ───────────────────────────────────────── */}
      <section className="py-8 pb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <a
              href="https://www.youtube.com/@knamss"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-2xl mx-auto"
            >
              <GlassCard className="flex flex-col sm:flex-row items-center gap-6 p-8 text-center sm:text-left group hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center shrink-0 shadow-md">
                  <Youtube className="text-white" size={32} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-red-600 transition-colors">
                    Подкаст КНАМСС
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Подписывайтесь — о жизни и профессии врача на YouTube
                  </p>
                  <p className="text-red-500 font-medium text-sm mt-1">@knamss</p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all shrink-0 hidden sm:block"
                />
              </GlassCard>
            </a>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}
