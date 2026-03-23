"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DownloaderBox({ lang = "en", type = "reels", copy }){

  const router = useRouter();

  const [link,setLink] = useState("");
  const [loading,setLoading] = useState(false);
  const [media,setMedia] = useState(null);
  const [error,setError] = useState("");
  const activeType = type;

  const mediaTypes = copy?.downloader?.types || [
    { id: "reels", label: "Reels", helper: "Download Instagram Reels in HD" },
    { id: "video", label: "Video", helper: "Save Instagram Videos instantly" },
    { id: "carousel", label: "Carousel", helper: "Download Carousel albums" },
    { id: "photo", label: "Photo", helper: "Download Instagram Photos" },
    { id: "stories", label: "Stories", helper: "Coming soon" },
  ];

  const currentType = mediaTypes.find((t) => t.id === activeType) || mediaTypes[0];

  const getMediaInfo = (media) => {

  if(!media || media.length === 0) return null;

  if(media.length > 1){
    return {
      icon: "📚",
      label: copy?.downloader?.detected?.album || "Album Detected",
      count: media.length
    };
  }

  if(media[0].type === "video"){
    return {
      icon: "🎬",
      label: copy?.downloader?.detected?.video || "Video / Reel Detected",
      count: 1
    };
  }

  return {
    icon: "🖼",
    label: copy?.downloader?.detected?.photo || "Photo Detected",
    count: 1
  };
};

  const preview = async () => {

    if(!link){
      setError(copy?.downloader?.errors?.empty || "⚠️ Please paste a valid Instagram link.");
      return;
    }

    setLoading(true);
    setMedia(null);
    setError("");

    try {

      const res = await fetch(
        "http://16.16.169.131/api/preview?url=" +
        encodeURIComponent(link)
      );

      const data = await res.json();

      if(!data || data.status !== "success"){
        setError(
          data?.message ||
          (copy?.downloader?.errors?.notDownloadable ||
            "⚠️ This content is not downloadable. Try again later.")
        );
      }
      else if(!data.media || data.media.length === 0){
        setError(
          copy?.downloader?.errors?.noPreview ||
            "⚠️ Unable to fetch media preview. Please try another link."
        );
      }
      else{
        setMedia(data.media);
      }

    } catch (e) {
      setError(
        copy?.downloader?.errors?.network ||
          "⚠️ Network error or Instagram blocked the request. Try after some time."
      );
    }

    setLoading(false);
  };

  const download = () => {
    window.location.href =
      "http://16.16.169.131/api/download?url=" +
      encodeURIComponent(link);
  };

  return (
    <div className="mt-10 text-center">

      {/* TYPE SELECTOR */}
      <div className="max-w-xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {mediaTypes.map((t) => {
            const active = t.id === activeType;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setError("");
                  router.push(`/${lang}/${t.id}`, { scroll: false });
                }}
                aria-pressed={active}
                className={[
                  "px-4 py-2 rounded-full text-sm font-semibold transition",
                  "border shadow-xs",
                  active
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <p className="mt-3 text-sm text-slate-600">
          <span className="font-semibold text-slate-800">{currentType.label}:</span>{" "}
          {currentType.helper}
        </p>

        {activeType === "stories" && (
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-800 text-sm">
            <span className="font-semibold">
              {copy?.downloader?.storiesBannerTitle || "Stories downloader:"}
            </span>{" "}
            {copy?.downloader?.storiesBannerText || "Coming soon."}
          </div>
        )}
      </div>

      {/* INPUT */}
      <div className="mt-6 max-w-xl mx-auto rounded-3xl p-[1px] bg-linear-to-r from-pink-500 via-violet-500 to-sky-500 shadow-lg">
        <div className="bg-white rounded-3xl p-3">
          <div className="flex items-stretch gap-2">
            <input
              value={link}
              onChange={e=>{
                setLink(e.target.value);
                setError("");
              }}
              aria-label={copy?.downloader?.linkAria || "Instagram link"}
              placeholder={`${copy?.downloader?.placeholderPrefix || "Paste Instagram"} ${currentType.label} link...`}
              className="flex-1 px-4 py-3 outline-none rounded-2xl bg-slate-50 focus:bg-white ring-1 ring-slate-200 focus:ring-2 focus:ring-violet-400 transition"
            />

            <button
              disabled={loading || activeType === "stories"}
              onClick={preview}
              className="px-6 rounded-2xl font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {activeType === "stories"
                ? (copy?.downloader?.comingSoonBtn || "Coming soon")
                : loading
                  ? (copy?.downloader?.loadingBtn || "Loading...")
                  : (copy?.downloader?.downloadBtn || "Download")}
            </button>
          </div>

          <div className="mt-2 flex items-center justify-between text-xs text-slate-500 px-1">
            <span>{copy?.downloader?.publicOnly || "Public links only • No login required"}</span>
            <span className="hidden sm:inline">{copy?.downloader?.supportedHint || "Reels • Videos • Photos • Carousel"}</span>
          </div>
        </div>
      </div>
      {media && media.length > 0 && (
  <div className="mt-6 max-w-xl mx-auto bg-sky-50 border border-sky-200 text-sky-800 p-3 rounded-2xl font-semibold">

    {(() => {
      const info = getMediaInfo(media);
      if(!info) return null;

      return (
        <div>
          {info.icon} {info.label} • {info.count} File{info.count > 1 ? "s" : ""}
        </div>
      );
    })()}

  </div>
)}

      {/* LOADER TEXT */}
      {loading && (
        <div className="mt-6 text-violet-600 font-semibold animate-pulse">
          {copy?.downloader?.loaderText || "Fetching media preview..."}
        </div>
      )}

      {/* ERROR BOX */}
      {error && (
        <div className="mt-6 bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl max-w-xl mx-auto">
          {error}
        </div>
      )}

      {/* PREVIEW GRID */}
      {media && media.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-4 max-w-xl mx-auto">

          {media.map((m,i)=>(
            <div key={i} className="bg-white p-2 rounded-2xl shadow-sm ring-1 ring-slate-100">

              {m.type === "video" ? (
                <video
                  src={m.url}
                  controls
                  preload="metadata"
                  playsInline
                  className="rounded-xl w-full"
                />
              ) : (
                <img
                  src={`http://16.16.169.131/api/image-proxy?url=${encodeURIComponent(m.url)}`}
                  alt={copy?.downloader?.previewAlt || "Instagram media preview"}
                  loading="lazy"
                  decoding="async"
                  className="rounded-xl w-full"
                />
              )}

            </div>
          ))}

          <button
            onClick={download}
            className="col-span-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-2xl mt-3 font-semibold shadow-sm"
          >
            {copy?.downloader?.downloadNow || "Download Now"}
          </button>

        </div>
      )}

    </div>
  );
}
