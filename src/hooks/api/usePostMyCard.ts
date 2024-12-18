import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { GetMyCardRes } from "@/types/api/card";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MY_CARDS } from "./useGetMyCards";

async function postMyCard(request: number[]) {
  (await fetchClient(API_ENDPOINTS.CARD_MY, {
    method: "POST",
    body: JSON.stringify(request),
  })) as GetMyCardRes;
}

export const usePostMyCard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (request: number[]) =>
      await postMyCard(request).then(() =>
        queryClient.invalidateQueries({ queryKey: MY_CARDS })
      ),
  });
};
