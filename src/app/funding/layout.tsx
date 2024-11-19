import Header from "@/app/(_components)/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantify - 기부",
  description: "여러 펀딩형 기부들이 궁금할 때",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
