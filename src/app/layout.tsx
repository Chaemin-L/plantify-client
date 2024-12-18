import { TanstackQueryClientProvider } from "@/providers/tanstack-provider";
import "@/styles/swiper.css";
import { Provider } from "jotai";
import { SPOQA_HAN_SANS_NEO } from "../styles/fonts/fonts";
import "./globals.css";

export const metadata = {
  title: "Plantify 인트로",
  description: "선순환을 그리는 페이, Plantify에 오신것을 환영합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="ko">
        <body
          className={`${SPOQA_HAN_SANS_NEO.variable} ${SPOQA_HAN_SANS_NEO.className} antialiased bg-shadow-800 w-screen`}
        >
          <div className="flex justify-center h-full w-full ">
            <div className="w-[500px] max-w-[500px] min-w-0 bg-darkBg text-white">
              <TanstackQueryClientProvider>
                <Provider>{children}</Provider>
              </TanstackQueryClientProvider>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
