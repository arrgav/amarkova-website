import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, XCircle, Send, Clock, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Брекет-системы: какие бывают, сколько стоят и как выбрать | Анастасия Маркова',
  description:
    'Полный гид по брекет-системам от практикующего ортодонта: металлические, керамические, сапфировые. Сравнение, цены, сроки лечения, показания и противопоказания.',
  keywords: [
    'брекеты',
    'брекет-системы',
    'металлические брекеты',
    'керамические брекеты',
    'сапфировые брекеты',
    'сколько стоят брекеты',
    'лечение на брекетах',
    'брекеты или элайнеры',
    'ортодонт брекеты Москва',
  ],
  alternates: { canonical: 'https://amarkova.ru/blog/breketsy' },
  openGraph: {
    title: 'Брекет-системы: полный гид от ортодонта',
    description:
      'Какие брекеты выбрать, сколько стоит лечение, как долго носить — честный разбор от практикующего специалиста с 10+ летним опытом.',
    url: 'https://amarkova.ru/blog/breketsy',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const bracesTypes = [
  {
    name: 'Металлические Mini Master',
    price: 'от 140 000 ₽',
    pros: ['Самые эффективные', 'Наиболее доступные', 'Подходят для любой сложности', 'Минимальный уход'],
    cons: ['Видны при улыбке', 'Требуют привыкания к ощущениям'],
  },
  {
    name: 'Металлические с циркониевым напылением',
    price: 'от 160 000 ₽',
    pros: ['Прочные, как металлические', 'Менее заметны', 'Хорошая эффективность'],
    cons: ['Дороже базовых металлических', 'Всё ещё видны вблизи'],
  },
  {
    name: 'Керамические Empower Clear',
    price: 'от 220 000 ₽',
    pros: ['Практически незаметны', 'Эстетичный вид', 'Самолигирующие — меньше трения'],
    cons: ['Дороже металлических', 'Требуют более тщательной гигиены'],
  },
  {
    name: 'Сапфировые Radiance',
    price: 'от 190 000 ₽',
    pros: ['Кристально прозрачные', 'Высокая эстетика', 'Не меняют цвет'],
    cons: ['Хрупче керамических', 'Дороже металлических'],
  },
]

export default function BreketsyPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-[780px] mx-auto px-4">

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-800 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={18} /> Назад в блог
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1.5"><Calendar size={14} /> Авторская статья</span>
          <span className="flex items-center gap-1.5"><Clock size={14} /> 9 мин</span>
          <span className="bg-violet-100 text-violet-700 font-medium px-3 py-1 rounded-full text-xs">Для пациентов</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Брекет-системы: какие бывают, сколько стоят и как выбрать подходящую
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Металлические, керамические, сапфировые, самолигирующие — разновидностей много, и каждый производитель обещает «лучший результат». Рассказываю без маркетинга: чем они отличаются и что реально важно при выборе.
        </p>

        <div className="h-px bg-gradient-to-r from-violet-200 via-orange-200 to-transparent mb-10" />

        <article className="prose prose-gray prose-lg max-w-none">

          <h2>Что такое брекет-система и как она работает?</h2>
          <p>
            Брекет — это небольшой замочек, который фиксируется на поверхности зуба с помощью специального клея. Через все брекеты проходит металлическая дуга. Именно дуга, стремясь вернуться в свою исходную форму, создаёт давление на зубы и постепенно перемещает их в нужное положение.
          </p>
          <p>
            Лечение на брекетах — это не больно. Есть период привыкания (3–5 дней после каждой активации), когда ощущается давление и лёгкая болезненность. Это нормальная реакция на перемещение зубов.
          </p>

          <h2>Виды брекет-систем</h2>
          <p>Разберём главные виды, с которыми работают современные ортодонты.</p>

        </article>

        {/* Comparison table */}
        <div className="not-prose space-y-4 my-8">
          {bracesTypes.map((type) => (
            <div key={type.name} className="rounded-2xl border border-gray-200 bg-white/80 p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <h3 className="font-bold text-gray-900 text-lg">{type.name}</h3>
                <span className="text-violet-600 font-bold text-lg shrink-0">{type.price}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">Преимущества</p>
                  <div className="space-y-1">
                    {type.pros.map((p) => (
                      <div key={p} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={15} className="text-green-500 shrink-0 mt-0.5" />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">Нюансы</p>
                  <div className="space-y-1">
                    {type.cons.map((c) => (
                      <div key={c} className="flex items-start gap-2 text-sm text-gray-700">
                        <XCircle size={15} className="text-red-400 shrink-0 mt-0.5" />
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <article className="prose prose-gray prose-lg max-w-none">

          <h2>Лигатурные vs. самолигирующие брекеты: в чём разница?</h2>
          <p>
            В лигатурных брекетах дуга крепится к каждому замочку с помощью тонкой резинки (лигатуры). Их меняют на каждом приёме. В самолигирующих (например, Empower Clear) есть встроенная крышечка — дуга «скользит» внутри, что теоретически снижает трение.
          </p>
          <p>
            На практике разница в результате лечения минимальна. Самолигирующие брекеты немного удобнее при гигиене и, по некоторым данным, требуют чуть реже активаций. Но это не значит, что они «лечат быстрее» — основное время занимает биологический процесс перестройки кости.
          </p>

          <h2>Как долго носить брекеты?</h2>
          <p>
            Средние сроки лечения на брекетах — <strong>1,5–2,5 года</strong>. На продолжительность влияют:
          </p>
          <ul>
            <li>Сложность и тип нарушения прикуса</li>
            <li>Возраст пациента (у молодых людей кость перестраивается быстрее)</li>
            <li>Исходное состояние зубов и дёсен</li>
            <li>Дисциплина пациента (посещение активаций, гигиена)</li>
          </ul>
          <p>
            Важно понимать: ускорить биологический процесс невозможно. Те, кто обещает вылечить прикус за 6 месяцев, скорее всего, либо занижают ожидания, либо работают с очень лёгкими случаями.
          </p>

          <h2>Брекеты или элайнеры: что лучше?</h2>
          <p>
            Оба метода эффективны. Выбор зависит от клинического случая, образа жизни и предпочтений пациента.
          </p>
          <p>
            Брекеты — более универсальный метод, подходящий для большинства сложностей, включая скелетные аномалии в сочетании с хирургией. Элайнеры — отличный выбор для тех, кому важна эстетика в процессе лечения. Подробнее об элайнерах — в отдельной статье.
          </p>

          <h2>Гигиена с брекетами: главное</h2>
          <p>
            Самый важный бытовой навык при лечении на брекетах — правильная чистка зубов. Рекомендации:
          </p>
          <ul>
            <li>Чистить зубы после каждого приёма пищи (3+ раза в день)</li>
            <li>Использовать ортодонтическую щётку + монопучковую для труднодоступных мест</li>
            <li>Применять ирригатор — он не заменяет щётку, но отлично дополняет</li>
            <li>Флосс с нитепроводником для межзубных промежутков</li>
            <li>Не есть твёрдую пищу, которая может отклеить брекет</li>
          </ul>

          <h2>Что происходит после лечения?</h2>
          <p>
            После снятия брекетов — обязательный ретенционный период. Зубы стремятся вернуться на своё прежнее место, и без ретейнера результат будет потерян. Как правило, устанавливается несъёмный лингвальный ретейнер (тонкая проволока за зубами) и/или выдаётся съёмная капа-ретейнер.
          </p>
          <p>
            Ретейнеры — это не «доделки», а обязательная часть лечения. Без них результат нестабилен.
          </p>

          <h2>Сколько стоит лечение на брекетах в Москве?</h2>
          <p>
            Стоимость зависит от типа системы. Цены в клиниках Queen Nella и Queen Nella Kids, где я принимаю:
          </p>
          <ul>
            <li>Металлические Mini Master — от 70 000 ₽/дугу (от 140 000 ₽ за обе дуги)</li>
            <li>Металлические с циркониевым напылением — от 80 000 ₽/дугу</li>
            <li>Керамические Empower Clear — от 110 000 ₽/дугу</li>
            <li>Сапфировые Radiance — от 95 000 ₽/дугу</li>
          </ul>
          <p>
            В реальности оплата нередко проводится поэтапно — это снижает единовременную финансовую нагрузку. Уточняйте условия на консультации.
          </p>

          <h2>Распространённые мифы о брекетах</h2>

          <h3>«Брекеты — только для детей»</h3>
          <p>Неправда. Ортодонтическое лечение не имеет возрастных ограничений. Я работаю с пациентами от 7 до 60+ лет. Разница лишь в сроках — у взрослых кость перестраивается медленнее.</p>

          <h3>«Брекеты портят эмаль»</h3>
          <p>При правильной гигиене и регулярном контроле у ортодонта — нет. Проблемы с эмалью возникают при плохом уходе, а не от самих брекетов.</p>

          <h3>«После брекетов зубы разойдутся обратно»</h3>
          <p>Только без ретейнера. С правильной ретенцией результат стабилен пожизненно.</p>

        </article>

        <div className="h-px bg-gradient-to-r from-violet-200 via-orange-200 to-transparent my-10" />

        {/* Author CTA */}
        <div className="rounded-3xl bg-gradient-to-br from-violet-50 to-orange-50 border border-violet-100 p-8">
          <h3 className="text-xl font-bold mb-2">Хотите узнать, какие брекеты подойдут вам?</h3>
          <p className="text-gray-600 mb-5 text-sm">
            На первичной консультации я оцениваю клинический случай и честно рекомендую оптимальный метод — брекеты, элайнеры или их сочетание.
          </p>
          <a
            href="https://t.me/ortho_amarkova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <Send size={18} /> Записаться на консультацию
          </a>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/blog/konsultaciya-ortodonta" className="flex-1 rounded-2xl border border-gray-200 p-5 hover:border-violet-300 transition-colors group">
            <p className="text-xs text-gray-400 mb-1">← Предыдущая статья</p>
            <p className="font-semibold text-gray-800 group-hover:text-violet-700 transition-colors">
              Консультация ортодонта: что происходит на первом приёме
            </p>
          </Link>
          <Link href="/blog/elainery" className="flex-1 rounded-2xl border border-gray-200 p-5 hover:border-violet-300 transition-colors group">
            <p className="text-xs text-gray-400 mb-1">Следующая статья →</p>
            <p className="font-semibold text-gray-800 group-hover:text-violet-700 transition-colors">
              Элайнеры: всё, что нужно знать перед началом лечения
            </p>
          </Link>
        </div>

      </div>
    </div>
  )
}
