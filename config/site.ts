export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  defaultMeta: {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://www.codefoxjs.com"),
    title: {
      default: "NextFox",
      template: "%s | NextFox",
      absolute: "NextFox",
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
    authors: [{ name: "CodeFoxJS" }],
    creator: "CodeFoxJS",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.codefoxjs.com",
      siteName: "CodeFoxJS",
      images: [
        {
          url: "/opengraph/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@codefoxjs", // Update this with your actual Twitter handle
      creator: "@codefoxjs", // Update this with your actual Twitter handle
    },
  },
};
