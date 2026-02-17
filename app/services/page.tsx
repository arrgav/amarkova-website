import type { Metadata } from 'next'
import ServicesContent from './services-content'

export const metadata: Metadata = {
  title: 'Ортодонт Анастасия Маркова — брекеты и элайнеры в Москве | Запись',
  description: 'Исправление прикуса у взрослых и детей. Брекет-системы, элайнеры Invisalign, комплексное лечение. Врач-ортодонт Анастасия Маркова. Запись на консультацию.',
}

export default function ServicesPage() {
  return <ServicesContent />
}
