/**
 * Compatibility re-exports from seo-config.
 * Prefer importing SEO_CONFIG / seo-metadata / seo-schema directly for new code.
 */
import { SEO_CONFIG } from "./seo-config";

export const SITE_URL = SEO_CONFIG.site.url;
export const SITE_NAME = SEO_CONFIG.site.name;
export const AUTHOR_NAME = SEO_CONFIG.personal.name;
export const AUTHOR_EMAIL = SEO_CONFIG.personal.email;
export const AUTHOR_PHONE = SEO_CONFIG.personal.phone;
export const AUTHOR_PHONE_DISPLAY = SEO_CONFIG.personal.phoneDisplay;
export const AUTHOR_LINKEDIN = SEO_CONFIG.social.linkedin;
export const AUTHOR_JOB_TITLE = SEO_CONFIG.personal.jobTitle;
export const SITE_TITLE = SEO_CONFIG.site.title;
export const SITE_DESCRIPTION = SEO_CONFIG.site.description;
export const SITE_KEYWORDS: string[] = [...SEO_CONFIG.site.keywords];
