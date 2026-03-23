export const SUPPORTED_LANGS = ["en", "hi"];
export const SUPPORTED_TYPES = ["reels", "video", "carousel", "photo", "stories"];

export function normalizeLang(lang) {
  return SUPPORTED_LANGS.includes(lang) ? lang : null;
}

export function normalizeType(type) {
  return SUPPORTED_TYPES.includes(type) ? type : null;
}

const en = {
  langName: "English",
  ui: {
    brand: "InstaDownloader",
    taglineTop: "Free • Fast • No login",
    navTypes: "Reels • Videos • Photos • Carousel",
    heroTitleA: "Instagram",
    heroTitleB: "Downloader",
    heroDesc:
      "Download Instagram Reels, Videos, Photos and Carousel albums in HD quality instantly. Paste a public link, preview the media, and download in one click.",
    trust: [
      { title: "High quality", text: "Get clean downloads with preview first." },
      { title: "Secure by design", text: "No account login required for downloads." },
      { title: "Works everywhere", text: "Mobile, tablet and desktop friendly UI." },
    ],
    footerTitle: "InstaDownloader",
    footerDesc:
      "Download Instagram Reels, Videos, Photos and Carousel — fast, clean, and easy.",
    copyright: "© 2026 InstaDownloader. All rights reserved.",
    langToggle: { en: "EN", hi: "हिं" },
  },
  downloader: {
    types: [
      { id: "reels", label: "Reels", helper: "Download Instagram Reels in HD" },
      { id: "video", label: "Video", helper: "Save Instagram Videos instantly" },
      { id: "carousel", label: "Carousel", helper: "Download Carousel albums" },
      { id: "photo", label: "Photo", helper: "Download Instagram Photos" },
      { id: "stories", label: "Stories", helper: "Coming soon" },
    ],
    linkAria: "Instagram link",
    placeholderPrefix: "Paste Instagram",
    publicOnly: "Public links only • No login required",
    supportedHint: "Reels • Videos • Photos • Carousel",
    downloadBtn: "Download",
    loadingBtn: "Loading...",
    comingSoonBtn: "Coming soon",
    storiesBannerTitle: "Stories downloader:",
    storiesBannerText: "Coming soon.",
    loaderText: "Fetching media preview...",
    previewAlt: "Instagram media preview",
    downloadNow: "Download Now",
    errors: {
      empty: "⚠️ Please paste a valid Instagram link.",
      notDownloadable: "⚠️ This content is not downloadable. Try again later.",
      noPreview: "⚠️ Unable to fetch media preview. Please try another link.",
      network: "⚠️ Network error or Instagram blocked the request. Try after some time.",
    },
    detected: {
      album: "Album Detected",
      video: "Video / Reel Detected",
      photo: "Photo Detected",
    },
  },
  sections: {
    featuresTitle: "Powerful Instagram downloader features",
    featuresDesc:
      "A clean, professional UI focused on fast previews and reliable downloads for public Instagram links.",
    features: [
      { title: "Reels downloader", desc: "Download Instagram Reels in HD quality with preview." },
      { title: "Video downloader", desc: "Save Instagram videos instantly without login." },
      { title: "Photo downloader", desc: "Download single photos with clean previews." },
      { title: "Carousel albums", desc: "Detect albums and download multiple files easily." },
      { title: "Fast & lightweight", desc: "Optimized UI that stays responsive on mobile." },
      { title: "Simple workflow", desc: "Paste link → preview → download in one click." },
    ],
    stepsTitle: "How to download from Instagram",
    steps: [
      { title: "Copy the link", text: "Open Instagram and copy the public post or reel link." },
      { title: "Paste & preview", text: "Paste the link above to fetch a quick media preview." },
      { title: "Download", text: "Click download to save the media to your device." },
    ],
    faqTitle: "Frequently asked questions",
    faqDesc: "Quick answers about supported links, privacy and how downloads work.",
    faq: [
      {
        q: "Is this Instagram downloader free?",
        a: "Yes. You can download public Instagram reels, videos, photos and carousel albums for free.",
      },
      { q: "Can I download private posts?", a: "No. Only public Instagram content is supported." },
      {
        q: "Does it work on mobile?",
        a: "Yes. The UI is optimized for Android, iPhone and desktop browsers.",
      },
      {
        q: "Why do I see “Coming soon” for Stories?",
        a: "Stories support is planned and will be added in a future update.",
      },
    ],
  },
};

const hi = {
  langName: "हिंदी",
  ui: {
    brand: "InstaDownloader",
    taglineTop: "मुफ़्त • तेज़ • बिना लॉगिन",
    navTypes: "रील्स • वीडियो • फ़ोटो • कैरोसेल",
    heroTitleA: "Instagram",
    heroTitleB: "डाउनलोडर",
    heroDesc:
      "Instagram रील्स, वीडियो, फ़ोटो और कैरोसेल एल्बम को HD quality में तुरंत डाउनलोड करें। Public link paste करें, media preview देखें और एक क्लिक में डाउनलोड करें।",
    trust: [
      { title: "बेहतर क्वालिटी", text: "डाउनलोड से पहले साफ़ preview देखें।" },
      { title: "सुरक्षित", text: "डाउनलोड के लिए login की जरूरत नहीं।" },
      { title: "हर डिवाइस पर", text: "Mobile, tablet और desktop पर smooth UI।" },
    ],
    footerTitle: "InstaDownloader",
    footerDesc:
      "Instagram रील्स, वीडियो, फ़ोटो और कैरोसेल को तेज़ और आसान तरीके से डाउनलोड करें।",
    copyright: "© 2026 InstaDownloader. All rights reserved.",
    langToggle: { en: "EN", hi: "हिं" },
  },
  downloader: {
    types: [
      { id: "reels", label: "रील्स", helper: "Instagram रील्स को HD में डाउनलोड करें" },
      { id: "video", label: "वीडियो", helper: "Instagram वीडियो तुरंत save करें" },
      { id: "carousel", label: "कैरोसेल", helper: "कैरोसेल एल्बम आसानी से डाउनलोड करें" },
      { id: "photo", label: "फ़ोटो", helper: "Instagram फ़ोटो डाउनलोड करें" },
      { id: "stories", label: "स्टोरीज़", helper: "जल्द आ रहा है" },
    ],
    linkAria: "Instagram लिंक",
    placeholderPrefix: "Instagram",
    publicOnly: "केवल public links • बिना login",
    supportedHint: "रील्स • वीडियो • फ़ोटो • कैरोसेल",
    downloadBtn: "डाउनलोड",
    loadingBtn: "लोड हो रहा है...",
    comingSoonBtn: "जल्द आ रहा है",
    storiesBannerTitle: "स्टोरीज़ डाउनलोडर:",
    storiesBannerText: "जल्द आ रहा है।",
    loaderText: "Media preview लाया जा रहा है...",
    previewAlt: "Instagram media preview",
    downloadNow: "अभी डाउनलोड करें",
    errors: {
      empty: "⚠️ कृपया valid Instagram लिंक paste करें।",
      notDownloadable: "⚠️ यह content डाउनलोड नहीं हो सकता। बाद में try करें।",
      noPreview: "⚠️ Media preview नहीं मिल रहा। कोई दूसरा link try करें।",
      network: "⚠️ Network error या Instagram ने request block कर दी। बाद में try करें।",
    },
    detected: {
      album: "एल्बम मिला",
      video: "वीडियो / रील मिली",
      photo: "फ़ोटो मिली",
    },
  },
  sections: {
    featuresTitle: "Instagram डाउनलोडर की खासियतें",
    featuresDesc:
      "Professional white theme UI — public Instagram links के लिए तेज़ preview और आसान downloads।",
    features: [
      { title: "रील्स डाउनलोडर", desc: "HD quality में preview के साथ रील्स डाउनलोड करें।" },
      { title: "वीडियो डाउनलोडर", desc: "Login के बिना Instagram वीडियो save करें।" },
      { title: "फ़ोटो डाउनलोडर", desc: "Single फ़ोटो clean preview के साथ डाउनलोड करें।" },
      { title: "कैरोसेल एल्बम", desc: "Albums detect करके multiple files आसानी से डाउनलोड करें।" },
      { title: "Fast & lightweight", desc: "Mobile पर भी responsive और fast UI।" },
      { title: "Simple workflow", desc: "Link paste → preview → download (one click)" },
    ],
    stepsTitle: "Instagram से डाउनलोड कैसे करें",
    steps: [
      { title: "Link copy करें", text: "Instagram पर जाकर public post/reel का link copy करें।" },
      { title: "Paste & preview", text: "ऊपर link paste करके media preview देखें।" },
      { title: "डाउनलोड", text: "Download button पर click करके media save करें।" },
    ],
    faqTitle: "अक्सर पूछे जाने वाले सवाल",
    faqDesc: "Supported links, privacy और downloads के बारे में quick answers।",
    faq: [
      { q: "क्या यह free है?", a: "हाँ। आप public रील्स, वीडियो, फ़ोटो और कैरोसेल free में डाउनलोड कर सकते हैं।" },
      { q: "क्या private post डाउनलोड हो सकती है?", a: "नहीं। केवल public Instagram content supported है।" },
      { q: "क्या यह mobile पर चलेगा?", a: "हाँ। Android, iPhone और desktop browsers पर काम करता है।" },
      { q: "Stories पर “जल्द आ रहा है” क्यों आता है?", a: "Stories support future update में add होगा।" },
    ],
  },
};

export function getCopy(lang) {
  return lang === "hi" ? hi : en;
}
