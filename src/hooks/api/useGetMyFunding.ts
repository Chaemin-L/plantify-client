import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse, Pageable } from "@/types/api/common";
import { FundingType } from "@/types/api/funding";
import { useInfiniteQuery } from "@tanstack/react-query";

const getMyFunding = async (
  pageParam: number,
  size: number,
  sort: string[]
) => {
  const response: FinalResponse<Pageable<FundingType>> = await fetchClient(
    `${
      API_ENDPOINTS.FUNDING
    }/my-funding?page=${pageParam}&size=${size}&sort=${encodeURIComponent(
      sort.toString()
    )}`
  );
  return response.data;
};

export const useGetMyFunding = (size: number, sort: string[]) => {
  return useInfiniteQuery({
    queryKey: ["my-funding"],
    queryFn: ({ pageParam = 0 }) => getMyFunding(pageParam, size, sort),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pageable.pageNumber + 1,
  });
};
