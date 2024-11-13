import type { Metadata } from "next";
import "./globals.css";
import { SUIT } from "../styles/fonts/fonts";
import Header from "@/components/header";
import AdBanner from "@/components/ad-banner";

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
        className={`${SUIT.variable} ${SUIT.className} antialiased bg-purple`}
      >
        <section className="flex flex-row justify-center gap-[20%] h-full ">
          <AdBanner />
          <div className="w-[500px]  bg-darkBg text-white h-screen overflow-auto">
            <Header />
            <main className="px-4 pb-9">{children}</main>
          </div>
        </section>
      </body>
    </html>
  );
}
