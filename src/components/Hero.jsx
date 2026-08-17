import { MapPin, Star } from "lucide-react";
import { CONFIG } from "../config.js";

export default function Hero({ t }) {
  return (
    <div className="relative mx-4 mt-4 overflow-hidden rounded-3xl shadow-[0_16px_48px_rgb(15_23_42/0.18)] dark:shadow-[0_20px_60px_rgb(0_0_0/0.6)]">
      <img
        src={CONFIG.roomImage}
        alt={`Room at ${CONFIG.hotelName}`}
        className="h-60 w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

      <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[13px] font-bold text-white backdrop-blur-md">
        <Star className="size-3.5 fill-amber-300 text-amber-300" />
        {CONFIG.rating}
      </div>

      <div className="absolute right-5 bottom-4 left-5 text-white">
        <div className="text-[11px] font-bold tracking-[0.18em] uppercase opacity-85">
          {t.welcome}
        </div>
        <h1 className="mt-0.5 text-[1.75rem] leading-tight font-extrabold tracking-tight drop-shadow-lg">
          {CONFIG.hotelName}
        </h1>
        <div className="mt-1 flex items-center gap-1.5 text-[13px] font-medium opacity-95">
          <MapPin className="size-3.5" />
          {CONFIG.location}
        </div>
      </div>
    </div>
  );
}
