import { kdayjs } from "@/lib/kdayjs";
import { PaymentsType } from "./payments-list";

export default function PaymentsItem({
  orderName,
  transactionType,
  amount,
  createdAt,
}: PaymentsType) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-bd2 flex justify-between">
        <span>{orderName}</span>
        <span>
          {transactionType}
          {amount.toLocaleString()}
        </span>
      </div>
      <div className="text-bd4 font-normal space-x-0.5">
        <span>{kdayjs(createdAt).format("YYYY-MM-DD")}</span>
        <span>|</span>
        <span> {kdayjs(createdAt).format("HH:mm")}</span> <span>|</span>
        <span> {transactionType === "+" ? "충전" : "결제"}</span>
      </div>
    </div>
  );
}
