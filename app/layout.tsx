import type { Metadata } from "next";
import Header from "@/components/chrome/Header";
import Footer from "@/components/chrome/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Growing Clever — Where growth learns accountability.",
    template: "%s — Growing Clever",
  },
  description:
    "We help organisations and leaders turn growth into responsible, strategic and lasting value.",
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
