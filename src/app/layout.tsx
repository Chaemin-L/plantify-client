import type { Metadata } from "next";
import "./globals.css";
import { SUIT } from "../styles/fonts/fonts";

export const metadata: Metadata = {
  title: "Plantify",
  description: "나만의 숲 꾸미기",
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
