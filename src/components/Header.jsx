import { Hotel, Moon, Sun } from "lucide-react";
import { CONFIG } from "../config.js";

export default function Header({ lang, setLang, theme, toggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/8 bg-white/75 backdrop-blur-xl backdrop-saturate-150 dark:border-white/10 dark:bg-[#0a0f1e]/75">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3 px-4 py-2.5 pt-[calc(0.625rem+env(safe-area-inset-top))]">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-amber-400 text-white shadow-md shadow-indigo-500/30">
            <Hotel className="size-4.5" />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-[15px] font-extrabold tracking-tight">
              {CONFIG.hotelName}
            </div>
            <div className="truncate text-[11px] font-medium text-slate-500 dark:text-slate-400">
              {CONFIG.location}
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <select
            aria-label="Language"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="h-9 appearance-none rounded-xl border border-slate-900/10 bg-slate-50 px-2.5 text-[13px] font-bold text-slate-700 outline-none dark:border-white/10 dark:bg-slate-800 dark:text-slate-200"
          >
            <option value="en">EN</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="hi">हिंदी</option>
          </select>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="grid size-9 place-items-center rounded-xl border border-slate-900/10 bg-slate-50 text-slate-700 transition active:scale-90 dark:border-white/10 dark:bg-slate-800 dark:text-amber-300"
          >
            {theme === "dark" ? <Sun className="size-4.5" /> : <Moon className="size-4.5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
