import type { Metadata, Viewport } from "next";
import ErrorBoundary from '@/components/ErrorBoundary';
import "./globals.css";

const SITE_URL = "https://prince-osiris.vercel.app";
const SITE_NAME = "奥西里斯";
const SITE_TITLE = "奥西里斯 — 开源全球情报平台 | 实时航班追踪、CCTV、OSINT工具";
const SITE_DESCRIPTION = "开源帕兰提尔替代方案。实时追踪万架以上飞机、两千颗卫星和全球CCTV摄像头。在浏览器中运行Nmap扫描、DNS查询、WHOIS、SSL证书分析与威胁情报。包含地震、野火、核设施、网络威胁和全球冲突等20+实时数据源。免费开源。";

export const viewport: Viewport = {
  themeColor: "#D4AF37",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | 奥西里斯情报",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "OSINT工具", "开源情报", "实时追踪", "航班追踪", "卫星追踪", "CCTV", "地震监控",
    "野火监测", "威胁情报", "网络威胁", "全球情报平台", "帕兰提尔替代",
    "OSINT", "open source intelligence", "flight tracker", "satellite tracking",
  ],
  authors: [{ name: "奥西里斯项目", url: SITE_URL }],
  creator: "奥西里斯项目",
  publisher: "奥西里斯项目",
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
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "奥西里斯 — 开源全球情报平台",
    description: SITE_DESCRIPTION,
    type: "website",
    siteName: SITE_NAME,
    locale: "zh_CN",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "奥西里斯 — 开源情报平台",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "奥西里斯 — 开源全球情报平台",
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
  category: "technology",
  classification: "Intelligence & Security",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "奥西里斯",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#06060C",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "奥西里斯 — 开源情报平台",
  alternateName: ["OSIRIS", "奥西里斯"],
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  applicationCategory: "SecurityApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CNY",
    availability: "https://schema.org/InStock",
  },
  author: {
    "@type": "Organization",
    name: "奥西里斯项目",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ErrorBoundary name="OSIRIS Core">
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
