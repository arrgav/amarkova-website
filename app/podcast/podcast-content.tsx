'use client'

import { Mic, Youtube, Headphones, Play } from 'lucide-react'
import ScrollReveal from '@/components/ui/scroll-reveal'
import GlassCard from '@/components/glass-card'

export default function PodcastContent() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        {/* Decorative elements handled by OrganicBackground */}

        <div className="relative max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <div className="text-center mb-12">
              <div className="w-20 h-20 rounded-3xl gradient-bg flex items-center justify-center mx-auto mb-6">
                <Mic className="text-white" size={40} />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="gradient-text">Подкаст</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Честные разговоры о стоматологии, карьере врача, балансе работы и жизни
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlassCard className="max-w-2xl mx-auto p-8 text-center">
              <Headphones className="text-violet-600 mx-auto mb-4" size={48} />
              <h2 className="text-2xl font-bold mb-4">О подкасте</h2>
              <p className="text-gray-600 mb-8">
                Приглашаю интересных гостей и делюсь своим опытом. Обсуждаем профессиональное развитие,
                сложные клинические случаи, жизнь вне клиники и всё, что волнует современных врачей.
              </p>

              <a
                href="https://www.youtube.com/@knamss"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-10 py-4 rounded-full text-lg font-medium inline-flex items-center gap-3"
              >
                <Youtube size={24} /> Смотреть на YouTube
              </a>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-white/30 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollReveal width="100%">
            <h2 className="text-3xl font-bold text-center mb-12">
              О чём <span className="gradient-text">говорим</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Карьера в стоматологии',
              'Сложные клинические случаи',
              'Баланс работы и жизни',
              'Развитие личного бренда',
              'Современные технологии',
              'Истории успеха коллег',
            ].map((topic, index) => (
              <ScrollReveal key={topic} delay={index * 0.1} className="h-full">
                <GlassCard className="flex items-center gap-4 h-full">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <Play className="text-white" size={20} />
                  </div>
                  <span className="font-medium text-gray-800">{topic}</span>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
