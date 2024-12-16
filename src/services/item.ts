import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { CreateUsingItemsReq, GetMyItemRes } from "@/types/api/item";

// OK
export async function postUsingItem(
  myItemId: number,
  posX: number,
  posY: number
) {
  const data: CreateUsingItemsReq = await fetchClient(
    `${API_ENDPOINTS.ITEM}/my-items/using-items`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ myItemId, posX, posY }),
    }
  );
  return data;
}

// OK
export async function purchaseItem(itemId: number, quantity: number) {
  const data: GetMyItemRes = await fetchClient(
    `${API_ENDPOINTS.ITEM}/purchase`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId, quantity }),
    }
  );
  return data;
}
