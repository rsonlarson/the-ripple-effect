// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind(), react()],
  vite: {
    plugins: [tsconfigPaths()],
  },
});
