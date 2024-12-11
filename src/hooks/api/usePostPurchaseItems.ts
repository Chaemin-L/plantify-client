import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { useMutation } from "@tanstack/react-query";

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
  if (data.status === 200) return data;
  throw new Error(data.message);
}

export const usePostPurchaseItems = () => {
  return useMutation({
    mutationFn: async ({ itemId, quantity }: PurchaseItemRequest) =>
      await postPurchaseItems(itemId, quantity),
  });
};
