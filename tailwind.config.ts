import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        "3xl": "1920px",
      },
      colors: {
        accent: {
          purple: "#9974F8",
          green: "#B2F142",
          red: "#FF4C47",
        },
        shadow: {
          50: "#ffffff",
          100: "#e6e6e6",
          200: "#dcdcdc",
          300: "#bbbbbb",
          400: "#a0a0a0",
          500: "#7d7d7d",
          600: "#616161",
          700: "#3c3c3c",
          800: "#1e1e1e",
          900: "#000000",
        },
        lightBg: "#ffffff", // shadow 50
        darkBg: "#000000", // shadow 900
      },
    },
  },
  plugins: [],
} satisfies Config;
