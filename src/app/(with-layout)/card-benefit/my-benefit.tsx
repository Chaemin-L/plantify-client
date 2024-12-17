"use client";
import Loading from "@/app/loading";
import { useGetMyCards } from "@/hooks/api/useGetMyCards";
import MyCardList from "./(components)/my-card-list";

export default function MyBenefit() {
  const { data: listData } = useGetMyCards();

  if (!listData) return <Loading />;

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-t2">어디서 결제할 예정이신가요?</h1>
      <MyCardList listData={listData} />
    </div>
  );
}
