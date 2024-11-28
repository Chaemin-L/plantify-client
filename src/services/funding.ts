import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse, Pageable } from "@/types/api/common";
import {
  CategoryType,
  FundingType,
  MyFundingType,
  OrganizationType,
} from "@/types/api/funding";

// OK
export async function getFundingList(
  page: number,
  size: number,
  sort: string[]
) {
  const data = await fetchClient(
    `${
      API_ENDPOINTS.FUNDING
    }?page=${page}&size=${size}&sort=${encodeURIComponent(sort.toString())}`
  );
  if (data.status === 200) return data as FinalResponse<Pageable<FundingType>>;
  throw new Error(data.message);
}

//OK
export async function getFundingByCategory(
  category: CategoryType,
  page: number,
  size: number,
  sort: string[]
) {
  const data = await fetchClient(
    `${
      API_ENDPOINTS.FUNDING
    }/category/${category}?page=${page}&size=${size}&sort=${encodeURIComponent(
      sort.toString()
    )}`
  );
  if (data.status === 200) return data as FinalResponse<Pageable<FundingType>>;
  throw new Error(data.message);
}

// OK
export async function getFundingDetail(id: string) {
  const data = await fetchClient(`${API_ENDPOINTS.FUNDING}/${id}`);
  if (data.status === 200) return data as FinalResponse<FundingType>;
  throw new Error(data.message);
}

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

// OK
export async function getOrganizations() {
  const data = await fetchClient(`${API_ENDPOINTS.FUNDING}/organizations`);
  if (data.status === 200) return data as FinalResponse<OrganizationType[]>;
  throw new Error(data.message);
}