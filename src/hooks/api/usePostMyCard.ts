import { API_ENDPOINTS } from "@/config/api";
import { PATH } from "@/lib/_shared/paths";
import fetchClient from "@/lib/fetchClient";
import { GetMyCardRes } from "@/types/api/card";
import { useMutation } from "@tanstack/react-query";
import { redirect } from "next/navigation";

async function postMyCard(request: number[]) {
  (await fetchClient(API_ENDPOINTS.CARD_MY, {
    method: "POST",
    body: JSON.stringify(request),
  })) as GetMyCardRes;
}

export const usePostMyCard = () => {
  return useMutation({
    mutationFn: async (request: number[]) => await postMyCard(request),
    onSuccess: () => {
      redirect(PATH.CARD_BENEFIT);
    },
  });
};
