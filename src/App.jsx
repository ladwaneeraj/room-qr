import { useCallback, useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { CONFIG } from "./config.js";
import { I18N } from "./i18n.js";
import { store } from "./lib.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import QuickActions from "./components/QuickActions.jsx";
import WifiCard from "./components/WifiCard.jsx";
import Channels from "./components/Channels.jsx";
import Services from "./components/Services.jsx";
import Requests from "./components/Requests.jsx";
import LocationCard from "./components/LocationCard.jsx";
import Amenities from "./components/Amenities.jsx";
import Reviews from "./components/Reviews.jsx";
import Rules from "./components/Rules.jsx";
import Emergency from "./components/Emergency.jsx";

function initialLang() {
  const saved = store.get("cibara_lang");
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language || "en").slice(0, 2);
  return I18N[nav] ? nav : "en";
}

function initialTheme() {
  const saved = store.get("cibara_theme");
  if (saved) return saved;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [lang, setLangState] = useState(initialLang);
  const [theme, setTheme] = useState(initialTheme);
  const [toastMsg, setToastMsg] = useState(null);
  const toastTimer = useRef(null);

  const t = I18N[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const setLang = (l) => {
    const next = I18N[l] ? l : "en";
    setLangState(next);
    store.set("cibara_lang", next);
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    store.set("cibara_theme", next);
  };

  const toast = useCallback((msg) => {
    setToastMsg(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastMsg(null), 2000);
  }, []);

  return (
    <div className="aurora min-h-dvh">
      <div className="mx-auto max-w-lg">
        <Header lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
        <Hero t={t} />
        <QuickActions t={t} />

        <main className="px-4 pb-10">
          <WifiCard t={t} toast={toast} />
          <Channels t={t} />
          <Services t={t} />
          <Requests t={t} />
          <LocationCard t={t} />
          <Amenities t={t} />
          <Reviews t={t} />
          <Rules t={t} />
          <Emergency t={t} />
        </main>

        <footer className="border-t border-slate-900/8 px-6 pt-6 pb-[calc(2rem+env(safe-area-inset-bottom))] text-center dark:border-white/10">
          <div className="text-[15px] font-extrabold">{CONFIG.hotelName}</div>
          <div className="mt-0.5 text-[12.5px] font-medium text-slate-500 dark:text-slate-400">
            {CONFIG.location}
          </div>
          <div className="mt-3 text-[13px] font-semibold text-slate-500 dark:text-slate-400">
            {t.thanks}
          </div>
        </footer>
      </div>

      {/* Toast */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] left-1/2 z-100 flex -translate-x-1/2 items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-[14px] font-bold text-white shadow-xl shadow-emerald-500/30 transition-all duration-300 ${
          toastMsg
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <Check className="size-4" />
        {toastMsg}
      </div>
    </div>
  );
}
