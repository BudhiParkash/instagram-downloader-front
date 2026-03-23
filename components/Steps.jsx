export default function Steps({ copy }){
  const steps = (copy?.sections?.steps || []).map((x, idx) => ({
    ...x,
    accent:
      ["from-pink-500 to-violet-500", "from-violet-500 to-sky-500", "from-emerald-500 to-sky-500"][idx] ||
      "from-violet-500 to-sky-500",
  }));

  return (
    <section className="py-16 px-4 bg-slate-50">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900">
          {copy?.sections?.stepsTitle || "How to download from Instagram"}
        </h2>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-10">

          {steps.map((s,i)=>(
            <div
              key={s.title}
              className="bg-white p-6 rounded-3xl shadow-sm ring-1 ring-slate-100"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-700">Step {i+1}</div>
                <div className={`h-2 w-16 rounded-full bg-linear-to-r ${s.accent}`} />
              </div>
              <div className="mt-4 text-lg font-semibold text-slate-900">{s.title}</div>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
