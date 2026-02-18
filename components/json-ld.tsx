export default function JsonLd() {
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Анастасия Маркова',
        url: 'https://amarkova.ru',
        image: 'https://amarkova.ru/hero-photo.jpg',
        jobTitle: 'Врач-ортодонт',
        worksFor: {
            '@type': 'MedicalBusiness',
            name: 'Клиника Анастасии Марковой',
        },
        sameAs: [
            'https://t.me/drmarkova_a',
            'https://www.instagram.com/drmarkova_a/',
            'https://www.youtube.com/@knamss',
        ],
    }

    const medicalBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness', // More specific than LocalBusiness
        name: 'Ортодонт Анастасия Маркова',
        image: 'https://amarkova.ru/hero-photo.jpg',
        '@id': 'https://amarkova.ru',
        url: 'https://amarkova.ru',
        telephone: '+79999999999', // Placeholder if no phone is public, or maybe omit
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Москва',
            addressCountry: 'RU',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 55.7558, // Moscow coords
            longitude: 37.6173,
        },
        medicalSpecialty: 'Orthodontics',
        availableService: [
            {
                '@type': 'MedicalTherapy',
                name: 'Исправление прикуса',
            },
            {
                '@type': 'MedicalTherapy',
                name: 'Брекет-системы',
            },
            {
                '@type': 'MedicalTherapy',
                name: 'Элайнеры',
            },
        ],
        priceRange: '$$',
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    )
}
