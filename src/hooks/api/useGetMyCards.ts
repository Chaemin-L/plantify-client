import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { useQuery } from "@tanstack/react-query";

export const MY_CARDS = ["my-cards"];

export async function getMyCards() {
  const response = await fetchClient(API_ENDPOINTS.CARD_MY);
  return response;
}

export function useGetMyCards() {
  return useQuery({
    queryKey: MY_CARDS,
    queryFn: async () => await getMyCards(),
  });
}
