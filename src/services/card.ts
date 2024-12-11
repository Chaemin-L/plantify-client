import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { BenefitCardListType } from "@/types/api/card";

// OK
export async function getCardBenefit(category: string) {
  try {
    const data = await fetchClient(`${API_ENDPOINTS.CARD}`, {
      method: "POST",
      body: JSON.stringify({
        category,
        top_n: 5,
      }),
      cache: "no-cache",
    });
    console.log(data);
    return data as BenefitCardListType;
  } catch (e) {
    console.log(e);
    throw new Error("추천 카드를 가져오는데 실패했습니다");
  }
}
