import type { Metadata } from 'next'
import PodcastContent from './podcast-content'

export const metadata: Metadata = {
  title: 'Подкаст КНАМСС — Анастасия Маркова о жизни и профессии врача',
  description: 'Стоматологический подкаст КНАМСС с Анастасией Марковой. Честные разговоры о карьере врача, сложных кейсах, жизни вне клиники. Смотреть на YouTube.',
  keywords: ['КНАМСС подкаст', 'Анастасия Маркова подкаст', 'стоматология подкаст', 'врач подкаст'],
  alternates: { canonical: 'https://amarkova.ru/podcast' },
  openGraph: {
    title: 'Подкаст КНАМСС — Анастасия Маркова',
    description: 'Честные разговоры о стоматологии и жизни врача.',
    url: 'https://amarkova.ru/podcast',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function PodcastPage() {
  return <PodcastContent />
}
