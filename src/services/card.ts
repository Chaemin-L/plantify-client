import { API_ENDPOINTS } from "@/config/api";
import { GetMyCardRes } from "@/types/api/card";
import { FinalResponse } from "@/types/api/common";

export async function getMyCards(token: string) {
  const response: FinalResponse<GetMyCardRes> = await fetch(
    API_ENDPOINTS.CARD_MY,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((res) => res.json());
  return response.data;
}
