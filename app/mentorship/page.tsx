import type { Metadata } from 'next'
import MentorshipContent from './mentorship-content'

export const metadata: Metadata = {
  title: 'Менторство по элайнерам — Анастасия Маркова | Для врачей',
  description: 'Анастасия Маркова — менторство по работе с элайнерами для врачей. 200+ кейсов, официальный наставник EuroKappa Academy. Индивидуальный разбор случаев, групповые сессии.',
  keywords: ['менторство ортодонтия', 'Анастасия Маркова менторство', 'элайнеры обучение врачей', 'наставник ортодонт'],
  alternates: { canonical: 'https://amarkova.ru/mentorship' },
  openGraph: {
    title: 'Менторство по элайнерам — Анастасия Маркова',
    description: 'Помогу уверенно начать и развивать элайнерную практику.',
    url: 'https://amarkova.ru/mentorship',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function MentorshipPage() {
  return <MentorshipContent />
}
