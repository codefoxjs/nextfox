import type { Metadata } from "next";

import { defaultMeta } from "@/config/metadata";

import { SiteFooter } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { geistMono, geistSans } from "@/styles/fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
  ...defaultMeta,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
