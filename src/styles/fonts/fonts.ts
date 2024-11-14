import localFont from "next/font/local";
import { Noto_Sans } from "next/font/google";

export const NOTOSANS = Noto_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

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

export const MONEYGRAPHY = localFont({
  src: [
    {
      path: "Moneygraphy-Rounded.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "Moneygraphy-Rounded.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-suit",
});
