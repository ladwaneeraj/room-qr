import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Copy, Lock, QrCode, Wifi, X } from "lucide-react";
import { CONFIG } from "../config.js";
import { copyText, wifiPayload } from "../lib.js";
import { Section } from "./ui.jsx";

export default function WifiCard({ t, toast }) {
  const [showQr, setShowQr] = useState(false);

  const copy = async () => {
    await copyText(CONFIG.wifi.password);
    toast(t.copied);
  };

  return (
    <Section id="wifi" icon={<Wifi />} title={t.wifi_title}>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 p-5 text-white shadow-xl shadow-indigo-600/30">
        {/* decorative glow */}
        <div className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full bg-white/15 blur-2xl" />

        <h3 className="flex items-center gap-2 text-[15px] font-extrabold">
          <Lock className="size-4" /> {t.wifi_heading}
        </h3>

        <div className="mt-4 rounded-2xl border border-white/20 bg-white/12 px-4 py-3 backdrop-blur-sm">
          <div className="text-[11px] font-bold tracking-[0.1em] uppercase opacity-80">
            {t.network}
          </div>
          <div className="font-mono text-[17px] font-bold break-all">
            {CONFIG.wifi.ssid}
          </div>
        </div>

        <div className="mt-2.5 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/12 px-4 py-3 backdrop-blur-sm">
          <button type="button" onClick={copy} className="min-w-0 flex-1 text-left">
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase opacity-80">
              {t.password}
            </div>
            <div className="font-mono text-[17px] font-bold break-all">
              {CONFIG.wifi.password}
            </div>
          </button>
          <button
            type="button"
            onClick={copy}
            className="flex shrink-0 items-center gap-1.5 rounded-xl bg-white px-3.5 py-2.5 text-[13px] font-extrabold text-indigo-600 shadow-sm transition active:scale-95"
          >
            <Copy className="size-3.5" /> {t.copy}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setShowQr((s) => !s)}
          className="mt-3.5 flex w-full items-center justify-center gap-2 rounded-xl bg-white/20 py-3 text-[14px] font-extrabold backdrop-blur-sm transition active:scale-[0.98]"
        >
          {showQr ? <X className="size-4" /> : <QrCode className="size-4" />}
          {showQr ? t.hide_qr : t.show_qr}
        </button>

        {showQr && (
          <div className="mt-3.5 flex flex-col items-center gap-2.5 rounded-2xl bg-white p-5">
            <QRCodeSVG value={wifiPayload()} size={180} marginSize={1} level="M" />
            <p className="max-w-60 text-center text-[12px] font-medium text-slate-500">
              {t.qr_hint}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
