import { getFundingList } from "@/services/funding";
import { useInfiniteQuery } from "@tanstack/react-query";

// OK
export const useFundingList = (size: number, sort: string[] = ["title"]) => {
  return useInfiniteQuery({
    queryKey: ["funding-list"],
    queryFn: ({ pageParam = 0 }) => getFundingList(pageParam, size, sort),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.data.pageable.pageNumber + 1,
  });
};
