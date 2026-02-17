import type { Metadata } from 'next'
import ContactsContent from './contacts-content'

export const metadata: Metadata = {
  title: 'Контакты ортодонта Анастасии Марковой | Запись на приём в Москве',
  description: 'Запишитесь на консультацию к ортодонту Анастасии Марковой в Москве. Телефон, адрес, форма записи. Сотрудничество и приглашения на мероприятия.',
}

export default function ContactsPage() {
  return <ContactsContent />
}
