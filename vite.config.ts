import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Add the nitro configuration block below to target your host
  nitro: {
    preset: "netlify", // 👈 Change to "vercel" if using Vercel instead!
  },
});
