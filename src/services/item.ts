import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse, Pageable } from "@/types/api/common";
import { FundingType } from "@/types/api/funding";
import { CategoryType, ItemType, MyItemType } from "@/types/api/item";

export async function getStoreItems() {
  const data = await fetchClient(`${API_ENDPOINTS.ITEM}`);
  if (data.status === 200) return data as FinalResponse<ItemType[]>;
  throw new Error();
}

export async function getStoreItemsByCategory(category: CategoryType) {
  const data = await fetchClient(`${API_ENDPOINTS.ITEM}/${category}`);
  if (data.status === 200) return data as FinalResponse<ItemType[]>;
  throw new Error();
}

/** not yet **/
export async function getUsingItem(itemId: number) {
  const data = await fetchClient(`${API_ENDPOINTS.ITEM}/my-items/using-items`);
  if (data.status === 200) return data as FinalResponse<Pageable<MyItemType[]>>;
  throw new Error();
}
