import localFont from "next/font/local";

export const SUIT = localFont({
  src: [
    {
      path: "SUIT-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "SUIT-SemiBold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "SUIT-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-suit",
});
