import type { Metadata } from 'next'
import EducationContent from './education-content'

export const metadata: Metadata = {
  title: 'Анастасия Маркова — курсы по элайнерам, менторство, спикер EuroKappa',
  description: 'Анастасия Маркова проводит курсы «Элайнеры от А до Я» по всей России, менторство для врачей, выступает на конференциях. Официальный спикер EuroKappa Academy. Преподаватель РУДН.',
  keywords: ['Анастасия Маркова курсы', 'Анастасия Маркова EuroKappa', 'элайнеры курс для врачей', 'менторство ортодонтия', 'Анастасия Маркова обучение'],
  alternates: { canonical: 'https://amarkova.ru/education' },
  openGraph: {
    title: 'Анастасия Маркова — обучение и спикерство',
    description: 'Курсы по элайнерам, менторство для врачей, выступления на конференциях.',
    url: 'https://amarkova.ru/education',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function EducationPage() {
  return <EducationContent />
}
