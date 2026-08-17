import { BellRing } from "lucide-react";
import { CONFIG } from "../config.js";
import { waLink } from "../lib.js";
import { Section } from "./ui.jsx";

export default function Requests({ t }) {
  return (
    <Section icon={<BellRing />} title={t.requests_title}>
      <div className="grid grid-cols-3 gap-2.5">
        {CONFIG.requests.map((r) => {
          const label = t.req[r.key] ?? r.key;
          return (
            <a
              key={r.key}
              href={waLink(`Hi ${CONFIG.hotelName}, ${t.req_intro}: ${label}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 rounded-2xl border border-slate-900/8 bg-white px-2 py-3.5 text-center shadow-sm transition active:scale-95 dark:border-white/10 dark:bg-slate-900/70"
            >
              <span className="text-2xl">{r.icon}</span>
              <span className="text-[11.5px] leading-tight font-bold text-slate-600 dark:text-slate-300">
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
