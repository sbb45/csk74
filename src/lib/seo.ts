export const siteConfig = {
    name: 'sha&vi',
    tagline: 'Каркасные дома под ключ в Челябинске',
    url: 'https://example.com',
    locale: 'ru_RU',
    language: 'ru',
    phone: '+7 919 312 51 45',
    email: 'info@example.com',
    logo: 'https://example.com/og/logo.png',
    defaultOgImage: 'https://example.com/og/main.jpg',
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
