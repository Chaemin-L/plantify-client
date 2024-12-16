import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse, Pageable } from "@/types/api/common";
import { PaymentsType } from "@/types/api/pay";
import { useInfiniteQuery } from "@tanstack/react-query";

type FilterType = "CHARGE" | "PAYMENT";

const getPaymentsByFilter = async (
  filter: FilterType,
  pageParam: number,
  size: number,
  sort: string[]
) => {
  const response: FinalResponse<Pageable<PaymentsType>> = await fetchClient(
    `${
      API_ENDPOINTS.PAY
    }/settlements/${filter}?page=${pageParam}&size=${size}&sort=${encodeURIComponent(
      sort.toString()
    )}`
  );
  return response.data;
};

export const useGetPaymentsByFilter = (
  filter: FilterType,
  size: number,
  sort: string[]
) => {
  return useInfiniteQuery({
    queryKey: ["settlements-category"],
    queryFn: ({ pageParam = 0 }) =>
      getPaymentsByFilter(filter, pageParam, size, sort),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pageable.pageNumber + 1,
  });
};
