import { redirect } from "next/navigation";
import { normalizeLang } from "../../lib/i18n";

export default function Page({ params }) {
  const lang = normalizeLang(params.lang) || "en";
  redirect(`/${lang}/reels`);
}

