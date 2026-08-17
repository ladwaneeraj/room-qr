import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base: "./" makes the build work on GitHub Pages (project pages like
// https://<user>.github.io/room-qr/) as well as any other static host.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
