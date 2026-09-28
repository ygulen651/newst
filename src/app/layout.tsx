import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Newstag Enerji | Future of Energy",
  description: "Saray Holding backed sustainable energy solutions.",
};

import ScrollToTop from "@/components/layout/ScrollToTop";
import { LanguageProvider } from "@/lib/i18n";
import { ContentProvider } from "@/lib/content/store";
import { getContentOverrides } from "@/lib/firebase/content";

// Rendered per request so page copy edited in the admin panel shows up without a rebuild.
export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contentOverrides = await getContentOverrides();

  return (
    <html
      lang="tr"
      className="dark h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <div className="noise-overlay" />
        <ContentProvider overrides={contentOverrides}>
          <LanguageProvider>
            {children}
            <ScrollToTop />
          </LanguageProvider>
        </ContentProvider>
      </body>
    </html>
  );
}
