import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { siteConfig } from "@/config/site";

import { SiteFooter } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";

import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteConfig.defaultMeta.metadataBase,
  title: siteConfig.defaultMeta.title,
  description: siteConfig.defaultMeta.description,
  keywords: siteConfig.defaultMeta.keywords,
  authors: siteConfig.defaultMeta.authors,
  creator: siteConfig.defaultMeta.creator,
  openGraph: siteConfig.defaultMeta.openGraph,
  twitter: siteConfig.defaultMeta.twitter,
  appleWebApp: {
    title: "NextFox",
    statusBarStyle: "default",
    capable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
