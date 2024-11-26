import { getFundingByCategory } from "@/services/funding";
import { CategoryType } from "@/types/api/funding";
import { useInfiniteQuery } from "@tanstack/react-query";

// OK
export const useGetFundingListByCategory = (
  category: CategoryType,
  size: number,
  sort: string[] = ["title"]
) => {
  return useInfiniteQuery({
    queryKey: ["category-funding-list"],
    queryFn: ({ pageParam = 0 }) =>
      getFundingByCategory(category, pageParam, size, sort),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.data.pageable.pageNumber + 1,
  });
};
