"use client";
import PayCard from "@/app/(_components)/pay-card";
import { PointMoney } from "@/app/(_components)/point-money";
import Loading from "@/app/loading";
import { useGetPay } from "@/hooks/api/useGetPay";
import { useGetPoints } from "@/hooks/api/useGetPoints";
import { PATH } from "@/lib/_shared/paths";
import Link from "next/link";

export default function PaySection() {
  const { data: pay, isLoading: payFetching } = useGetPay();
  const { data: points, isLoading: pointsFetching } = useGetPoints();

  if (payFetching || pointsFetching) return <Loading />;

  return (
    <>
      {/** 페이 및 포인트*/}
      {pay && points && <PayCard pay={pay} points={points} />}
      <div className="card bg-accent-green  flex justify-between  select-none w-full">
        {points ? (
          <PointMoney
            total={
              (Number(pay?.balance) || 0) + (Number(points?.pointBalance) || 0)
            }
          />
        ) : (
          <Link href={PATH.PAY_ACCOUNTS} className="card-title text-black">
            페이 등록하러 가기 &gt;&gt;
          </Link>
        )}
      </div>
    </>
  );
}
