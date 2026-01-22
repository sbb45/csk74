import type { PageLoad } from './$types';
import type { SeoProps } from '$lib/seo';
import { siteConfig } from '$lib/seo';

export const prerender = true;

export const load: PageLoad = () => {
    const seo: SeoProps = {
        title: 'Портфолио построенных каркасных домов — Центр Силового Каркаса',
        description:
            'Готовые каркасные дома Центра Силового Каркаса: фото реализованных проектов, планировки и отделка. Посмотрите, как мы строим в Челябинске и области.',
        ogType: 'website',
        image: siteConfig.defaultOgImage
    };

    return { seo };
};

