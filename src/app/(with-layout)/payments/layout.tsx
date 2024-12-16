import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantify - 이용내역",
  description: "Plantify 페이의 이용내역을 확인해요",
};

type Props = {
  params: Promise<{ transType: string }>;
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <div className="flex flex-col gap-5">{children}</div>;
}
