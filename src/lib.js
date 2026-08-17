import { CONFIG } from "./config.js";

/** WhatsApp deep link with a pre-filled message */
export function waLink(text) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** WIFI: QR payload (WPA/WEP/nopass), with special chars escaped */
export function wifiPayload() {
  const esc = (s) => String(s).replace(/([\\;,:"])/g, "\\$1");
  const w = CONFIG.wifi;
  return (
    `WIFI:T:${w.encryption || "WPA"};S:${esc(w.ssid)};` +
    `P:${w.encryption === "nopass" ? "" : esc(w.password)};` +
    `${w.hidden ? "H:true;" : ""};`
  );
}

/** localStorage that never throws (private mode etc.) */
export const store = {
  get(k, d = null) {
    try {
      return localStorage.getItem(k) ?? d;
    } catch {
      return d;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem(k, v);
    } catch {
      /* ignore */
    }
  },
};

/** Copy text to the clipboard with a legacy fallback */
export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
    } catch {
      /* ignore */
    }
    document.body.removeChild(ta);
  }
}
