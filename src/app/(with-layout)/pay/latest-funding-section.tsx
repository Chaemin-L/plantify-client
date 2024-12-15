"use client";
import ItemSlider from "@/app/(_components)/item-slider";
import Loading from "@/app/loading";
import { useGetFundingList } from "@/hooks/api/useGetFundingList";

export default function LatestFundingSection() {
  const { data, isLoading } = useGetFundingList(7, ["donationStartDate"]);

  if (isLoading) return <Loading />;

  const items = data?.pages[0]?.content;

  if (!items) {
    return <></>;
  }

  return (
    <>
      <ItemSlider title="최근 펀딩" items={items} />
    </>
  );
}
