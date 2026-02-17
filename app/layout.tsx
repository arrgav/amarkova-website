import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin', 'cyrillic'], variable: '--font-playfair' })

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'https://amarkova.ru'),
  title: 'Анастасия Маркова — врач-ортодонт, спикер, преподаватель РУДН | Москва',
  description: 'Анастасия Маркова — ортодонт с 10+ лет опыта, спикер ведущих брендов, преподаватель РУДН. Запись на консультацию в Москве. Подкаст, выступления, обучение.',
  keywords: 'ортодонт Москва, Анастасия Маркова, врач ортодонт, брекеты Москва, элайнеры, исправление прикуса, спикер стоматология, преподаватель ортодонтия',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Анастасия Маркова — врач-ортодонт, спикер, преподаватель РУДН',
    description: 'Создаю улыбки, которые меняют жизнь. Делюсь знаниями, которые меняют профессию.',
    images: ['/og-image.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
