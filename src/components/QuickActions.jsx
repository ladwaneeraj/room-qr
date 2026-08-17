import { MessageCircle, Navigation, Phone, Tv, Wifi } from "lucide-react";
import { CONFIG } from "../config.js";
import { waLink } from "../lib.js";

export default function QuickActions({ t }) {
  const items = [
    {
      label: t.call,
      href: `tel:${CONFIG.phoneMobile}`,
      icon: <Phone />,
      cls: "from-indigo-500 to-blue-500",
    },
    {
      label: t.whatsapp,
      href: waLink(`Hi ${CONFIG.hotelName}, `),
      icon: <MessageCircle />,
      cls: "from-emerald-500 to-green-500",
      external: true,
    },
    {
      label: t.directions,
      href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONFIG.mapsQuery)}`,
      icon: <Navigation />,
      cls: "from-rose-500 to-orange-500",
      external: true,
    },
    { label: t.wifi, href: "#wifi", icon: <Wifi />, cls: "from-amber-400 to-yellow-500" },
    { label: t.tv, href: "#channels", icon: <Tv />, cls: "from-violet-500 to-fuchsia-500" },
  ];

  return (
    <nav className="mx-4 mt-4 grid grid-cols-5 gap-2.5">
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="flex flex-col items-center gap-1.5 rounded-2xl border border-slate-900/8 bg-white py-3 shadow-sm transition active:translate-y-0.5 active:scale-95 dark:border-white/10 dark:bg-slate-900/70"
        >
          <span
            className={`grid size-10 place-items-center rounded-xl bg-gradient-to-br text-white shadow-md ${it.cls} [&>svg]:size-5`}
          >
            {it.icon}
          </span>
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
            {it.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
