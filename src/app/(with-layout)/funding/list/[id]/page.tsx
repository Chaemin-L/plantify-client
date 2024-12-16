"use client";
import { useParams } from "next/navigation";
import FundingDetail from "./funding-detail";

export default function Page() {
  const params = useParams<{ id: string }>();

  return (
    <>
      <FundingDetail id={params.id} />
    </>
  );
}
