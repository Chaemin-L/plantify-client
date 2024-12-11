import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { CashType } from "@/types/api/cash";
import { FinalResponse } from "@/types/api/common";

export async function postCash(amount: number, type: string) {
  const data = await fetchClient(`${API_ENDPOINTS.CASH}/use`, {
    method: "POST",
    body: JSON.stringify({
      amount,
      type,
    }),
  });
  if (data.status === 200) return data as FinalResponse<CashType>;
}
