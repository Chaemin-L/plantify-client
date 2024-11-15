import { kdayjs } from "@/lib/kdayjs";
import PaymentsList from "./(components)/payments-list";

// TODO: data fetching
const totalPayment = 365000;

export default function PaymentsPage() {
  const startDate = kdayjs().subtract(1, "month").format("MM월 DD일");
  const endDate = kdayjs().format("MM월 DD일");

  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-1 text-white">
        <span className="text-t4">
          {startDate} ~ {endDate}
        </span>
        <h1 className="text-t2">{totalPayment.toLocaleString()}원</h1>
      </div>
      <PaymentsList />
    </div>
  );
}
