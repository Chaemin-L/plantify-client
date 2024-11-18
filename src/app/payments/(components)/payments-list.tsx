"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import PaymentsItem from "./payments-item";
import Select, { SelectItemType } from "@/app/(_components)/select";
import { PATH } from "@/lib/_shared/paths";
import { CategoryValueType } from "../[transType]/page";

export interface PaymentsType {
  orderName: string;
  transactionType: string;
  amount: number;
  createdAt: string;
}
export type OrderByType = "recent" | "desc";

// dummy data
const payments: PaymentsType[] = [
  {
    orderName: "YouTubePremium >",
    transactionType: "-",
    amount: 14900,
    createdAt: "2024-11-04T12:00:00",
  },
  {
    orderName: "KB국민(396*******1303)",
    transactionType: "+",
    amount: 20000,
    createdAt: "2024-11-04T11:00:00",
  },
  {
    orderName: "티빙 방송 스탠다드",
    transactionType: "-",
    amount: 8600,
    createdAt: "2024-10-13T08:30:00",
  },
  {
    orderName: "일본 eSIM 데이터 무제한 오사카... >",
    transactionType: "-",
    amount: 6700,
    createdAt: "2024-10-13T08:00:00",
  },
  {
    orderName: "KB국민(396*******1303)",
    transactionType: "+",
    amount: 20000,
    createdAt: "2024-10-13T07:48:00",
  },
];

export default function PaymentsList() {
  const [selectedItem, setSelectedItem] = useState<CategoryValueType>("all");
  const [orderBy, setOrderBy] = useState<OrderByType>("recent");

  const isAll = selectedItem === "all";

  // TODO: data fetching (SWR)

  const onClickCategory = (value: CategoryValueType) => setSelectedItem(value);
  const onClickOrderBy = (value: OrderByType) => setOrderBy(value);

  useEffect(() => {
    // 전체보기 클릭시, 이전 정렬 조건 초기화
    setOrderBy((orderBy) => (isAll ? "recent" : orderBy));
  }, [selectedItem]);

  return (
    <div className="space-y-5">
      <ul className="flex flex-col gap-5">
        {payments.map((payment) => (
          <PaymentsItem key={payment.createdAt} {...payment} />
        ))}
      </ul>
    </div>
  );
}
