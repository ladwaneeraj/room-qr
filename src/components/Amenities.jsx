import { BedDouble } from "lucide-react";
import { Section } from "./ui.jsx";

const AMENITIES = [
  { key: "ac", icon: "❄️" },
  { key: "hotwater", icon: "🚿" },
  { key: "tv", icon: "📺" },
  { key: "wifi", icon: "📶" },
  { key: "toiletries", icon: "🧴" },
  { key: "tea", icon: "☕" },
  { key: "parking", icon: "🅿️" },
  { key: "laundry", icon: "🧺" },
];

export default function Amenities({ t }) {
  return (
    <Section icon={<BedDouble />} title={t.amenities_title}>
      <div className="grid grid-cols-4 gap-2.5">
        {AMENITIES.map((a) => (
          <div
            key={a.key}
            className="rounded-2xl border border-slate-900/8 bg-white px-1.5 py-3.5 text-center shadow-sm dark:border-white/10 dark:bg-slate-900/70"
          >
            <div className="text-xl">{a.icon}</div>
            <div className="mt-1.5 text-[10.5px] leading-tight font-bold text-slate-500 dark:text-slate-400">
              {t.amenity[a.key]}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
