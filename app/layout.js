import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL("http://localhost:3001");

export const metadata = {
  title: {
    default: "Instagram Downloader – Reels, Videos, Photos & Carousel",
    template: "%s | InstaDownloader",
  },
  description:
    "Free Instagram downloader to download Reels, Videos, Photos and Carousel albums in HD quality without login. Paste a public link, preview, and download instantly.",
  keywords: [
    "instagram downloader",
    "instagram reels downloader",
    "instagram video downloader",
    "instagram photo downloader",
    "instagram carousel downloader",
    "ig downloader",
  ],
  applicationName: "InstaDownloader",
  category: "utility",
  metadataBase: siteUrl,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  creator: "InstaDownloader",
  publisher: "InstaDownloader",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    title: "Instagram Downloader – Reels, Videos, Photos & Carousel",
    description:
      "Download Instagram Reels, Videos, Photos and Carousel albums in HD quality without login. Preview and download in one click.",
    url: "/",
    siteName: "InstaDownloader",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Instagram Downloader – Reels, Videos, Photos & Carousel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Downloader – Reels, Videos, Photos & Carousel",
    description:
      "Free Instagram downloader for public links: preview and download instantly.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || undefined,
    },
  },
};

export const viewport = {
  themeColor: "#0f172a",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="min-h-screen bg-white text-slate-900 antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
