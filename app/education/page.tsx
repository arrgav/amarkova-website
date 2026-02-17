import type { Metadata } from 'next'
import EducationContent from './education-content'

export const metadata: Metadata = {
  title: 'Обучение и Спикерство — Анастасия Маркова',
  description: 'Преподаватель кафедры ортодонтии РУДН, спикер ведущих ортодонтических брендов. Лекции, мастер-классы, вебинары для врачей.',
}

export default function EducationPage() {
  return <EducationContent />
}
