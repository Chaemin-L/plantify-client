import Header from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantify - 기부",
  description: "펀딩형 기부들이 궁금할 때",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="px-4 pb-9">{children}</main>
    </>
  );
}
