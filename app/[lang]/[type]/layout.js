import Link from "next/link";
import Features from "../../../components/Features";
import Steps from "../../../components/Steps";
import FAQ from "../../../components/FAQ";
import { getCopy, normalizeLang, normalizeType } from "../../../lib/i18n";
import { notFound } from "next/navigation";

export default function Layout({ children, params }) {
  const lang = normalizeLang(params.lang);
  const type = normalizeType(params.type);
  if (!lang || !type) return notFound();

  const copy = getCopy(lang);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";
  const pageUrl = `${siteUrl}/${lang}/${type}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${pageUrl}#organization`,
        name: copy?.ui?.brand || "InstaDownloader",
        url: `${siteUrl}/`,
        logo: { "@type": "ImageObject", url: `${siteUrl}/icon.svg` },
      },
      {
        "@type": "WebSite",
        "@id": `${pageUrl}#website`,
        name: copy?.ui?.brand || "InstaDownloader",
        url: `${siteUrl}/`,
        inLanguage: lang === "hi" ? "hi-IN" : "en-US",
        publisher: { "@id": `${pageUrl}#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name:
          lang === "hi"
            ? "Instagram डाउनलोडर – रील्स, वीडियो, फ़ोटो और कैरोसेल"
            : "Instagram Downloader – Reels, Videos, Photos & Carousel",
        description:
          copy?.ui?.heroDesc ||
          "Free Instagram downloader to download Reels, Videos, Photos and Carousel albums from public links. Preview and download instantly without login.",
        isPartOf: { "@id": `${pageUrl}#website` },
        inLanguage: lang === "hi" ? "hi-IN" : "en-US",
      },
      {
        "@type": ["SoftwareApplication", "WebApplication"],
        "@id": `${pageUrl}#app`,
        name: copy?.ui?.brand || "InstaDownloader",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        url: pageUrl,
        inLanguage: lang === "hi" ? "hi-IN" : "en-US",
        publisher: { "@id": `${pageUrl}#organization` },
        featureList: [
          "Reels downloader",
          "Video downloader",
          "Photo downloader",
          "Carousel album downloader",
          "Preview before download",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        isPartOf: { "@id": `${pageUrl}#website` },
        mainEntity: (copy?.sections?.faq || []).slice(0, 6).map((x) => ({
          "@type": "Question",
          name: x.q,
          acceptedAnswer: { "@type": "Answer", text: x.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: lang, item: `${siteUrl}/${lang}/reels` },
          { "@type": "ListItem", position: 3, name: type, item: pageUrl },
        ],
      },
    ],
  };

  const trustColors = ["from-emerald-500 to-sky-500", "from-violet-500 to-pink-500", "from-amber-500 to-pink-500"];

  const otherLang = lang === "hi" ? "en" : "hi";

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <Link href={`/${lang}/reels`} className="font-extrabold tracking-tight text-slate-900">
            Insta
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-600 via-violet-600 to-sky-600">
              Downloader
            </span>
          </Link>

          <div className="text-sm text-slate-600 hidden sm:block">
            {copy?.ui?.navTypes || "Reels • Videos • Photos • Carousel"}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/${otherLang}/${type}`}
              className="text-xs font-semibold rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50 transition"
              aria-label="Switch language"
            >
              {otherLang === "hi"
                ? (copy?.ui?.langToggle?.hi || "हिं")
                : (copy?.ui?.langToggle?.en || "EN")}
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-slate-50 via-white to-white" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full blur-3xl opacity-25 bg-linear-to-r from-pink-500 via-violet-500 to-sky-500" />

        <div className="relative max-w-6xl mx-auto px-4 py-14 sm:py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-xs">
            {copy?.ui?.taglineTop || "Free • Fast • No login"}
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            {copy?.ui?.heroTitleA || "Instagram"}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-600 via-violet-600 to-sky-600">
              {copy?.ui?.heroTitleB || "Downloader"}
            </span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {copy?.ui?.heroDesc ||
              "Download Instagram Reels, Videos, Photos and Carousel albums in HD quality instantly."}
          </p>

          {children}

          <div className="mt-10 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            {(copy?.ui?.trust || []).slice(0, 3).map((x, idx) => (
              <div key={x.title} className="rounded-3xl p-[1px] bg-linear-to-r border border-transparent shadow-sm">
                <div className="rounded-3xl bg-white p-5 ring-1 ring-slate-100">
                  <div className={`h-1.5 w-14 rounded-full bg-linear-to-r ${trustColors[idx] || trustColors[0]}`} />
                  <div className="mt-3 font-semibold text-slate-900">{x.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{x.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features copy={copy} />
      <Steps copy={copy} />
      <FAQ copy={copy} />

      <footer className="mt-10 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 text-center text-sm text-slate-600">
          <div className="font-semibold text-slate-900">
            {copy?.ui?.footerTitle || "InstaDownloader"}
          </div>
          <div className="mt-2">
            {copy?.ui?.footerDesc ||
              "Download Instagram Reels, Videos, Photos and Carousel — fast, clean, and easy."}
          </div>
          <div className="mt-4 text-xs text-slate-500">
            {copy?.ui?.copyright || "© 2026 InstaDownloader. All rights reserved."}
          </div>
        </div>
      </footer>
    </main>
  );
}
