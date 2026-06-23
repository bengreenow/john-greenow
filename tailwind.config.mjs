import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        cream: "#FAF8F5",
        "cream-dark": "#F0EBE3",
        ink: "#2D2926",
        "ink-muted": "#6B635B",
        border: "#E5DFD6",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.ink"),
            h1: { color: theme("colors.ink") },
            h2: { color: theme("colors.ink") },
            h3: { color: theme("colors.ink") },
            h4: { color: theme("colors.ink") },
            a: { color: theme("colors.ink") },
            strong: { color: theme("colors.ink") },
          },
        },
      }),
    },
    fontFamily: {
      serif: ["var(--font-body)", "Georgia", "serif"],
      display: ["var(--font-body)", "Georgia", "serif"],
      sans: ["var(--font-body)", "Georgia", "serif"],
    },
  },
  plugins: [typography, aspectRatio],
};
