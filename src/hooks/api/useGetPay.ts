import { NEXT_API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse } from "@/types/api/common";
import { PayType } from "@/types/api/pay";
import { useQuery } from "@tanstack/react-query";

// OK
export async function getPay() {
  const data: FinalResponse<PayType> = await fetchClient(
    `${NEXT_API_ENDPOINTS.PAY}`
  );
  if (data.status === 200) return data.data;
  throw new Error("페이를 가져오는데 실패했습니다");
}

export const useGetPay = () => {
  return useQuery({
    queryKey: ["pay"],
    queryFn: async () => await getPay(),
  });
};
