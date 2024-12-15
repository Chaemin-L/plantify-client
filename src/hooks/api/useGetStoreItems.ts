import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse } from "@/types/api/common";
import { ItemType } from "@/types/api/item";
import { useQuery } from "@tanstack/react-query";

// NOT USED
export async function getStoreItems() {
  const data = (await fetchClient(`${API_ENDPOINTS.ITEM}`)) as FinalResponse<
    ItemType[]
  >;
  if (data.status === 200) return data.data;
  throw new Error(data.message);
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
