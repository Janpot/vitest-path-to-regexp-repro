import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  test: {
    include: ["**/*.test.tsx"],
    setupFiles: [],
    browser: {
      enabled: true,
      name: "chromium",
      provider: "playwright",
      headless: false,
      viewport: {
        width: 1024,
        height: 896,
      },
    },
  },
});
