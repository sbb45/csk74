import { projects } from '$lib/data/projects';
import type { SeoProps } from '$lib/seo';
import { siteConfig } from '$lib/seo';

export function load() {
    const seo: SeoProps = {
        title: 'Портфолио построенных каркасных домов — Центр Силового Каркаса',
        description:
            'Готовые каркасные дома Центр Силового Каркаса: фото реализованных проектов, планировки и отделка. Посмотрите, как мы строим.',
        ogType: 'website',
        image: siteConfig.defaultOgImage
    };

    return {
        projects,
        seo
    };
}


