import { defineConfig } from 'astro/config';
import remarkToc from "remark-toc";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    remarkPlugins: [remarkToc],
    extendDefaultPlugins: true
  },
  output: "server",
  adapter: cloudflare()
});