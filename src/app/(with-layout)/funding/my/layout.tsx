import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "내 펀딩 목록",
  description: "내가 참여한 펀딩 목록을 확인합니다",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
