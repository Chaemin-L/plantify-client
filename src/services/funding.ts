import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { Pageable } from "@/types/api/common";
import { MyFundingType } from "@/types/api/funding";

// OK
export async function getMyFundingList(
  page: number,
  size: number,
  sort: string[]
) {
  const data: Pageable<MyFundingType> = await fetchClient(
    `${
      API_ENDPOINTS.FUNDING
    }/my-funding?page=${page}&size=${size}&sort=${encodeURIComponent(
      sort.toString()
    )}`
  );
  return data;
}

// OK
export async function getMyFundingDetail(id: string) {
  const data: MyFundingType = await fetchClient(
    `${API_ENDPOINTS.FUNDING}/my-funding/${id}`
  );
  return data;
}
