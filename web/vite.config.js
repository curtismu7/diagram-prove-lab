import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dev: the API runs on PORT (default 7710, npm run dev -w server) and Vite on VITE_PORT (default 6002); /api is proxied.
const api = { target: `http://127.0.0.1:${Number(process.env.PORT) || 7710}` };

export default defineConfig({
  // Relative base: the built app works from any URL prefix (e.g. behind an ingress at /mock/diagram-prove-lab/).
  base: "./",
  plugins: [react()],
  server: { host: "127.0.0.1", port: Number(process.env.VITE_PORT) || 6002, strictPort: true, proxy: { "/api": api } },
  test: { environment: "jsdom", testTimeout: 20000, globals: true, setupFiles: "./src/testSetup.js" },
});
