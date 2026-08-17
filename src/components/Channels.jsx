import { useMemo, useState } from "react";
import {
  Baby,
  ChevronDown,
  Clapperboard,
  HandHeart,
  Lightbulb,
  Music,
  Newspaper,
  Search,
  Sparkles,
  Trophy,
  Tv,
} from "lucide-react";
import { CHANNELS, CHANNEL_LANGS, GENRES } from "../data/channels.js";
import { Card, Chip, Section } from "./ui.jsx";

const GENRE_ICONS = {
  entertainment: <Sparkles />,
  movies: <Clapperboard />,
  news: <Newspaper />,
  sports: <Trophy />,
  music: <Music />,
  devotional: <HandHeart />,
  kids: <Baby />,
  knowledge: <Lightbulb />,
};

const LANG_LABEL = Object.fromEntries(CHANNEL_LANGS.map((l) => [l.code, l.label]));
const PREVIEW_COUNT = 6;

function ChannelTile({ ch }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-900/8 bg-white px-3 py-2.5 shadow-sm dark:border-white/10 dark:bg-slate-900/70">
      <span className="grid h-9 min-w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 px-1.5 font-mono text-[14px] font-extrabold text-white shadow-sm">
        {ch.no}
      </span>
      <div className="min-w-0">
        <div className="text-[13px] leading-tight font-bold">{ch.name}</div>
        <div className="text-[10.5px] font-semibold text-slate-400 dark:text-slate-500">
          {LANG_LABEL[ch.lang] ?? ch.lang}
        </div>
      </div>
    </div>
  );
}

export default function Channels({ t }) {
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState("all");
  const [expanded, setExpanded] = useState({});

  const q = query.trim().toLowerCase();

  const filtered = useMemo(
    () =>
      CHANNELS.filter(
        (ch) =>
          (lang === "all" || ch.lang === lang) &&
          (!q || ch.name.toLowerCase().includes(q) || String(ch.no).includes(q))
      ),
    [q, lang]
  );

  // Only offer language chips that actually have channels
  const langChips = useMemo(
    () =>
      CHANNEL_LANGS.filter(
        (l) => l.code === "all" || CHANNELS.some((ch) => ch.lang === l.code)
      ),
    []
  );

  const searching = q.length > 0;

  return (
    <Section id="channels" icon={<Tv />} title={t.channels_title} sub={t.channels_sub}>
      <Card className="p-4">
        {/* Search */}
        <div className="flex items-center gap-2.5 rounded-2xl border border-slate-900/10 bg-slate-50 px-3.5 py-2.5 focus-within:border-indigo-400 dark:border-white/10 dark:bg-slate-800/80">
          <Search className="size-4 shrink-0 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.channels_search}
            className="w-full bg-transparent text-[14px] font-medium outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Language filter */}
        <div className="scrollbar-none -mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1">
          {langChips.map((l) => (
            <Chip key={l.code} active={lang === l.code} onClick={() => setLang(l.code)}>
              {l.label}
            </Chip>
          ))}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <p className="py-8 text-center text-[13px] font-medium text-slate-400">
            {t.channels_none}
          </p>
        ) : searching ? (
          <div className="mt-3.5 grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
            {filtered.map((ch) => (
              <ChannelTile key={ch.no} ch={ch} />
            ))}
          </div>
        ) : (
          GENRES.map((genre) => {
            const list = filtered.filter((ch) => ch.genre === genre);
            if (list.length === 0) return null;
            const isOpen = !!expanded[genre];
            const visible = isOpen ? list : list.slice(0, PREVIEW_COUNT);
            const hidden = list.length - visible.length;
            return (
              <div key={genre} className="mt-4 first:mt-3.5">
                <div className="mb-2 flex items-center gap-2 px-1">
                  <span className="text-indigo-500 dark:text-indigo-400 [&>svg]:size-4">
                    {GENRE_ICONS[genre]}
                  </span>
                  <h3 className="text-[12.5px] font-extrabold tracking-wide uppercase text-slate-600 dark:text-slate-300">
                    {t.genre[genre]}
                  </h3>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10.5px] font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    {list.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
                  {visible.map((ch) => (
                    <ChannelTile key={ch.no} ch={ch} />
                  ))}
                </div>
                {(hidden > 0 || isOpen) && (
                  <button
                    type="button"
                    onClick={() => setExpanded((e) => ({ ...e, [genre]: !isOpen }))}
                    className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl border border-dashed border-slate-900/15 py-2 text-[12.5px] font-bold text-indigo-600 transition active:scale-[0.98] dark:border-white/15 dark:text-indigo-400"
                  >
                    <ChevronDown
                      className={`size-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                    {isOpen ? t.show_less : `${t.show_all} (+${hidden})`}
                  </button>
                )}
              </div>
            );
          })
        )}

        <p className="mt-4 border-t border-slate-900/8 pt-3 text-center text-[11px] leading-relaxed font-medium text-slate-400 dark:border-white/10 dark:text-slate-500">
          {t.channels_note}
        </p>
      </Card>
    </Section>
  );
}
