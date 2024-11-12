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
      <body
        className={`${SUIT.variable} ${SUIT.className} antialiased bg-[#6D8EEB]`}
      >
        <section className="flex flex-row justify-center gap-[100px] h-full">
          <aside className="max-xl:hidden w-[500px]">Ads</aside>
          <div className="w-[375px] bg-white">{children}</div>
        </section>
      </body>
    </html>
  );
}
