import { useEffect, useRef, useState } from "react";

/** Card surface used across the app */
export function Card({ className = "", children }) {
  return (
    <div
      className={
        "rounded-3xl border border-slate-900/8 bg-white shadow-[0_1px_2px_rgb(15_23_42/0.04),0_8px_28px_rgb(15_23_42/0.06)] " +
        "dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_1px_2px_rgb(0_0_0/0.4),0_12px_36px_rgb(0_0_0/0.45)] " +
        className
      }
    >
      {children}
    </div>
  );
}

/** Section wrapper with an uppercase kicker title */
export function Section({ id, icon, title, sub, children }) {
  return (
    <Reveal>
      <section id={id} className="mt-8 scroll-mt-20">
        <div className="mb-3 flex items-center gap-2 px-1">
          <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-sm [&>svg]:size-4">
            {icon}
          </span>
          <div className="min-w-0">
            <h2 className="text-[13px] font-extrabold tracking-[0.12em] uppercase text-slate-500 dark:text-slate-400">
              {title}
            </h2>
            {sub && (
              <p className="text-[11px] text-slate-400 dark:text-slate-500">{sub}</p>
            )}
          </div>
          <span className="ml-1 h-px flex-1 bg-slate-900/8 dark:bg-white/10" />
        </div>
        {children}
      </section>
    </Reveal>
  );
}

/** Fade-up on first scroll into view */
export function Reveal({ children }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${inView ? "in" : ""}`}>
      {children}
    </div>
  );
}

/** Small pill chip (filters) */
export function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "shrink-0 rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition active:scale-95 " +
        (active
          ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-500/25"
          : "border border-slate-900/10 bg-white text-slate-600 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-300")
      }
    >
      {children}
    </button>
  );
}
