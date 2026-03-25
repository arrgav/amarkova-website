import type { Metadata } from 'next'
import ContactsContent from './contacts-content'

export const metadata: Metadata = {
  title: 'Контакты — Анастасия Маркова | Запись на приём, партнёрство',
  description: 'Свяжитесь с Анастасией Марковой: запись на ортодонтическую консультацию в Москве, вопросы по менторству для врачей, деловые предложения для брендов.',
  keywords: ['Анастасия Маркова контакты', 'записаться к ортодонту Москва', 'Анастасия Маркова Telegram'],
  alternates: { canonical: 'https://amarkova.ru/contacts' },
  openGraph: {
    title: 'Контакты — Анастасия Маркова',
    description: 'Запись на консультацию, менторство для врачей, партнёрство с брендами.',
    url: 'https://amarkova.ru/contacts',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function ContactsPage() {
  return <ContactsContent />
}
