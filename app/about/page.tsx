import type { Metadata } from 'next'
import AboutContent from './about-content'

export const metadata: Metadata = {
  title: 'Об Анастасии Марковой — ортодонт, спикер, преподаватель РУДН',
  description: 'Анастасия Маркова — врач-ортодонт, преподаватель РУДН, спикер ведущих брендов. Узнайте больше о моём опыте, подходе к лечению и жизни вне клиники.',
}

export default function AboutPage() {
  return <AboutContent />
}
