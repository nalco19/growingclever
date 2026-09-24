import type { Metadata } from "next";

export const siteUrl = "https://growingclever.com";
export const siteName = "Growing Clever";

/** The seven public pages, in navigation order. Also drives the sitemap. */
export const publicPaths = [
  "/",
  "/academy",
  "/lab",
  "/stage",
  "/voice",
  "/about",
  "/contact",
] as const;

export type PublicPath = (typeof publicPaths)[number];

/** The production URL of a page: the form its own canonical resolves to. */
export function absoluteUrl(path: PublicPath) {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

export type PageSeo = {
  /** The page's own <title> text, exactly as approved. */
  title: string;
  /** The page's own meta description, exactly as approved. */
  description: string;
  /** The full title after the root template is applied, used for og:title. */
  socialTitle: string;
  path: PublicPath;
};

/** Home's approved title and description, shared by the layout and og:title. */
export const homeSeo: PageSeo = {
  title: "Strategic Marketing Advisory | Growing Clever",
  description:
    "Strategic marketing advisory, education and speaking for organisations that want to grow in ways they can stand behind.",
  socialTitle: "Strategic Marketing Advisory | Growing Clever",
  path: "/",
};

/**
 * The site-wide social image. Both files in public/assets are 1200x630; the
 * dark one is the default. Declared once here and reused by every page and by
 * the root layout, so a new page inherits it without restating anything.
 */
export const socialImage = {
  url: `${siteUrl}/assets/og-image.png`,
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "Growing Clever: where growth learns accountability. Strategic marketing advisory, education and speaking.",
} as const;

/**
 * The Open Graph and Twitter card for one page.
 *
 * Next does not deep-merge these: a page that declares `openGraph` replaces
 * the layout's object outright rather than adding to it. So each page gets the
 * complete set from here, rather than inheriting half of it and silently
 * losing the image or the site name.
 */
export function socialMetadata({ socialTitle, description, path }: PageSeo) {
  return {
    openGraph: {
      type: "website",
      siteName,
      title: socialTitle,
      description,
      url: absoluteUrl(path),
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage.url],
    },
  } satisfies Pick<Metadata, "openGraph" | "twitter">;
}

/** The title, description, canonical and social tags for one page. */
export function pageMetadata(seo: PageSeo): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.path },
    ...socialMetadata(seo),
  };
}
