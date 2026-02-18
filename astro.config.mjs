import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [robotsTxt(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://vicentea18ucn.github.io/portfolio/",
});
