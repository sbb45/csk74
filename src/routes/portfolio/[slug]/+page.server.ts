import { projects } from '$lib/data/projects';
import { error } from '@sveltejs/kit';
import type { SeoProps } from '$lib/seo';
import { siteConfig } from '$lib/seo';

export const prerender = true;

// Указываем SvelteKit, какие страницы нужно пререндерить
export async function entries() {
    return projects.map(project => ({
        slug: project.slug
    }));
}

export function load({ params, url }) {
    const project = projects.find(p => p.slug === params.slug);

    if (!project) throw error(404, 'Проект не найден');

    const seo: SeoProps = {
        title: `${project.title} — Портфолио Центра Силового Каркаса`,
        description: project.shortDesc || `Каркасный ${project.type || 'дом'} ${project.area ? `${project.area} м²` : ''} ${project.location ? `в ${project.location}` : ''}. ${project.description || ''}`,
        canonical: "https://csk74.ru",
        ogType: 'article',
        image: `${siteConfig.url}${project.image}`,
        ogTitle: project.title,
        ogDescription: project.shortDesc || project.description
    };

    return { project, seo };
}
