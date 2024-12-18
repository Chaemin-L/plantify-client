import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "펀딩 목록",
  description: "카테고리별 펀딩 목록을 구경해봐요",
  keywords: ["plantify", "funding", "donation", "fundraisings", "기부", "펀딩"],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
