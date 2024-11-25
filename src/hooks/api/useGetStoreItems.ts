import { getStoreItems } from "@/services/item";
import { useQuery } from "@tanstack/react-query";

// OK
export const useGetStoreItemsQuery = () => {
  return useQuery({
    queryKey: ["store-items"],
    queryFn: async () => {
      return await getStoreItems();
    },
  });
};
