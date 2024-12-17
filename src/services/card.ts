import { API_ENDPOINTS } from "@/config/api";
import { GetMyCardRes } from "@/types/api/card";
import { FinalResponse } from "@/types/api/common";

export async function getMyCards(token: string) {
  try {
    const response = await fetch(API_ENDPOINTS.CARD_MY, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: FinalResponse<GetMyCardRes> = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
}
