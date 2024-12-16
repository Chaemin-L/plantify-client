import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { SearchCardType } from "@/types/api/card";
import { useQuery } from "@tanstack/react-query";

export async function getCardSearch(query: string) {
  try {
    const response: SearchCardType[] = await fetchClient(
      `${API_ENDPOINTS.CARD_SEARCH}/search?query=${encodeURIComponent(query)}`
    );
    return response;
  } catch (e) {
    throw new Error("추천 카드를 가져오는데 실패했습니다");
  }
}

export const useGetCardSearch = (query: string) => {
  return useQuery({
    queryKey: ["card-add", query],
    queryFn: async () => await getCardSearch(query),
  });
};
