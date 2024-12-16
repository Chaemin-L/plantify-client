import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse } from "@/types/api/common";
import { FundingDetailType } from "@/types/api/funding";
import { useQuery } from "@tanstack/react-query";

// OK
export async function getFundingDetail(id: string) {
  const data: FinalResponse<FundingDetailType> = await fetchClient(
    `${API_ENDPOINTS.FUNDING}/${id}`
  );
  if (data.status === 200) return data.data;
  throw new Error(data.message);
}

// OK
export const useGetFundingDetail = (id: string) => {
  return useQuery({
    queryKey: ["funding-detail", id],
    queryFn: async () => await getFundingDetail(id),
    enabled: Boolean(id),
    staleTime: 1000 * 60 * 10, // 10 min
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
