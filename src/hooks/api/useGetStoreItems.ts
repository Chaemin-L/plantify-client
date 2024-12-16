import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { ItemType } from "@/types/api/item";
import { useQuery } from "@tanstack/react-query";

// NOT USED
export async function getStoreItems() {
  const data = (await fetchClient(`${API_ENDPOINTS.ITEM}`)) as ItemType[];

  return data;
}

// NOT USED
export const useGetStoreItems = () => {
  return useQuery({
    queryKey: ["store-items"],
    queryFn: async () => {
      return await getStoreItems();
    },
  });
};
