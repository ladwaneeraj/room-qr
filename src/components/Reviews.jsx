import { PenLine, Star } from "lucide-react";
import { CONFIG } from "../config.js";
import { Card, Section } from "./ui.jsx";

export default function Reviews({ t }) {
  return (
    <Section icon={<Star />} title={t.reviews_title}>
      <Card className="p-6 text-center">
        <div className="flex justify-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <div className="mt-2.5 text-[16px] font-extrabold">
          {t.rated} {CONFIG.rating} {t.on_google}
        </div>
        <p className="mt-1 text-[13px] font-medium text-slate-500 dark:text-slate-400">
          {t.reviews_sub}
        </p>
        <a
          href={CONFIG.reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-xl border-2 border-indigo-500 px-5 py-2.5 text-[14px] font-extrabold text-indigo-600 transition active:scale-95 dark:border-indigo-400 dark:text-indigo-400"
        >
          <PenLine className="size-4" /> {t.read_reviews}
        </a>
      </Card>
    </Section>
  );
}
