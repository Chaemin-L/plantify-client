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
        xs: "420px",
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
      animation: {
        slideUp: "slideUp 0.4s ease-in-out",
        slideDown: "slideDown 0.4s ease-in-out",
      },
      keyframes: {
        slideUp: {
          from: {
            transform: "scaleY(1)",
            transformOrigin: "top center",
          },
          to: {
            transform: "scaleY(0)",
          },
        },
        slideDown: {
          // from: {
          //   transform: "scaleY(0)",
          //   transformOrigin: "top center",
          // },
          // "50%": {
          //   transform: "scaleY(1.1)",
          //   transformOrigin: "top center",
          // },
          // to: {
          //   transform: "scaleY(1)",
          // },
          from: {
            maxHeight: "0px",
            transform: "scaleY(0)",
            transformOrigin: "top center",
          },
          to: {
            maxHeight: "fit-content",
            transform: "scaleY(1)",
            transformOrigin: "top center",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
