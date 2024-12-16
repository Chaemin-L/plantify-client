import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { PostFundingReq } from "@/types/api/funding";
import { PayType } from "@/types/api/pay";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// OK
export async function postFunding(funding: PostFundingReq) {
  const data: PayType = await fetchClient(
    `${API_ENDPOINTS.FUNDING}/my-funding`,
    {
      method: "POST",
      body: JSON.stringify(funding),
    }
  );
  return data;
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
