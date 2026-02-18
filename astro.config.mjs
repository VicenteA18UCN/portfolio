import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/portfolio" : "/",
  integrations: [robotsTxt(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
