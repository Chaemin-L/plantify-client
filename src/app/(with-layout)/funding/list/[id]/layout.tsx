import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "펀딩 상세",
  description: "펀딩에 대한 자세한 정보를 알아봐요",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
