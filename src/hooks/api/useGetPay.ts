import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse } from "@/types/api/common";
import { PayType } from "@/types/api/pay";
import { useQuery } from "@tanstack/react-query";

export const PAY_QUERY_KEY = ["pay"];

export async function getPay() {
  const response: FinalResponse<PayType> = await fetchClient(
    `${API_ENDPOINTS.PAY}`
  );
  if (response.status === 200) return response.data;
  throw new Error("페이를 가져오는데 실패했습니다");
}

export const useGetPay = () => {
  return useQuery({
    queryKey: PAY_QUERY_KEY,
    queryFn: async () => await getPay(),
  });
};
