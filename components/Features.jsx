export default function Features({ copy }){
  const list = (copy?.sections?.features || []).map((x, idx) => ({
    ...x,
    accent:
      [
        "from-pink-500 to-violet-500",
        "from-sky-500 to-violet-500",
        "from-emerald-500 to-sky-500",
        "from-amber-500 to-pink-500",
        "from-slate-700 to-slate-900",
        "from-violet-500 to-sky-500",
      ][idx] || "from-violet-500 to-sky-500",
  }));

  return (
    <section className="py-16 px-4 bg-white">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900">
          {copy?.sections?.featuresTitle || "Powerful Instagram downloader features"}
        </h2>

        <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
          {copy?.sections?.featuresDesc ||
            "A clean, professional UI focused on fast previews and reliable downloads for public Instagram links."}
        </p>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-10">
          {list.map((f)=>(
            <div key={f.title} className="rounded-3xl p-[1px] bg-linear-to-r from-slate-100 to-slate-100">
              <div className="h-full rounded-3xl bg-white p-6 ring-1 ring-slate-100 hover:ring-slate-200 transition">
                <div className={`h-2 w-12 rounded-full bg-linear-to-r ${f.accent}`} />
                <p className="mt-4 font-semibold text-slate-900">{f.title}</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
