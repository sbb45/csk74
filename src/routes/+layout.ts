import type { LayoutLoad } from './$types';
import { siteConfig, type SeoProps } from '$lib/seo';

export const prerender = true;

export const load: LayoutLoad = ({ url, data }) => {
    const childSeo = (data as any)?.seo as SeoProps | undefined;

    const mergedSeo: SeoProps = {
        title:
            childSeo?.title ??
            `${siteConfig.tagline} — ${siteConfig.name}`,
        description: childSeo?.description ?? siteConfig.description,
        url: url.href,
        canonical: childSeo?.canonical ?? url.href,
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
