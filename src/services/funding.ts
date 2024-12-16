import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse, Pageable } from "@/types/api/common";
import { MyFundingType } from "@/types/api/funding";

// OK
export async function getMyFundingList(
  page: number,
  size: number,
  sort: string[]
) {
  const data = await fetchClient(
    `${
      API_ENDPOINTS.FUNDING
    }/my-funding?page=${page}&size=${size}&sort=${encodeURIComponent(
      sort.toString()
    )}`
  );
  if (data.status === 200)
    return data as FinalResponse<Pageable<MyFundingType>>;
  throw new Error(data.message);
}

// OK
export async function getMyFundingDetail(id: string) {
  const data = await fetchClient(`${API_ENDPOINTS.FUNDING}/my-funding/${id}`);
  if (data.status === 200) return data as FinalResponse<MyFundingType>;
  throw new Error(data.message);
}
