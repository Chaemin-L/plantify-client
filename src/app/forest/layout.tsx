import Header from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantify - 숲",
  description: "기부가 모여 이룬 나의 숲",
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
