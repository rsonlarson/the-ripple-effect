/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Chewy", "system-ui", "sans-serif"],
        paragraph: ["Raleway", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries"), require("@tailwindcss/typography")],
};