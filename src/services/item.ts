import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse } from "@/types/api/common";
import { MyItemType, PostUsingItem } from "@/types/api/item";

// OK
export async function postUsingItem(
  myItemId: number,
  posX: number,
  posY: number
) {
  const data = await fetchClient(`${API_ENDPOINTS.ITEM}/my-items/using-items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ myItemId, posX, posY }),
  });
  return data as FinalResponse<PostUsingItem>;
}

// OK
export async function purchaseItem(itemId: number, quantity: number) {
  const data = await fetchClient(`${API_ENDPOINTS.ITEM}/my-items/purchase`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ itemId, quantity }),
  });
  return data as FinalResponse<MyItemType>;
}
