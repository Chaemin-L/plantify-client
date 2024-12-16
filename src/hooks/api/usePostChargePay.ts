import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FundingDetailType } from "@/types/api/funding";
import { PostChargePayReq } from "@/types/api/pay";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function postChargePay(request: PostChargePayReq) {
  const data: FundingDetailType = await fetchClient(
    `${API_ENDPOINTS.PAY}/recharge`,
    {
      method: "PUT",
      body: JSON.stringify(request),
    }
  );

  return data;
}

export const usePostChargePay = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (request: PostChargePayReq) =>
      await postChargePay(request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["pay"] }),
  });
};
