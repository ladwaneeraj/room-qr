import { ClipboardList } from "lucide-react";
import { Card, Section } from "./ui.jsx";

const RULE_ICONS = ["🪪", "🚭", "🌙", "👥", "🔑"];

export default function Rules({ t }) {
  return (
    <Section icon={<ClipboardList />} title={t.rules_title}>
      <Card>
        <ul>
          {t.rules.map((rule, i) => (
            <li
              key={rule}
              className={`flex items-center gap-3 px-4 py-3.5 text-[13.5px] font-medium ${
                i > 0 ? "border-t border-slate-900/6 dark:border-white/8" : ""
              }`}
            >
              <span className="w-7 shrink-0 text-center text-lg">
                {RULE_ICONS[i] ?? "•"}
              </span>
              {rule}
            </li>
          ))}
        </ul>
      </Card>
    </Section>
  );
}
