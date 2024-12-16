import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse } from "@/types/api/common";
import { PostFundingReq } from "@/types/api/funding";
import { PayType } from "@/types/api/pay";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// OK
export async function postFunding(funding: PostFundingReq) {
  const data: FinalResponse<PayType> = await fetchClient(
    `${API_ENDPOINTS.FUNDING}/my-funding`,
    {
      method: "POST",
      body: JSON.stringify(funding),
    }
  );
  if (data.status === 200) return data.data;

  throw new Error("펀딩을 결제하는데 실패했습니다");
}

export const usePostFunding = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (request: PostFundingReq) => await postFunding(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my-funding"] });
    },
  });
};
