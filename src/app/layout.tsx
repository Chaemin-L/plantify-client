import type { Metadata } from "next";
import { MONEYGRAPHY, NOTOSANS, SUIT } from "../styles/fonts/fonts";
import Header from "@/app/(_components)/header";
import AdBanner from "@/app/(_components)/ad-banner";
import "./globals.css";
import { TanstackQueryClientProvider } from "@/providers/tanstackProviders";

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
        // className={`${MONEYGRAPHY.variable} ${MONEYGRAPHY.className} antialiased bg-accent-purple w-screen`}
        // className={`${NOTOSANS.className} antialiased bg-accent-purple w-screen`}
      >
        <TanstackQueryClientProvider>
          {/* <div className="flex flex-row justify-center gap-[5%] h-full w-full "> */}
          <div className="flex flex-row justify-center 2xl:justify-between  2xl:px-[15%] 3xl:px-[20%] h-full w-full">
            <AdBanner />
            <div className="w-[500px] max-w-[500px] min-w-0 bg-darkBg text-white h-screen  flex flex-col">
              <Header />
              <main className="w-full px-4 pb-9 flex-1 overflow-auto">
                {children}
              </main>
            </div>
          </div>
        </TanstackQueryClientProvider>
      </body>
    </html>
  );
}
