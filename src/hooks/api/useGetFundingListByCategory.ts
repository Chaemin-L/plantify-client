import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse, Pageable } from "@/types/api/common";
import { CategoryType, FundingType } from "@/types/api/funding";
import { useInfiniteQuery } from "@tanstack/react-query";

//OK
export async function getFundingByCategory(
  category: CategoryType,
  page: number,
  size: number,
  sort: string[]
) {
  const data: FinalResponse<Pageable<FundingType>> = await fetchClient(
    `${
      API_ENDPOINTS.FUNDING
    }/category/${category}?page=${page}&size=${size}&sort=${encodeURIComponent(
      sort.toString()
    )}`
  );
  return data;
}

// OK
export const useGetFundingListByCategory = (
  category: CategoryType,
  size: number,
  sort: string[] = ["title"]
) => {
  return useInfiniteQuery({
    queryKey: ["category-funding-list", category],
    queryFn: ({ pageParam = 0 }) =>
      getFundingByCategory(category, pageParam, size, sort),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.last ? undefined : lastPage.pageable.pageNumber + 1,
    staleTime: 1000 * 60 * 60 * 24, // 24h
  });
};
