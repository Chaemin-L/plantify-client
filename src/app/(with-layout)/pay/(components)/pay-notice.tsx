import Loading from "@/app/loading";
import { useGetPaymentsByFilter } from "@/hooks/api/useGetPaymentsByFilter";
import { PATH } from "@/lib/_shared/paths";
import { kdayjs } from "@/lib/kdayjs";
import Link from "next/link";

export default function PayNotice() {
  const { data, isLoading } = useGetPaymentsByFilter(
    "PAYMENT",
    "createdAt",
    1,
    ["createdAt", "desc"]
  );
  const payment = data?.pages[0].content[0];

  if (isLoading && !payment) return <Loading />;

  if (!payment) return null;

  const { orderName, amount, createdAt } = data?.pages[0].content[0];

  return (
    <div className="card space-y-4">
      <div className="flex justify-between">
        <h1 className="card-title">알림</h1>
        <p className="text-xs">{kdayjs(createdAt).format("YYYY.MM.DD")}</p>
      </div>
      <div>
        <div className="flex flex-col justify-between text-bd2 ">
          <div className="flex ">
            <p className="line-clamp-1 ">{orderName}</p>
            <span className="whitespace-nowrap pr-[20%]">에서</span>
          </div>
          <p>{amount}원 결제했어요</p>

          <Link
            href={PATH.PAYMENTS}
            className="w-fit self-end text-btn2 px-3 py-2 bg-accent-red rounded-full"
          >
            이용내역
          </Link>
        </div>
      </div>
    </div>
  );
}
