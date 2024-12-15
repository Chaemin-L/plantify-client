import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse } from "@/types/api/common";
import { CategoryType, ItemType } from "@/types/api/item";
import { useQuery } from "@tanstack/react-query";

// OK
export async function getStoreItemsByCategory(category: CategoryType) {
  const data: FinalResponse<ItemType[]> = await fetchClient(
    `${API_ENDPOINTS.ITEM}/${category}`
  );
  if (data.status === 200) return data.data;
  throw new Error(data.message);
}

// OK
export const useGetStoreItemsByCategory = (category: CategoryType) => {
  return useQuery({
    queryKey: ["store-items-category", category],
    queryFn: async () => {
      return await getStoreItemsByCategory(category);
    },
  });
};
