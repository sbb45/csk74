import type { PageLoad } from './$types';
import type { SeoProps } from '$lib/seo';
import { siteConfig } from '$lib/seo';

export const prerender = true;

export const load: PageLoad = () => {
    const seo: SeoProps = {
        title: 'О компании — Центр Силового Каркаса',
        description:
            'Строим каркасные дома под ключ в Челябинске: честная смета, аккуратная стройка и понятные сроки. Узнайте больше о подходе Центра Силового Каркаса.',
        ogType: 'website',
        image: siteConfig.defaultOgImage
    };

    return { seo };
};

