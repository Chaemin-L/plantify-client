import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = ["total_amount"];

async function getAmount() {
  const response: number = await fetchClient(
    `${API_ENDPOINTS.PAY}/settlements/amount`
  );
  return response;
}

export const useGetAmount = () => {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => await getAmount(),
  });
};
