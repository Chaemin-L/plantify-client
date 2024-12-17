import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { PostFundingReq } from "@/types/api/funding";
import { useMutation } from "@tanstack/react-query";

// OK
export async function postFunding(funding: PostFundingReq) {
  const data: string = await fetchClient(
    `${API_ENDPOINTS.FUNDING}/my-funding`,
    {
      method: "POST",
      body: JSON.stringify(funding),
    }
  );
  return data;
}

export const usePostFunding = () => {
  return useMutation({
    mutationFn: async (request: PostFundingReq) => await postFunding(request),
  });
};
