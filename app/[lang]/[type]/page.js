import DownloaderBox from "../../../components/DownloaderBox";
import { getCopy, normalizeLang, normalizeType } from "../../../lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [
    { lang: "en", type: "reels" },
    { lang: "en", type: "video" },
    { lang: "en", type: "carousel" },
    { lang: "en", type: "photo" },
    { lang: "en", type: "stories" },
    { lang: "hi", type: "reels" },
    { lang: "hi", type: "video" },
    { lang: "hi", type: "carousel" },
    { lang: "hi", type: "photo" },
    { lang: "hi", type: "stories" },
  ];
}

export function generateMetadata({ params }) {
  const lang = normalizeLang(params.lang);
  const type = normalizeType(params.type);
  if (!lang || !type) return {};

  const copy = getCopy(lang);
  const typeLabel =
    (copy?.downloader?.types || []).find((t) => t.id === type)?.label || type;

  const title =
    lang === "hi" ? `Instagram ${typeLabel} डाउनलोडर` : `Instagram ${typeLabel} Downloader`;

  const description =
    lang === "hi"
      ? "Public Instagram links से रील्स, वीडियो, फ़ोटो और कैरोसेल albums को preview करके डाउनलोड करें — बिना login।"
      : "Download Reels, Videos, Photos and Carousel albums from public Instagram links — preview first, then download without login.";

  const canonical = `/${lang}/${type}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `/en/${type}`,
        hi: `/hi/${type}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function Page({ params }) {
  const lang = normalizeLang(params.lang);
  const type = normalizeType(params.type);
  if (!lang || !type) return notFound();

  const copy = getCopy(lang);
  return <DownloaderBox lang={lang} type={type} copy={copy} />;
}
