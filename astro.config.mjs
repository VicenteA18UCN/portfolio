import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://vicentea18ucn.github.io/portfolio/",
  integrations: [robotsTxt(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
