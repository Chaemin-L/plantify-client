export const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "서버 배포 주소";

export const API_ENDPOINTS = {
  FUNDING: `${BASE_URL}/v1/funding`,
  ITEM: `${BASE_URL}/v1/item`,
};
