import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, XCircle, Send, Clock, Calendar, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Элайнеры: всё, что нужно знать перед началом лечения | Анастасия Маркова',
  description:
    'Подробный гид по элайнерам от официального спикера EuroKappa: как работают, показания и противопоказания, сколько стоят, сравнение с брекетами. 200+ завершённых кейсов.',
  keywords: [
    'элайнеры',
    'прозрачные каппы',
    'EuroKappa',
    'лечение элайнерами',
    'сколько стоят элайнеры',
    'элайнеры или брекеты',
    'невидимые брекеты',
    'ортодонт элайнеры Москва',
    'элайнеры показания противопоказания',
  ],
  alternates: { canonical: 'https://amarkova.ru/blog/elainery' },
  openGraph: {
    title: 'Элайнеры: всё, что нужно знать перед началом лечения',
    description:
      'Как работают элайнеры, кому подходят, чего ожидать от лечения — честный разбор от официального спикера EuroKappa с 200+ завершёнными кейсами.',
    url: 'https://amarkova.ru/blog/elainery',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function ElaineryPage() {
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
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 flex-wrap">
          <span className="flex items-center gap-1.5"><Calendar size={14} /> Авторская статья</span>
          <span className="flex items-center gap-1.5"><Clock size={14} /> 10 мин</span>
          <span className="bg-violet-100 text-violet-700 font-medium px-3 py-1 rounded-full text-xs">Для пациентов</span>
          <span className="flex items-center gap-1 text-yellow-500 text-xs font-medium">
            <Star size={12} fill="currentColor" /> Официальный спикер EuroKappa
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Элайнеры: всё, что нужно знать перед началом лечения
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Я провела 200+ кейсов на элайнерах и являюсь официальным спикером EuroKappa. Расскажу честно: как работают капы, кому они подходят, в чём их преимущества и ограничения — и что влияет на конечный результат.
        </p>

        <div className="h-px bg-gradient-to-r from-violet-200 via-orange-200 to-transparent mb-10" />

        <article className="prose prose-gray prose-lg max-w-none">

          <h2>Что такое элайнеры?</h2>
          <p>
            Элайнеры (или прозрачные капы) — съёмные ортодонтические аппараты из прозрачного полимера, которые надеваются на зубы и постепенно их перемещают. В отличие от брекетов, они практически незаметны и снимаются на время еды и чистки зубов.
          </p>
          <p>
            Лечение состоит из серии последовательных кап — каждая чуть отличается от предыдущей по форме, постепенно «двигая» зубы к финальному положению. В среднем одну пару кап носят 7–14 дней, после чего переходят к следующей.
          </p>

          <h2>Как работают элайнеры: этапы лечения</h2>

          <h3>1. Диагностика и планирование</h3>
          <p>
            На первой консультации я оцениваю клинический случай и определяю, подходят ли элайнеры. Если да — делаем цифровое сканирование или слепки зубов. На их основе лаборатория строит компьютерную модель и показывает прогнозируемый результат (так называемый ClinCheck или его аналог).
          </p>
          <p>
            Важно: прогноз — это план, а не гарантия. Конечный результат зависит от того, насколько зубы «следуют» за капами, что контролируется на каждом приёме.
          </p>

          <h3>2. Изготовление кап</h3>
          <p>
            После согласования плана лечения изготавливается весь комплект кап. Срок изготовления — обычно 3–6 недель. По готовности вы приходите на установку: при необходимости устанавливаются аттачменты (небольшие опорные элементы на зубах, которые помогают капе «захватить» зуб) и выдаётся первая партия кап.
          </p>

          <h3>3. Активная фаза лечения</h3>
          <p>
            Носить капы нужно <strong>не менее 20–22 часов в сутки</strong>. Снимаются только на время еды, питья (кроме воды) и чистки зубов. Это главное условие эффективности лечения.
          </p>
          <p>
            Встречи с врачом — каждые 6–8 недель для контроля прогресса и выдачи следующей партии кап.
          </p>

          <h3>4. Ретенция</h3>
          <p>
            После завершения активной фазы — ретейнеры. Как и при брекетах, это обязательный этап для закрепления результата.
          </p>

          <h2>Кому подходят элайнеры?</h2>
          <p>
            Современные системы элайнеров — не только для «лёгких случаев». За годы практики я вела на элайнерах сложные случаи: глубокий прикус, скученность, открытый прикус. Тем не менее, есть ситуации, где брекеты предпочтительнее.
          </p>

        </article>

        {/* Pros/Cons */}
        <div className="not-prose my-8 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
            <h3 className="font-bold text-green-800 mb-3 text-base">Элайнеры подходят, если:</h3>
            <div className="space-y-2">
              {[
                'Важна эстетика в процессе лечения',
                'Профессиональная деятельность на публике',
                'Нет слишком сложных скелетных нарушений',
                'Высокая дисциплина (носить 20–22 ч/день)',
                'Предпочтительно снимать на еду',
                'Хорошая гигиена полости рта',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-green-900">
                  <CheckCircle2 size={15} className="text-green-600 shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
            <h3 className="font-bold text-orange-800 mb-3 text-base">Стоит обсудить брекеты, если:</h3>
            <div className="space-y-2">
              {[
                'Сложные скелетные аномалии + хирургия',
                'Сомнение в дисциплине ношения',
                'Большой бюджет является ограничением',
                'Тяжёлые зубочелюстные аномалии у детей',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-orange-900">
                  <XCircle size={15} className="text-orange-500 shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <article className="prose prose-gray prose-lg max-w-none">

          <h2>Почему я работаю с EuroKappa?</h2>
          <p>
            Я являюсь официальным спикером и амбассадором EuroKappa Academy — ведущей российской системы элайнеров. EuroKappa — это не просто продукт, это научно обоснованный протокол с полноценной технической поддержкой врача на каждом этапе.
          </p>
          <p>
            За годы работы с этой системой я провела <strong>200+ завершённых кейсов</strong>, от простых до по-настоящему сложных. Преподаю коллегам на сертификационных курсах «Элайнеры от А до Я» по всей России.
          </p>

          <h2>Сколько стоят элайнеры?</h2>
          <p>
            Стоимость лечения на элайнерах в клиниках, где я принимаю:
          </p>
          <ul>
            <li><strong>EuroKappa Junior Little_PRO</strong> — от 250 000 ₽ (для подростков)</li>
            <li><strong>EuroKappa Complete_PRO</strong> — от 300 000 ₽</li>
            <li><strong>EuroKappa Light_PRO</strong> — от 450 000 ₽</li>
            <li><strong>EuroKappa PROFI</strong> — от 520 000 ₽ (неограниченное количество кап)</li>
          </ul>
          <p>
            Цена зависит от выбранного пакета (количества кап и клинической сложности). На консультации я подбираю оптимальный вариант под ваш случай. Оплата, как правило, поэтапная.
          </p>

          <h2>Частые вопросы об элайнерах</h2>

          <h3>Больно ли носить элайнеры?</h3>
          <p>
            В первые дни после смены на новую пару кап ощущается давление — это нормально. Болей, как таковых, большинство пациентов не испытывает. Через 2–3 дня ощущения проходят.
          </p>

          <h3>Можно ли есть с элайнерами?</h3>
          <p>
            Нет. Капы снимаются на время еды и питья (кроме воды). После еды — почистить зубы и надеть капы обратно. Это главный «дисциплинарный» момент лечения.
          </p>

          <h3>Влияют ли элайнеры на речь?</h3>
          <p>
            В первые 1–2 недели может быть лёгкое шепелявение — пока язык привыкает. Большинство пациентов полностью адаптируются за 7–14 дней.
          </p>

          <h3>Что если я забуду надеть капы?</h3>
          <p>
            Пропуск 2–4 часов в день систематически снижает эффективность лечения и удлиняет его сроки. При дисциплинированном ношении 20–22 ч/сутки лечение идёт по плану.
          </p>

          <h3>Элайнеры подходят детям?</h3>
          <p>
            Подросткам с 12–13 лет — да, при хорошей мотивации. Для младших детей чаще используют другие методы (трейнеры, пластинки). Подробнее — в статье о детской ортодонтии.
          </p>

          <h2>Мой опыт: что я вижу в своей практике</h2>
          <p>
            За 200+ завершённых кейсов на элайнерах я видела разное. Главный фактор успеха — <strong>мотивация и дисциплина пациента</strong>. Технически элайнеры позволяют решить большинство случаев. Но они требуют самодисциплины: носить 20–22 часа в сутки, не терять капы, приходить на контрольные приёмы.
          </p>
          <p>
            Второй фактор — опыт врача. Планирование на элайнерах — это отдельное искусство. Неправильно составленный план даст плохой результат вне зависимости от качества кап. Поэтому выбирайте врача с реальным опытом именно в элайнерной практике.
          </p>

        </article>

        <div className="h-px bg-gradient-to-r from-violet-200 via-orange-200 to-transparent my-10" />

        {/* Author CTA */}
        <div className="rounded-3xl bg-gradient-to-br from-violet-50 to-orange-50 border border-violet-100 p-8">
          <h3 className="text-xl font-bold mb-2">Хотите начать лечение на элайнерах?</h3>
          <p className="text-gray-600 mb-5 text-sm">
            На консультации оцениваю клинический случай и честно говорю, подойдут ли элайнеры в вашей ситуации. Принимаю в клиниках Queen Nella и Queen Nella Kids (Москва).
          </p>
          <a
            href="https://t.me/drmarkova_assist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <Send size={18} /> Записаться на консультацию
          </a>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/blog/breketsy" className="flex-1 rounded-2xl border border-gray-200 p-5 hover:border-violet-300 transition-colors group">
            <p className="text-xs text-gray-400 mb-1">← Предыдущая статья</p>
            <p className="font-semibold text-gray-800 group-hover:text-violet-700 transition-colors">
              Брекет-системы: какие бывают и как выбрать
            </p>
          </Link>
          <Link href="/blog/detskaya-ortodontiya" className="flex-1 rounded-2xl border border-gray-200 p-5 hover:border-violet-300 transition-colors group">
            <p className="text-xs text-gray-400 mb-1">Следующая статья →</p>
            <p className="font-semibold text-gray-800 group-hover:text-violet-700 transition-colors">
              Детская ортодонтия: когда начинать и что делать
            </p>
          </Link>
        </div>

      </div>
    </div>
  )
}
