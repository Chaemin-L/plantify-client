import { SortingType } from "@/app/(with-layout)/payments/(components)/filtered-payments-list";
import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { Pageable } from "@/types/api/common";
import { PaymentsType } from "@/types/api/pay";
import { useInfiniteQuery } from "@tanstack/react-query";

type FilterType = "CHARGE" | "PAYMENT";

const getPaymentsByFilter = async (
  filter: FilterType,
  pageParam: number,
  size: number,
  sort: string[]
) => {
  const response: Pageable<PaymentsType> = await fetchClient(
    `${
      API_ENDPOINTS.PAY
    }/settlements/${filter}?page=${pageParam}&size=${size}&sort=${encodeURIComponent(
      sort.toString()
    )}`
  );
  return response;
};

export const useGetPaymentsByFilter = (
  filter: FilterType,
  sorting: SortingType,
  size: number,
  sort: string[]
) => {
  return useInfiniteQuery({
    queryKey: ["settlements-category", filter, sorting],
    queryFn: ({ pageParam = 0 }) =>
      getPaymentsByFilter(filter, pageParam, size, sort),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pageable.pageNumber + 1,
    retry: 3,
  });
};
