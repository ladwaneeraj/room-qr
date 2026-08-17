import { Ambulance, Flame, Hotel, Siren } from "lucide-react";
import { CONFIG } from "../config.js";
import { Section } from "./ui.jsx";

export default function Emergency({ t }) {
  const items = [
    { icon: <Siren />, label: t.emg.police, num: "100" },
    { icon: <Ambulance />, label: t.emg.ambulance, num: "108" },
    { icon: <Flame />, label: t.emg.fire, num: "101" },
    { icon: <Hotel />, label: t.reception, num: CONFIG.phoneMobile },
  ];

  return (
    <Section icon={<Siren />} title={t.emergency_title}>
      <div className="grid grid-cols-2 gap-2.5">
        {items.map((it) => (
          <a
            key={it.label}
            href={`tel:${it.num}`}
            className="flex items-center gap-3 rounded-2xl border border-rose-500/25 bg-rose-500/8 px-3.5 py-3 transition active:scale-95 dark:border-rose-400/25 dark:bg-rose-500/12"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-rose-500 to-red-500 text-white shadow-md shadow-rose-500/25 [&>svg]:size-5">
              {it.icon}
            </span>
            <span className="min-w-0">
              <b className="block text-[13.5px] font-extrabold">{it.label}</b>
              <span className="block truncate font-mono text-[12px] font-semibold text-slate-500 dark:text-slate-400">
                {it.num}
              </span>
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
