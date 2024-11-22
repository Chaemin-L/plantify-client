import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse, Pageable } from "@/types/api/common";
import { FundingType } from "@/types/api/funding";
import { CategoryType, ItemType } from "@/types/api/item";

export async function getStoreItems() {
  const data = await fetchClient(`${API_ENDPOINTS.ITEM}`);
  return data as FinalResponse<ItemType[]>;
}

export async function getStoreItemsByCategory(category: CategoryType) {
  const data = await fetchClient(`${API_ENDPOINTS.ITEM}/${category}`);
  return data as FinalResponse<ItemType[]>;
}

/** not yet **/
export async function getUsingItem(itemId: number) {
  const data = await fetchClient(`${API_ENDPOINTS.ITEM}`);
  return data as FinalResponse<Pageable<FundingType>>;
}
