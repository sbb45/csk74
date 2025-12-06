import type { PageLoad } from './$types';
import type { SeoProps } from '$lib/seo';
import { siteConfig } from '$lib/seo';

export const load: PageLoad = async ({ params, fetch }) => {
    const res = await fetch(`/api/projects/${params.slug}`);
    const project = await res.json();

    const seo: SeoProps = {
        title: `${project.title} — каркасный дом ${project.area} м² — sha&vi`,
        description: project.seoDescription ?? project.shortDescription,
        ogType: 'article',
        image: project.coverOg ?? siteConfig.defaultOgImage
    };

    return { seo, project };
};
