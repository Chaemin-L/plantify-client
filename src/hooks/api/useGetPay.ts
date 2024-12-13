import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse } from "@/types/api/common";
import { PayType } from "@/types/api/pay";
import { useQuery } from "@tanstack/react-query";

// OK
export async function getPay() {
  const data: FinalResponse<PayType> = await fetchClient(
    `${API_ENDPOINTS.PAY}`
  );
  try {
    return data.data;
  } catch (e) {
    if (e.code === 404) return data.data;
    throw new Error("페이를 가져오는데 실패했습니다");
  }
}

export const useGetPay = () => {
  return useQuery({
    queryKey: ["pay"],
    queryFn: async () => await getPay(),
  });
};
