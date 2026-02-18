'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Mic2, Users, Video, BookOpen, Award, ArrowRight, Send } from 'lucide-react'
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
  { name: 'American Orthodontics', logo: '/partners/american-orthodontics.png', width: 200, height: 80 },
  { name: 'EuroKappa', logo: '/partners/eurokappa.png', width: 160, height: 60 },
  { name: 'Andrews Brackets', logo: '/partners/andrews-brackets.png', width: 180, height: 70 },
  { name: 'Orthoplus', logo: '/partners/orthoplus.png', width: 180, height: 70 },
]

export default function EducationContent() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        {/* Decorative elements handled by OrganicBackground */}

        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
          <ScrollReveal width="100%">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Обучение и <span className="gradient-text">Спикерство</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Делюсь опытом и знаниями с коллегами. Преподаю в РУДН и выступаю для ведущих ортодонтических брендов.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Teaching */}
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
              <p className="text-lg text-gray-700 mb-6">
                <span className="font-semibold text-violet-600">136 часов</span> со студентами в 2025 году.
                Учила — и училась сама.
              </p>
              <p className="text-gray-600 mb-8">
                Преподаю на кафедре стоматологии детского возраста и ортодонтии Российского университета дружбы народов.
                <span className="font-semibold text-violet-600"> Веду занятия на английском языке (свободно владею English).</span> Верю, что качественное образование — основа развития профессии.
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
                    <div className="w-2 h-2 rounded-full gradient-bg" />
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

      {/* Speaker */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl font-bold text-center mb-4">
              Спикер и представитель <span className="gradient-text">брендов</span>
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Являюсь официальным спикером и амбассадором ведущих ортодонтических брендов.
              Провожу обучающие мероприятия для врачей по всей России.
            </p>
          </ScrollReveal>

          {/* Partners */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-12 mb-16">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  style={{ width: partner.width, height: partner.height }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Formats */}
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

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">
              Хотите пригласить меня как <span className="gradient-text">спикера</span>?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Открыта к сотрудничеству: конференции, корпоративные мероприятия, вебинары и презентации
            </p>
            <a
              href="https://t.me/drmarkovaa"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button px-10 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
            >
              <Send size={20} /> Написать в Telegram
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
