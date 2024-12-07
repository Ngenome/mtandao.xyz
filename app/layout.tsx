import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const rethink_sans = Rethink_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mtandao - Professional Service Pages & Business Management",
    template: "%s | mtandao.xyz",
  },
  description:
    "Create professional service pages, manage your business, and grow your online presence without coding. Get found online with SEO-optimized pages and powerful business tools.",
  keywords: [
    "service provider platform",
    "professional service pages",
    "business management",
    "online presence",
    "SEO optimization",
    "service portfolio",
    "business analytics",
    "client management",
    "no-code website builder",
    "professional templates",
    "service management",
    "business growth",
  ],
  authors: [{ name: "mtandao.xyz Team" }],
  creator: "mtandao.xyz",
  publisher: "mtandao.xyz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(APP_URL),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "sw-KE": "/sw-KE",
    },
  },
  openGraph: {
    title: "mtandao.xyz - Build Your Professional Online Presence",
    description:
      "Create beautiful service pages and manage your business without coding. Get started with professional templates and powerful business tools.",
    url: APP_URL,
    siteName: "mtandao.xyz",
    images: [
      {
        url: new URL("/mtandao-og-image.jpg", APP_URL).toString(),
        width: 1200,
        height: 630,
        alt: "mtandao.xyz - Professional Service Pages & Business Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mtandao.xyz - Professional Service Pages & Business Management",
    description:
      "Create beautiful service pages, manage your business, and grow your online presence without coding.",
    creator: "@mtandao_xyz", // Replace with actual Twitter handle
    images: [
      {
        url: new URL("/mtandao-og-image.jpg", APP_URL).toString(),
        alt: "mtandao.xyz - Professional Service Pages & Business Management",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification-code", // Add your Google verification code
    yandex: "your-yandex-verification-code", // Optional: Add if targeting Yandex
    bing: "your-bing-verification-code", // Optional: Add if targeting Bing
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "theme-color": "#ffffff",
    // Schema.org markup for service provider platform
    "schema:WebSite": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "mtandao.xyz",
      url: APP_URL,
      description:
        "Professional service pages and business management platform",
      potentialAction: {
        "@type": "SearchAction",
        target: `${APP_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    }),
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Meta tags for mobile optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#ffffff" />

        {/* PWA meta tags */}
        <meta name="application-name" content="mtandao.xyz" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="mtandao.xyz" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={rethink_sans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
