import { defineConfig } from "astro/config";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:5500",
  base: "/dist",
  integrations: [vue()],
});
