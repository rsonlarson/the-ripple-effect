// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  output: "static",
  integrations: [tailwind(), react()],
  vite: {
    plugins: [tsconfigPaths()],
  },
});
