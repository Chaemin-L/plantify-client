import { getFundingDetail } from "@/hooks/api/useGetFundingDetail";
import FundingDetail from "./funding-detail";

interface Props {
  params: Promise<{ id: string }>;
}
export default async function Page({ params }: Props) {
  const { id } = await params;

  const data = await getFundingDetail(id);

  return (
    <>
      <FundingDetail data={data!} />
    </>
  );
}
