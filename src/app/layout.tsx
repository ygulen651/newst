import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Newstag Enerji | Future of Energy",
  description: "Saray Holding backed sustainable energy solutions.",
};

import ScrollToTop from "@/components/layout/ScrollToTop";
import { LanguageProvider } from "@/lib/i18n";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className="dark h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <div className="noise-overlay" />
        <LanguageProvider>
          {children}
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
