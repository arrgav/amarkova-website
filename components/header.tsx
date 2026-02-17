'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/about', label: 'Обо мне' },
  { href: '/education', label: 'Обучение' },
  { href: '/services', label: 'Услуги' },
  { href: '/podcast', label: 'Подкаст' },
  { href: '/contacts', label: 'Контакты' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              alt="Анастасия Маркова"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden sm:block font-semibold gradient-text">A.Markova</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://t.me/drmarkovaa"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button px-5 py-2.5 rounded-full text-sm font-medium"
          >
            Записаться
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg glass"
          aria-label="Меню"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 glass mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-4 text-gray-700 hover:bg-violet-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://t.me/drmarkovaa"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-5 py-3 rounded-full text-sm font-medium text-center mt-3"
              >
                Записаться
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
