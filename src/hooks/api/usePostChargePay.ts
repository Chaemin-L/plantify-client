import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse } from "@/types/api/common";
import { FundingDetailType } from "@/types/api/funding";
import { PostChargePayReq } from "@/types/api/pay";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function postChargePay(request: PostChargePayReq) {
  const data: FinalResponse<FundingDetailType> = await fetchClient(
    `${API_ENDPOINTS.PAY}/recharge`,
    {
      method: "PUT",
      body: JSON.stringify(request),
    }
  );

  if (data.status === 200) return data.data;
  throw new Error(data.message);
}

export const usePostChargePay = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (request: PostChargePayReq) =>
      await postChargePay(request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["pay"] }),
  });
};
