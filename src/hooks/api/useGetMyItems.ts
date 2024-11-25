import { getMyItems } from "@/services/item";
import { useQuery } from "@tanstack/react-query";

export const useGetMyItemsQuery = () => {
  return useQuery({
    queryKey: ["my-items"],
    queryFn: async () => {
      return await getMyItems();
    },
  });
};
