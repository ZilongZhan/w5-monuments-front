/// <reference types="vitest" />
import { defineConfig } from "vite";
import { dirname, resolve } from "path";

const __dirname = dirname(__filename);

export default defineConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    reporters: ["verbose"],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        form: resolve(__dirname, "form.html"),
      },
    },
    target: "ESNext",
  },
});
