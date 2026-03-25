import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieConsent from '@/components/cookie-consent'
import Preloader from '@/components/ui/preloader'
import StarfieldCanvas from '@/components/ui/starfield-canvas'
import SmoothScrollProvider from '@/components/ui/smooth-scroll-provider'
import JsonLd from '@/components/json-ld'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin', 'cyrillic'], variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL('https://amarkova.ru'),
  title: {
    default: 'Анастасия Маркова — врач-ортодонт, спикер, преподаватель РУДН | Москва',
    template: '%s | Анастасия Маркова',
  },
  description: 'Анастасия Маркова — ортодонт с 10+ лет опыта в Москве. Брекеты, элайнеры EuroKappa, детская ортодонтия. Преподаватель РУДН, спикер и наставник для врачей. Запись на консультацию.',
  keywords: [
    'Анастасия Маркова',
    'Анастасия Маркова врач',
    'Анастасия Маркова ортодонт',
    'Анастасия Маркова отзывы',
    'Анастасия Маркова РУДН',
    'Анастасия Маркова элайнеры',
    'Анастасия Маркова курсы',
    'ортодонт Москва',
    'врач ортодонт Москва',
    'брекеты Москва',
    'элайнеры Москва',
    'элайнеры EuroKappa',
    'исправление прикуса Москва',
    'менторство ортодонтия',
    'курсы для ортодонтов',
    'спикер стоматология',
  ],
  authors: [{ name: 'Анастасия Маркова', url: 'https://amarkova.ru' }],
  creator: 'Анастасия Маркова',
  publisher: 'Анастасия Маркова',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'profile',
    locale: 'ru_RU',
    url: 'https://amarkova.ru',
    siteName: 'Анастасия Маркова',
    title: 'Анастасия Маркова — врач-ортодонт, спикер, преподаватель РУДН',
    description: 'Создаю улыбки, которые меняют жизнь. 10+ лет опыта. Брекеты и элайнеры в Москве. Курсы и менторство для врачей.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Анастасия Маркова — врач-ортодонт',
      },
    ],
    firstName: 'Анастасия',
    lastName: 'Маркова',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Анастасия Маркова — врач-ортодонт, спикер, преподаватель РУДН',
    description: 'Создаю улыбки, которые меняют жизнь. 10+ лет опыта в ортодонтии.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://amarkova.ru',
  },
  verification: {
    yandex: 'e8fcf894eea1e93a',
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
      <body className={`${inter.className} antialiased selection:bg-violet-200 selection:text-violet-900`}>
        <SmoothScrollProvider>
          <Preloader />
          <JsonLd />
          <StarfieldCanvas />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
          <CookieConsent />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
