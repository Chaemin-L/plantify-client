import { getFundingList } from "@/services/funding";
import { useInfiniteQuery } from "@tanstack/react-query";

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
