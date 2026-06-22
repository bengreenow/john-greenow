import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.300"),
            h1: { color: theme("colors.gray.300") },
            h2: { color: theme("colors.gray.300") },
            h3: { color: theme("colors.gray.300") },
            h4: { color: theme("colors.gray.300") },
            h5: { color: theme("colors.gray.300") },
            h6: { color: theme("colors.gray.300") },
            code: { color: theme("colors.gray.300") },
            figcaption: { color: theme("colors.gray.500") },
          },
        },
      }),
      animation: { slide: "slide-over 30s linear infinite" },
      keyframes: {
        "slide-over": {
          "0%": { left: "100%", transform: "translate:(0,0)" },
          "100%": { left: "-100%", transform: "translate:(-100%,0)" },
        },
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      display: ["Work Sans", "sans-serif"],
    },
  },
  plugins: [typography, aspectRatio],
};
