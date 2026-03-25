import type { Metadata } from 'next'
import AboutContent from './about-content'

export const metadata: Metadata = {
  title: 'Анастасия Маркова — биография, опыт и достижения врача-ортодонта',
  description: 'Анастасия Маркова — врач-ортодонт с 10+ лет опыта. Преподаватель РУДН, победитель «Лучший лектор РУДН», официальный спикер EuroKappa Academy. 1000+ счастливых пациентов.',
  keywords: ['Анастасия Маркова', 'Анастасия Маркова ортодонт', 'Анастасия Маркова РУДН', 'ортодонт биография'],
  alternates: { canonical: 'https://amarkova.ru/about' },
  openGraph: {
    title: 'Анастасия Маркова — о враче',
    description: 'Врач-ортодонт с 10+ лет опыта, преподаватель РУДН, спикер EuroKappa Academy.',
    url: 'https://amarkova.ru/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function AboutPage() {
  return <AboutContent />
}
