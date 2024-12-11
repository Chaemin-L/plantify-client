import type { Metadata } from "next";
import { SUIT } from "@/styles/fonts/fonts";
import Header from "@/app/(_components)/header";
import "@/app/globals.css";
import { TanstackQueryClientProvider } from "@/providers/tanstackProviders";
import "@/styles/swiper.css";
import ToastProvider from "@/providers/toast-providers";

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
    <>
      <TanstackQueryClientProvider>
        <div className="flex justify-center h-full w-full bg-shadow-800">
          <div className="w-[500px] max-w-[500px] min-w-0 bg-shadow-900 text-white h-screen  flex flex-col">
            <Header />
            <main className="w-full px-4 pb-9 flex-1 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </TanstackQueryClientProvider>
      <ToastProvider />
    </>
  );
}
