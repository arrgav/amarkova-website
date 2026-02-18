'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Send, Mail, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="AM Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold gradient-text">Anastasia Markova</span>
            </div>
            <p className="text-gray-600 text-sm">
              Врач-ортодонт · Спикер · Преподаватель РУДН
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Link href="/about" className="text-gray-600 hover:text-violet-600 text-sm transition-colors">Обо мне</Link>
            <Link href="/education" className="text-gray-600 hover:text-violet-600 text-sm transition-colors">Обучение</Link>
            <Link href="/services" className="text-gray-600 hover:text-violet-600 text-sm transition-colors">Услуги</Link>
            <Link href="/contacts" className="text-gray-600 hover:text-violet-600 text-sm transition-colors">Контакты</Link>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://t.me/drmarkovaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-violet-600 text-sm transition-colors"
            >
              <Send size={18} />
              <span>Telegram канал</span>
            </a>
            <a
              href="https://t.me/drmarkova_a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-violet-600 text-sm transition-colors"
            >
              <Send size={18} />
              <span>Личный Telegram</span>
            </a>
            <a
              href="https://www.youtube.com/@knamss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-violet-600 text-sm transition-colors"
            >
              <Youtube size={18} />
              <span>YouTube</span>
            </a>
            <a
              href="mailto:hello@amarkova.ru"
              className="flex items-center gap-2 text-gray-600 hover:text-violet-600 text-sm transition-colors"
            >
              <Mail size={18} />
              <span>hello@amarkova.ru</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          © 2025 Анастасия Маркова. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
