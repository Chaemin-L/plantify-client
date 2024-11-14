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
        className={`${SUIT.variable} ${SUIT.className} antialiased bg-accent-purple w-screen`}
      >
        <section className="flex flex-row justify-center gap-[5%] h-full w-full ">
          <AdBanner />
          <div className="w-[400px] min-w-0 bg-darkBg text-white h-screen  flex flex-col">
            <Header />
            <main className="px-4 pb-9 flex-1 overflow-auto">{children}</main>
          </div>
        </section>
      </body>
    </html>
  );
}
