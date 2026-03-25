export default function JsonLd() {
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': 'https://amarkova.ru/#person',
        name: 'Анастасия Маркова',
        alternateName: ['Anastasia Markova', 'А.И. Маркова', 'Dr. Markova'],
        url: 'https://amarkova.ru',
        image: {
            '@type': 'ImageObject',
            url: 'https://amarkova.ru/hero-photo.jpg',
            width: 800,
            height: 1067,
        },
        jobTitle: 'Врач-ортодонт',
        description:
            'Анастасия Маркова — врач-ортодонт с 10+ лет опыта, официальный спикер и наставник EuroKappa Academy, преподаватель кафедры ортодонтии РУДН, победитель конкурса «Лучший лектор РУДН», амбассадор ведущих ортодонтических брендов.',
        worksFor: [
            {
                '@type': 'EducationalOrganization',
                name: 'Российский университет дружбы народов (РУДН)',
                url: 'https://www.rudn.ru',
            },
            {
                '@type': 'Organization',
                name: 'EuroKappa Academy',
                url: 'https://academy.eurokappa.ru',
            },
        ],
        alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'Российский университет дружбы народов',
        },
        knowsAbout: [
            'Ортодонтия',
            'Элайнеры',
            'Брекет-системы',
            'Детская ортодонтия',
            'EuroKappa',
            'Исправление прикуса',
            'Менторство врачей',
            'Профессиональное выгорание',
        ],
        hasOccupation: {
            '@type': 'Occupation',
            name: 'Врач-ортодонт',
            occupationLocation: {
                '@type': 'City',
                name: 'Москва',
            },
        },
        award: [
            'Победитель конкурса «Лучший лектор РУДН»',
            'Официальный спикер EuroKappa Academy',
        ],
        knowsLanguage: ['ru', 'en'],
        sameAs: [
            'https://t.me/drmarkovaa',
            'https://t.me/drmarkova_a',
            'https://www.youtube.com/@knamss',
            'https://academy.eurokappa.ru/speakers/anastasiya-markova/',
            'https://prodoctorov.ru/moskva/vrach/997675-markova/',
        ],
    }

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://amarkova.ru/#website',
        url: 'https://amarkova.ru',
        name: 'Анастасия Маркова — врач-ортодонт',
        description: 'Официальный сайт врача-ортодонта Анастасии Марковой',
        publisher: { '@id': 'https://amarkova.ru/#person' },
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://amarkova.ru/?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
        },
    }

    const medicalBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: 'Ортодонт Анастасия Маркова',
        '@id': 'https://amarkova.ru/#business',
        url: 'https://amarkova.ru',
        image: 'https://amarkova.ru/hero-photo.jpg',
        description:
            'Ортодонтическая практика врача Анастасии Марковой. Брекеты, элайнеры EuroKappa, детская ортодонтия в Москве.',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Москва',
            addressRegion: 'Москва',
            addressCountry: 'RU',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 55.7558,
            longitude: 37.6173,
        },
        medicalSpecialty: 'Orthodontics',
        employee: { '@id': 'https://amarkova.ru/#person' },
        availableService: [
            { '@type': 'MedicalTherapy', name: 'Консультация ортодонта' },
            { '@type': 'MedicalTherapy', name: 'Брекет-системы' },
            { '@type': 'MedicalTherapy', name: 'Элайнеры EuroKappa' },
            { '@type': 'MedicalTherapy', name: 'Детская ортодонтия' },
            { '@type': 'MedicalTherapy', name: 'Исправление прикуса' },
        ],
        priceRange: '$$',
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            url: 'https://t.me/ortho_amarkova',
        },
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Кто такая Анастасия Маркова?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Анастасия Маркова — врач-ортодонт с 10+ лет опыта, преподаватель кафедры ортодонтии РУДН, официальный спикер и наставник EuroKappa Academy. Победитель конкурса «Лучший лектор РУДН», автор методических пособий. Ведёт клинический приём в Москве, обучает врачей работе с элайнерами по всей России.',
                },
            },
            {
                '@type': 'Question',
                name: 'Как записаться на приём к Анастасии Марковой?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Запись на консультацию к ортодонту Анастасии Марковой ведётся через Telegram: @ortho_amarkova. Напишите в мессенджер — ответ в течение дня.',
                },
            },
            {
                '@type': 'Question',
                name: 'Какие отзывы у Анастасии Марковой?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Пациенты Анастасии Марковой отмечают профессионализм, внимательный подход и качественный результат лечения. Коллеги-врачи высоко оценивают её педагогические навыки и экспертизу в работе с элайнерами. Отзывы доступны на странице: https://amarkova.ru/#testimonials',
                },
            },
            {
                '@type': 'Question',
                name: 'Анастасия Маркова лечит на элайнерах или брекетах?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Анастасия Маркова работает как с брекет-системами (металлические, керамические, сапфировые), так и с элайнерами EuroKappa — более 200 завершённых кейсов. Выбор метода зависит от клинической ситуации и обсуждается на первичной консультации.',
                },
            },
            {
                '@type': 'Question',
                name: 'Анастасия Маркова проводит курсы для врачей?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Да, Анастасия Маркова — официальный спикер EuroKappa Academy. Проводит сертификационные курсы «Элайнеры от А до Я» в Москве, Краснодаре, Ярославле, Архангельске и других городах. Также ведёт индивидуальное менторство по элайнерам для врачей. Расписание: https://academy.eurokappa.ru/schedule/',
                },
            },
            {
                '@type': 'Question',
                name: 'Где преподаёт Анастасия Маркова?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Анастасия Маркова — ассистент кафедры стоматологии детского возраста и ортодонтии Российского университета дружбы народов (РУДН). Ведёт занятия на русском и английском языках. Победитель внутривузовского конкурса «Лучший лектор РУДН».',
                },
            },
            {
                '@type': 'Question',
                name: 'Как пригласить Анастасию Маркову как спикера?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Анастасия Маркова открыта к сотрудничеству как спикер на конференциях, амбассадор брендов и эксперт для медийных проектов. По вопросам партнёрства: email hello@amarkova.ru или Telegram @drmarkova_a',
                },
            },
            {
                '@type': 'Question',
                name: 'Анастасия Маркова ведёт подкаст?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Да, Анастасия Маркова — со-ведущая стоматологического подкаста КНАМСС. В подкасте обсуждаются карьера врача, сложные клинические случаи, жизнь вне клиники. Смотреть на YouTube: https://www.youtube.com/@knamss',
                },
            },
        ],
    }

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Главная',
                item: 'https://amarkova.ru',
            },
        ],
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    )
}
