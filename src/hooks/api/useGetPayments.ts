import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse, Pageable } from "@/types/api/common";
import { PaymentsType } from "@/types/api/pay";
import { useInfiniteQuery } from "@tanstack/react-query";

const getPayments = async (pageParam: number, size: number, sort: string[]) => {
  const response: FinalResponse<Pageable<PaymentsType>> = await fetchClient(
    `${
      API_ENDPOINTS.PAY
    }/settlements?page=${pageParam}&size=${size}&sort=${encodeURIComponent(
      sort.toString()
    )}`
  );
  return response.data;
};

export const useGetPayments = (size: number, sort: string[]) => {
  return useInfiniteQuery({
    queryKey: ["settlements"],
    queryFn: ({ pageParam = 0 }) => getPayments(pageParam, size, sort),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.pageable.pageNumber + 1,
  });
};
