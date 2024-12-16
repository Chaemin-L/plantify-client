import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { MyItemType } from "@/types/api/item";
import { useQuery } from "@tanstack/react-query";

// OK
export async function getMyItems() {
  const data: MyItemType[] = await fetchClient(
    `${API_ENDPOINTS.ITEM}/my-items`
  );
  return data;
}

export const useGetMyItemsQuery = () => {
  return useQuery({
    queryKey: ["my-items"],
    queryFn: async () => {
      return await getMyItems();
    },
  });
};
