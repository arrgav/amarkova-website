'use client'

import { Send, Mail, Youtube, MessageCircle, ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'
import GlassCard from '@/components/glass-card'

const contacts = [
  {
    icon: Send,
    title: 'Telegram канал',
    value: '@drmarkovaa',
    href: 'https://t.me/drmarkovaa',
    desc: 'Для записи и вопросов',
  },
  {
    icon: MessageCircle,
    title: 'Личный Telegram',
    value: '@drmarkova_a',
    href: 'https://t.me/drmarkova_a',
    desc: 'Для сотрудничества',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@amarkova.ru',
    href: 'mailto:hello@amarkova.ru',
    desc: 'Деловые предложения',
  },
  {
    icon: Youtube,
    title: 'YouTube',
    value: '@knamss',
    href: 'https://www.youtube.com/@knamss',
    desc: 'Подкаст и видео',
  },
]

export default function ContactsContent() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        {/* Decorative elements handled by OrganicBackground */}

        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
          <ScrollReveal width="100%">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Связаться <span className="gradient-text">со мной</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Для записи на консультацию, приглашения на мероприятие или сотрудничества
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contacts Grid */}
      <section className="py-20 bg-white/30 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {contacts.map((contact, index) => (
              <ScrollReveal key={contact.title} delay={index * 0.1}>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlassCard className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                        <contact.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{contact.title}</h3>
                        <p className="text-violet-600 font-medium mb-1">{contact.value}</p>
                        <p className="text-gray-500 text-sm">{contact.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal>
            <GlassCard className="max-w-2xl mx-auto p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Самый быстрый способ связаться
              </h2>
              <p className="text-gray-600 mb-6">
                Напишите мне в Telegram — отвечаю в течение дня на все сообщения
              </p>
              <a
                href="https://t.me/drmarkovaa"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-10 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
              >
                <Send size={20} /> Написать в Telegram <ArrowRight size={20} />
              </a>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
