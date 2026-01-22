import { projects } from '$lib/data/projects';
import { siteConfig } from '$lib/seo';
import type { RequestHandler } from './$types';

export const prerender = true;

const staticPages = [
    { url: '', changefreq: 'weekly', priority: '1.0' },
    { url: '/about', changefreq: 'monthly', priority: '0.8' },
    { url: '/portfolio', changefreq: 'weekly', priority: '0.9' }
];

export const GET: RequestHandler = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${staticPages
    .map(
        (page) => `    <url>
        <loc>${siteConfig.url}${page.url}</loc>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>`
    )
    .join('\n')}
${projects
    .map(
        (project) => `    <url>
        <loc>${siteConfig.url}/portfolio/${project.slug}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
        <image:image>
            <image:loc>${siteConfig.url}${project.image}</image:loc>
            <image:title>${project.title}</image:title>
        </image:image>
    </url>`
    )
    .join('\n')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8'
        }
    });
};

