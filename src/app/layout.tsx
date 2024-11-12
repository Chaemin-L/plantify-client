import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const SUIT = localFont({
  src: [
    {
      path: "./fonts/SUIT-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SUIT-SemiBold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./fonts/SUIT-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-suit",
});

export const metadata: Metadata = {
  title: "Plantify",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${SUIT.variable} ${SUIT.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
