import type { Metadata } from "next";

export const defaultMeta: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://www.codefoxjs.com"),
  title: {
      default: "NextFox",
      template: "%s | NextFox",
    },
    description: "NextFox is a modern and clean Next.js template for building fast and scalable web applications.",
    keywords: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Web Development",
      "Boilerplate"
    ],
    authors: [{ name: "CodeFoxJS", url: "https://www.codefoxjs.com" }],
    creator: "CodeFoxJS",
    openGraph: {
      title: "NextFox",
      description: "NextFox is a modern and clean Next.js template for building fast and scalable web applications.",
      url: "https://www.codefoxjs.com",
      siteName: "CodeFoxJS",
      images: [
        {
          url: "/opengraph/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "NextFox",
      description: "NextFox is a modern and clean Next.js template for building fast and scalable web applications.",
      site: "@codefoxjs",
      creator: "@codefoxjs",
      images: [
        {
          url: "/opengraph/twitter-image.jpg",
        },
      ],
    },
    icons: {
      icon: [
        { url: "/favicon/icon.svg", type: "image/svg+xml" },
        { url: "/favicon/icon.png", sizes: "96x96", type: "image/png" },
        { url: "/favicon/favicon.ico", sizes: "any", type: "image/x-icon" },
      ],
      apple: [
        {
          url: "/favicon/apple-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
      other: [
        {
          rel: "android-chrome",
          url: "/web-app/web-app-manifest-192x192.png",
          sizes: "192x192",
        },
        {
          rel: "android-chrome",
          url: "/web-app/web-app-manifest-512x512.png",
          sizes: "512x512",
        },
      ],
    },
    manifest: "/web-app/manifest.json",
    appleWebApp: {
      title: "NextFox",
    statusBarStyle: "black-translucent",
  },
};
