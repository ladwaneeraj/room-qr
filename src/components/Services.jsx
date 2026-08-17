import { Brush, ChevronRight, Luggage, Map, UtensilsCrossed, Zap } from "lucide-react";
import { CONFIG } from "../config.js";
import { waLink } from "../lib.js";
import { Card, Section } from "./ui.jsx";

export default function Services({ t }) {
  const tel = `tel:${CONFIG.phoneMobile}`;
  const items = [
    {
      icon: <UtensilsCrossed />,
      title: t.svc_room,
      desc: t.svc_room_d,
      href: tel,
      cls: "from-orange-400 to-rose-500",
    },
    {
      icon: <Brush />,
      title: t.svc_house,
      desc: t.svc_house_d,
      href: tel,
      cls: "from-sky-400 to-indigo-500",
    },
    {
      icon: <Luggage />,
      title: t.svc_checkout,
      desc: `${t.svc_checkout_d} ${CONFIG.checkoutTime}`,
      href: tel,
      cls: "from-violet-400 to-purple-500",
    },
    {
      icon: <Map />,
      title: t.svc_guide,
      desc: t.svc_guide_d,
      href: waLink(`Hi ${CONFIG.hotelName}, `),
      external: true,
      cls: "from-emerald-400 to-teal-500",
    },
  ];

  return (
    <Section icon={<Zap />} title={t.services_title}>
      <Card>
        {items.map((it, i) => (
          <a
            key={it.title}
            href={it.href}
            {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`flex items-center gap-3.5 px-4 py-3.5 transition active:bg-slate-50 dark:active:bg-slate-800/60 ${
              i > 0 ? "border-t border-slate-900/6 dark:border-white/8" : ""
            }`}
          >
            <span
              className={`grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-md ${it.cls} [&>svg]:size-5`}
            >
              {it.icon}
            </span>
            <span className="min-w-0 flex-1">
              <b className="block text-[14.5px] font-extrabold">{it.title}</b>
              <span className="block truncate text-[12.5px] font-medium text-slate-500 dark:text-slate-400">
                {it.desc}
              </span>
            </span>
            <ChevronRight className="size-4.5 shrink-0 text-slate-300 dark:text-slate-600" />
          </a>
        ))}
      </Card>
    </Section>
  );
}
