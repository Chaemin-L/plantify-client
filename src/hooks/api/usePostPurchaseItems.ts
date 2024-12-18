import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CASH_QUERY_KEY } from "./useGetCash";

interface PurchaseItemRequest {
  itemId: number;
  quantity: number;
}

async function postPurchaseItems(itemId: number, quantity: number) {
  const data = await fetchClient(`${API_ENDPOINTS.ITEM}/purchase`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ itemId, quantity }),
  });
  return data;
}

export const usePostPurchaseItems = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ itemId, quantity }: PurchaseItemRequest) =>
      await postPurchaseItems(itemId, quantity).then(() =>
        queryClient.invalidateQueries({ queryKey: CASH_QUERY_KEY })
      ),
  });
};
