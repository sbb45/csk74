import type { PageLoad } from './$types';
import type { SeoProps } from '$lib/seo';
import { siteConfig } from '$lib/seo';

export const prerender = true;

export const load: PageLoad = () => {
    const seo: SeoProps = {
        title: 'Каркасные дома под ключ в Челябинске — sha&vi',
        description:
            'Строим каркасные дома под ключ в Челябинске: проектирование, смета, фундамент, коробка, кровля, фасад, инженерия и отделка без скрытых доплат.',
        ogType: 'website',
        image: siteConfig.defaultOgImage
    };

    return { seo };
};
