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

type PageSeoInput = {
  /** The page's own <title> text, exactly as approved. */
  title: string;
  /** The page's own meta description, exactly as approved. */
  description: string;
  /** The full title after the root template is applied, used for og:title. */
  socialTitle: string;
  path: PublicPath;
};

/**
 * Builds the complete metadata for one page.
 *
 * openGraph and twitter are written out in full on every page rather than
 * partially: Next merges metadata shallowly, so a page that set only a title
 * would drop the layout's siteName and type instead of inheriting them.
 *
 * No image is declared. The approved asset library holds no social-sharing
 * image, and every photograph in it is 3:2 — a platform would crop it to
 * 1.91:1 through the subjects' faces. The twitter card type is therefore
 * "summary" (text) rather than "summary_large_image".
 */
export function pageMetadata({
  title,
  description,
  socialTitle,
  path,
}: PageSeoInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName,
      url: path,
      title: socialTitle,
      description,
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
    },
  };
}
