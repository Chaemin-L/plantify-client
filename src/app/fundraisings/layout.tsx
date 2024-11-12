import type { Metadata } from "next";
import BottomNavigation from "@/components/bottom-navigation";

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
      {children}
      <BottomNavigation />
    </>
  );
}
