import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { CashType } from "@/types/api/cash";
import { useQuery } from "@tanstack/react-query";

export const CASH_QUERY_KEY = ["cash"];

// OK
export async function getCash() {
  const data: CashType = await fetchClient(`${API_ENDPOINTS.CASH}`);
  return data;
}

export const useGetCash = () => {
  return useQuery({
    queryKey: CASH_QUERY_KEY,
    queryFn: async () => await getCash(),
    retry: 3,
  });
};
