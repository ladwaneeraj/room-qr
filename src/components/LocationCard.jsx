import { MapPin, Navigation } from "lucide-react";
import { CONFIG } from "../config.js";
import { Card, Section } from "./ui.jsx";

export default function LocationCard({ t }) {
  const mapQ = encodeURIComponent(CONFIG.mapsQuery);
  const dir = `https://www.google.com/maps/dir/?api=1&destination=${mapQ}`;

  return (
    <Section icon={<MapPin />} title={t.location_title}>
      <Card className="overflow-hidden">
        <iframe
          title="Map"
          src={`https://www.google.com/maps?q=${mapQ}&output=embed`}
          className="block h-52 w-full border-0 bg-slate-100 dark:bg-slate-800"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex items-center gap-3 px-4 py-3.5">
          <div className="min-w-0 flex-1 text-[13px] font-medium text-slate-500 dark:text-slate-400">
            {CONFIG.location}
          </div>
          <a
            href={dir}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2.5 text-[13px] font-extrabold text-white shadow-md shadow-indigo-500/25 transition active:scale-95"
          >
            <Navigation className="size-3.5" /> {t.get_directions}
          </a>
        </div>
      </Card>

      <div className="mt-2.5 grid grid-cols-4 gap-2">
        {CONFIG.nearby.map((p) => (
          <a
            key={p.name}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.query)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-slate-900/8 bg-white px-1.5 py-3 text-center shadow-sm transition active:scale-95 dark:border-white/10 dark:bg-slate-900/70"
          >
            <div className="text-xl">{p.icon}</div>
            <div className="mt-1 text-[10.5px] leading-tight font-bold text-slate-500 dark:text-slate-400">
              {p.name}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
