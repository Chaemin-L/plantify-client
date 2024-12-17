import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { useQuery } from "@tanstack/react-query";

export async function getMyCards() {
  const response = await fetchClient(API_ENDPOINTS.CARD_MY);
  return response;
}

export function useGetMyCards() {
  return useQuery({
    queryKey: ["my-cards"],
    queryFn: async () => await getMyCards(),
  });
}
