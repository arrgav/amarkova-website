import type { Metadata } from 'next'
import ReviewsContent from './reviews-content'

export const metadata: Metadata = {
  title: 'Отзывы об Анастасии Марковой — пациенты, врачи, партнёры',
  description: 'Реальные отзывы о враче-ортодонте Анастасии Марковой: пациенты о лечении брекетами и элайнерами, врачи о менторстве и курсах, партнёры о сотрудничестве.',
  keywords: ['Анастасия Маркова отзывы', 'отзывы ортодонт Маркова', 'Анастасия Маркова отзывы пациентов'],
  alternates: { canonical: 'https://amarkova.ru/reviews' },
  openGraph: {
    title: 'Отзывы об Анастасии Марковой',
    description: 'Отзывы пациентов, врачей и партнёров о работе с Анастасией Марковой.',
    url: 'https://amarkova.ru/reviews',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function ReviewsPage() {
  return <ReviewsContent />
}
