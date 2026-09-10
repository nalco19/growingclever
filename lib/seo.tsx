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
  title: "Growing Clever — Where growth learns accountability.",
  description:
    "We help organisations and leaders turn growth into responsible, strategic and lasting value.",
  socialTitle: "Growing Clever — Where growth learns accountability.",
  path: "/",
};

/** The title, description and canonical for one page. */
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
  };
}

/**
 * Open Graph tags for one page, rendered as elements and hoisted into <head>.
 *
 * These deliberately do not go through Metadata.openGraph: whenever that field
 * is set, postProcessMetadata() in next/dist/lib/metadata/resolve-metadata.js
 * auto-derives twitter:card, twitter:title and twitter:description from it,
 * with no opt-out — `twitter: null` still falls into the branch that assigns
 * them. Growing Clever supports LinkedIn only and wants no Twitter/X tags, so
 * the Open Graph vocabulary is emitted directly instead.
 *
 * og:image belongs here once an approved 1200x630 social image exists.
 */
export function OpenGraph({ socialTitle, description, path }: PageSeo) {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={absoluteUrl(path)} />
    </>
  );
}
