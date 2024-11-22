import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse, Pageable } from "@/types/api/common";
import { CategoryType, FundingType } from "@/types/api/funding";

export async function getFunding(page: number, size: number, sort: string[]) {
  let data = await fetchClient(
    `${
      API_ENDPOINTS.FUNDING
    }?page=${page}&size=${size}&sort=${encodeURIComponent(sort.toString())}`
  );

  if (data.status === 200) return data as FinalResponse<Pageable<FundingType>>;

  throw new Error(data.message);
}

export async function getFundingByCategory(
  category: CategoryType,
  page: number,
  size: number,
  sort: string[]
) {
  let data = await fetchClient(
    `${
      API_ENDPOINTS.FUNDING
    }/category/${category}?page=${page}&size=${size}&sort=${encodeURIComponent(
      sort.toString()
    )}`
  );
  if (data.status === 200) return data as FinalResponse<Pageable<FundingType>>;

  throw new Error(data.message);
}

export async function getFundingDetail(id: string) {
  let data = await fetchClient(`${API_ENDPOINTS.FUNDING}/${id}`);

  if (data.status === 200) return data as FinalResponse<FundingType>;

  throw new Error(data.message);
}
