export const siteConfig = {
    name: 'Центр Силового Каркаса',
    tagline: 'Каркасные дома под ключ в Челябинске',
    url: 'https://csk74.ru',
    locale: 'ru_RU',
    language: 'ru',
    phone: '+7 919 312 51 45',
    email: 'csk74@yandex.ru',
    logo: 'https://csk74.ru/web-app-manifest-512x512.png',
    defaultOgImage: 'https://csk74.ru/web-app-manifest-512x512.png',
    address: {
        country: 'RU',
        locality: 'Челябинск'
    },
    description:
        'Строим тёплые каркасные дома под ключ в Челябинске и области: проектирование, фундамент, коробка, кровля, фасад, инженерия и отделка без скрытых доплат.'
};

export type SeoProps = {
    title?: string;
    description?: string;
    url?: string;
    canonical?: string;
    noindex?: boolean;

    ogType?: 'website' | 'article';
    ogTitle?: string;
    ogDescription?: string;
    image?: string;
};
