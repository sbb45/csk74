import type { LayoutLoad } from './$types';
import { siteConfig, type SeoProps } from '$lib/seo';

export const prerender = true;

export const load: LayoutLoad = ({ url, data }) => {
    const childSeo = (data as any)?.seo as SeoProps | undefined;
    const base = siteConfig.url.replace(/\/+$/, '');
    
    // Нормализуем canonical URL (убираем trailing slash, кроме корня)
    const normalizeCanonical = (href: string): string => {
        const urlObj = new URL(href);
        if (urlObj.pathname !== '/' && urlObj.pathname.endsWith('/')) {
            urlObj.pathname = urlObj.pathname.slice(0, -1);
        }
        urlObj.search = ''; // Убираем query параметры из canonical
        urlObj.hash = ''; // Убираем hash из canonical
        return urlObj.href;
    };
    const canonical = normalizeCanonical(new URL(url.pathname, base + '/').href);

    const mergedSeo: SeoProps = {
        title:
            childSeo?.title ??
            `${siteConfig.tagline} — ${siteConfig.name}`,
        description: childSeo?.description ?? siteConfig.description,
        url: "https://csk74.ru",
        canonical: "https://csk74.ru",
        noindex: childSeo?.noindex ?? false,
        ogType: childSeo?.ogType ?? 'website',
        ogTitle:
            childSeo?.ogTitle ??
            childSeo?.title ??
            `${siteConfig.tagline} — ${siteConfig.name}`,
        ogDescription:
            childSeo?.ogDescription ??
            childSeo?.description ??
            siteConfig.description,
        image: childSeo?.image ?? siteConfig.defaultOgImage
    };

    return {
        ...(data ?? {}),
        seo: mergedSeo,
        siteConfig
    };
};
