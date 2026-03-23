const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";

const langs = ["en", "hi"];
const types = ["reels", "video", "carousel", "photo"];

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...langs.flatMap((lang) =>
      types.map((type) => ({
        url: `${siteUrl}/${lang}/${type}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.9,
      }))
    ),
  ];
}
