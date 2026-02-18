import type { Metadata } from 'next'
import BlogContent from './blog-content'

export const metadata: Metadata = {
    title: 'Блог Анастасии Марковой — статьи, видео, подкасты',
    description: 'Полезные материалы для пациентов и врачей. Статьи о лечении, видео с YouTube, записи выступлений и личные истории.',
}

export default function BlogPage() {
    return <BlogContent />
}
