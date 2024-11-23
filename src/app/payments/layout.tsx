import { kdayjs } from "@/lib/kdayjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantify - 이용내역",
  description: "Plantify 페이의 이용내역을 확인해요",
};

type Props = {
  params: Promise<{ transType: string }>;
  children: React.ReactNode;
};

// TODO: data fetching
const totalPayment = 365000;
const startDate = kdayjs().subtract(1, "month").format("MM월 DD일");
const endDate = kdayjs().format("MM월 DD일");

export default async function Layout({ children }: Props) {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-1 text-white">
        <span className="text-t4">
          {startDate} ~ {endDate}
        </span>
        <h1 className="text-t2">{totalPayment.toLocaleString()}원</h1>
      </div>
      {children}
    </div>
  );
}
