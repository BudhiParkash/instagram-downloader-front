export default function FAQ({ copy }){
  const items = copy?.sections?.faq || [
    {
      q: "Is this Instagram downloader free?",
      a: "Yes. You can download public Instagram reels, videos, photos and carousel albums for free.",
    },
    { q: "Can I download private posts?", a: "No. Only public Instagram content is supported." },
    { q: "Does it work on mobile?", a: "Yes. The UI is optimized for Android, iPhone and desktop browsers." },
    { q: "Why do I see “Coming soon” for Stories?", a: "Stories support is planned and will be added in a future update." },
  ];

  return (
    <section className="py-16 px-4 bg-white">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900">
          {copy?.sections?.faqTitle || "Frequently asked questions"}
        </h2>

        <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
          {copy?.sections?.faqDesc ||
            "Quick answers about supported links, privacy and how downloads work."}
        </p>

        <div className="max-w-3xl mx-auto mt-10 space-y-3">
          {items.map((x, idx) => (
            <details
              key={x.q}
              className="group rounded-3xl bg-white ring-1 ring-slate-100 shadow-sm px-5 py-4"
              open={idx === 0}
            >
              <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-start justify-between gap-3">
                <span className="leading-snug">{x.q}</span>
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white text-sm transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{x.a}</p>
            </details>
          ))}
        </div>
      </div>

    </section>
  );
}
