import type { MetadataRoute } from "next";
import { publicPaths, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only url is emitted. lastModified, changeFrequency and priority would be
  // guesses: the pages are static and carry no publication or revision data.
  return publicPaths.map((path) => ({
    // "/" is written bare so each entry matches that page's canonical exactly,
    // which is how Next resolves a "/" canonical against metadataBase.
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
  }));
}
