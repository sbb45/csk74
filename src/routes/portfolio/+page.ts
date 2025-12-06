import type { PageLoad } from './$types';
import type { SeoProps } from '$lib/seo';
import { siteConfig } from '$lib/seo';

export const prerender = true;

export const load: PageLoad = () => {
    const seo: SeoProps = {
        title: 'Портфолио построенных каркасных домов — sha&vi',
        description:
            'Готовые каркасные дома sha&vi: фото реализованных проектов, планировки и отделка. Посмотрите, как мы строим.',
        ogType: 'website',
        image: siteConfig.defaultOgImage
    };

    return { seo };
};
