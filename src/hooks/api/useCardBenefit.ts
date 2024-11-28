import { getCardBenefit } from "@/services/card";
import { useQuery } from "@tanstack/react-query";

export function useCardBenefit(category: string) {
  return useQuery({
    queryKey: [category, "card-benefit"],
    queryFn: async () => {
      const response = await getCardBenefit(category);
      return response;
    },
  });
}
