import Header from "@/app/(_components)/header";
import "@/app/globals.css";
import AuthProvider from "@/providers/auth-provider";
import { TanstackQueryClientProvider } from "@/providers/tanstack-provider";
import ToastProvider from "@/providers/toast-provider";

import "@/styles/swiper.css";
import { Provider } from "jotai";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantify 페이",
  description:
    "Plantify 페이로 결제하고, 최근 기부 펀딩에 참여해봐요. 나의 숨겨진 카드 혜택까지 찾을 수 있어요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TanstackQueryClientProvider>
        <div className="flex justify-center h-full w-full bg-shadow-50">
          <div className="w-[500px] max-w-[500px] min-w-0 bg-shadow-900 text-white h-screen  flex flex-col">
            <Header />
            <main className="w-full px-4 pb-9 flex-1 overflow-auto">
              <Provider>
                <AuthProvider>{children}</AuthProvider>
              </Provider>
            </main>
          </div>
        </div>
      </TanstackQueryClientProvider>
      <ToastProvider />
    </>
  );
}
