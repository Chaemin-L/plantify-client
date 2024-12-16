import { API_ENDPOINTS } from "@/config/api";
import { FinalResponse, Pageable } from "@/types/api/common";
import { FundingType } from "@/types/api/funding";
import { useInfiniteQuery } from "@tanstack/react-query";

// OK
export async function getFundingList(
  page: number,
  size: number,
  sort: string[],
  token: string
) {
  const response: FinalResponse<Pageable<FundingType>> = await fetch(
    `${
      API_ENDPOINTS.FUNDING
    }?page=${page}&size=${size}&sort=${encodeURIComponent(sort.toString())}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((res) => res.json());
  return response.data;
}

// OK
export const useGetFundingList = (size: number, sort: string[] = ["title"]) => {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("accessToken") || ""
      : "";

  return useInfiniteQuery({
    queryKey: ["funding-list"],
    queryFn: ({ pageParam = 0 }) =>
      getFundingList(pageParam, size, sort, token),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pageable.pageNumber + 1,
  });
};
