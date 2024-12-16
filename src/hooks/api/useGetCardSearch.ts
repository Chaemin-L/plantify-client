import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { SearchCardType } from "@/types/api/card";
import { useQuery } from "@tanstack/react-query";

export async function getCardSearch(query: string) {
  const response: SearchCardType[] = await fetchClient(
    `${API_ENDPOINTS.CARD_SEARCH}/search?query=${encodeURIComponent(query)}`
  );
  return response;
}

export const useGetCardSearch = (query: string) => {
  return useQuery({
    queryKey: ["card-add", query],
    queryFn: async () => await getCardSearch(query),
  });
};
