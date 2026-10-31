import type { Metadata } from "next";
import { SEO_CONFIG } from "./seo-config";

/** Production domain — always use for sitemap, schema, llms.txt */
export const PRODUCTION_SITE_URL = SEO_CONFIG.site.url;

/**
 * Runtime site URL for metadata/canonical.
 * Preview deployments self-reference their host so audits don't fail.
 * Production always uses abhias.com.
 */
export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");
}

export function isPreviewDeployment(): boolean {
  return process.env.VERCEL_ENV === "preview";
}

type PageMetaOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "profile";
};

/**
 * Build per-page metadata with absolute title, unique description,
 * self-referencing canonical, and shared keyword bank.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
}: PageMetaOptions): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${path}`;
  const absoluteTitle = path === "" ? title : `${title} | ${SEO_CONFIG.brand}`;

  return {
    title: { absolute: absoluteTitle },
    description,
    keywords: [...SEO_CONFIG.site.keywords],
    alternates: { canonical },
    robots: isPreviewDeployment()
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type,
      locale: SEO_CONFIG.site.locale,
      url: canonical,
      siteName: SEO_CONFIG.site.name,
      title: absoluteTitle,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${SEO_CONFIG.brand} — ${SEO_CONFIG.personal.headline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export const homeMetadata: Metadata = buildPageMetadata({
  title: SEO_CONFIG.site.title,
  description: SEO_CONFIG.site.description,
  path: "",
  type: "profile",
});

/** Registry — indexable routes with unique title + description */
export const PAGE_METADATA = {
  home: homeMetadata,
  faq: buildPageMetadata({
    title: "Frequently Asked Questions",
    description:
      "Common questions about working with Abhishek as a full stack engineer and project manager — backends, AI integrations, DevOps, and production delivery.",
    path: "/faq",
  }),
} as const;
