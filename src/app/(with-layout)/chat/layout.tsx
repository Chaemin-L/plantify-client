import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 채팅",
  description:
    "펀딩 관련한 모르는 정보들에게 대해 도움을 받을 수 있는 AI 채팅입니다. 나에게 맞는 추천 펀딩도 받아보세요!",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
