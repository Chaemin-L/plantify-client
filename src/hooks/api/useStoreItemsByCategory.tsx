import { getStoreItemsByCategory } from "@/services/item";
import { CategoryType } from "@/types/api/item";
import { useQuery } from "@tanstack/react-query";

// OK
export const useStoreItemsByCategoryQuery = (category: CategoryType) => {
  return useQuery({
    queryKey: ["store-items-category"],
    queryFn: async () => {
      return await getStoreItemsByCategory(category);
    },
  });
};
