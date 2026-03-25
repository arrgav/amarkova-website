import type { Metadata } from 'next'
import BlogContent from './blog-content'

export const metadata: Metadata = {
  title: 'Анастасия Маркова — блог, статьи и видео об ортодонтии',
  description: 'Блог ортодонта Анастасии Марковой: статьи о лечении, выступления в СМИ, видео и подкаст КНАМСС. Полезные материалы для пациентов и врачей.',
  keywords: ['Анастасия Маркова блог', 'ортодонт блог', 'КНАМСС подкаст', 'элайнеры или брекеты'],
  alternates: { canonical: 'https://amarkova.ru/blog' },
  openGraph: {
    title: 'Блог Анастасии Марковой — об ортодонтии и жизни',
    description: 'Статьи, видео и подкаст от врача-ортодонта Анастасии Марковой.',
    url: 'https://amarkova.ru/blog',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function BlogPage() {
  return <BlogContent />
}
