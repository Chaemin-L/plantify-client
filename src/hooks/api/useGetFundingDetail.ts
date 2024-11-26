import { getFundingDetail, getOrganizations } from "@/services/funding";
import { useQuery } from "@tanstack/react-query";

// OK
export const useGetFundingDetail = (id: string) => {
  return useQuery({
    queryKey: ["funding-detail"],
    queryFn: async () => {
      return await getFundingDetail(id);
    },
  });
};
