import type { Metadata } from 'next'
import MentorshipContent from './mentorship-content'

export const metadata: Metadata = {
  title: 'Менторство по элайнерам | Анастасия Маркова',
  description: 'Индивидуальное менторство по работе с элайнерами от Анастасии Марковой — ортодонта с 200+ кейсами. Для врачей, начинающих практику с элайнерами.',
}

export default function MentorshipPage() {
  return <MentorshipContent />
}
