import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { BenefitCardListType } from "@/types/api/card";
import { BenefitCategory } from "@/types/card";
import getBenefitCategory from "@/utils/getBenefitCategory";
import { useSuspenseQuery } from "@tanstack/react-query";

// OK
export async function getCardBenefit(category: string) {
  const data: BenefitCardListType = await fetchClient(
    `${API_ENDPOINTS.CARD_RECOMMEND}`,
    {
      method: "POST",
      body: JSON.stringify({
        category,
        top_n: 5,
      }),
    }
  );
  return data;
}

export function useGetCardBenefit(category: BenefitCategory) {
  return useSuspenseQuery({
    queryKey: ["card-benefit", category],
    queryFn: async () => await getCardBenefit(getBenefitCategory(category)),
  });
}
