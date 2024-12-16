import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { PayType } from "@/types/api/pay";
import { useQuery } from "@tanstack/react-query";

export const PAY_QUERY_KEY = ["pay"];

export async function getPay() {
  const response: PayType = await fetchClient(`${API_ENDPOINTS.PAY}`);
  if (response === null) return await getPay();
  return response;
}

export const useGetPay = () => {
  return useQuery({
    queryKey: PAY_QUERY_KEY,
    queryFn: async () => await getPay(),
    refetchOnMount: "always",
    retry: 2,
  });
};
