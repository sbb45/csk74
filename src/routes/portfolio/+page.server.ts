import { projects } from '$lib/data/projects';
import type { SeoProps } from '$lib/seo';
import { siteConfig } from '$lib/seo';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = () => {
    const seo: SeoProps = {
        title: 'Портфолио построенных каркасных домов — Центр Силового Каркаса',
        description:
            'Готовые каркасные дома Центра Силового Каркаса: фото реализованных проектов, планировки и отделка. Посмотрите, как мы строим в Челябинске и области.',
        ogType: 'website',
        image: siteConfig.defaultOgImage
    };

    return {
        projects,
        seo
    };
};


