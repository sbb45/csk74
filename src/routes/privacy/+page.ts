import type { PageLoad } from './$types';
import type { SeoProps } from '$lib/seo';

export const prerender = true;

export const load: PageLoad = () => {
    const seo: SeoProps = {
        title: 'Политика конфиденциальности — Центр Силового Каркаса',
        description:
            'Политика конфиденциальности и обработки персональных данных сайта Центра Силового Каркаса.',
        noindex: true
    };

    return { seo };
};

