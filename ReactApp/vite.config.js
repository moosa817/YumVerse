import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["7cbf-111-88-218-145.ngrok-free.app", "localhost"],
  },
});
