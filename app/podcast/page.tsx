import type { Metadata } from 'next'
import PodcastContent from './podcast-content'

export const metadata: Metadata = {
  title: 'Подкаст — Анастасия Маркова',
  description: 'Честные разговоры о стоматологии, карьере врача, балансе работы и жизни. Приглашаю интересных гостей и делюсь своим опытом.',
}

export default function PodcastPage() {
  return <PodcastContent />
}
