import type { Metadata } from 'next'
import ServicesContent from './services-content'

export const metadata: Metadata = {
  title: 'Ортодонт Анастасия Маркова — брекеты и элайнеры в Москве | Запись',
  description: 'Анастасия Маркова — ортодонт в Москве. Брекеты, элайнеры EuroKappa, детская ортодонтия. Также: менторство и курсы для врачей, амбассадорство брендов. Запись на консультацию.',
  keywords: ['Анастасия Маркова ортодонт', 'ортодонт Москва', 'брекеты Москва', 'элайнеры EuroKappa', 'Анастасия Маркова записаться'],
  alternates: { canonical: 'https://amarkova.ru/services' },
  openGraph: {
    title: 'Ортодонт Анастасия Маркова — услуги в Москве',
    description: 'Брекеты, элайнеры EuroKappa, детская ортодонтия. Запись на консультацию.',
    url: 'https://amarkova.ru/services',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function ServicesPage() {
  return <ServicesContent />
}
