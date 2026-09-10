import type { Metadata, Viewport } from "next";
import { siteName, siteUrl } from "@/lib/seo";
import Header from "@/components/chrome/Header";
import Footer from "@/components/chrome/Footer";
import "./globals.css";

const homeTitle = "Growing Clever — Where growth learns accountability.";
const homeDescription =
  "We help organisations and leaders turn growth into responsible, strategic and lasting value.";

export const viewport: Viewport = {
  // width and initialScale are the framework defaults, restated because
  // declaring themeColor replaces the generated viewport tag wholesale.
  width: "device-width",
  initialScale: 1,
  themeColor: "#35C9AA",
};

export const metadata: Metadata = {
  // Every relative URL below — canonical, og:url — resolves against this.
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle,
    template: "%s — Growing Clever",
  },
  description: homeDescription,
  // Home's own canonical; the six other pages each declare their own.
  alternates: { canonical: "/" },
  // Written out in full here and on every page: Next merges metadata
  // shallowly, so a page setting only a title would drop siteName and type.
  openGraph: {
    type: "website",
    siteName,
    url: "/",
    title: homeTitle,
    description: homeDescription,
  },
  // No image is declared, so the card type is the text "summary".
  twitter: {
    card: "summary",
    title: homeTitle,
    description: homeDescription,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icons/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/icons/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icons/favicon-64.png", type: "image/png", sizes: "64x64" },
      // Safari and Firefox honour media on icon links; other browsers ignore
      // the pair and fall back to the entries above.
      {
        url: "/icons/favicon-32.png",
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icons/favicon-dark-32.png",
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
