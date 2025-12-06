import { projects } from '$lib/data/projects';
import { error } from '@sveltejs/kit';

export function load({ params }) {
    const project = projects.find(p => p.slug === params.slug);

    if (!project) throw error(404, 'Проект не найден');

    return { project };
}
