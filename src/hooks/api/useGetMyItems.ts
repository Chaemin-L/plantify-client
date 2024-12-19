import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { CategoryType, GetMyItemRes } from "@/types/api/item";
import { useSuspenseQuery } from "@tanstack/react-query";

// OK
export async function getMyItems(category: CategoryType) {
  const data: GetMyItemRes[] = await fetchClient(
    `${API_ENDPOINTS.ITEM}/my-items/${category}`
  );
  return data;
}

export const useGetMyItemsQuery = (category: CategoryType) => {
  return useSuspenseQuery({
    queryKey: ["my-items", category],
    queryFn: async () => await getMyItems(category),
  });
};
