import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기부사 목록",
  description: "펀딩 진행중인 기부사와 간단 소개를 볼 수 있어요.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
