export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const CHAT_BASE_URL = process.env.NEXT_PUBLIC_CHAT_BASE_URL;
export const ML_BASE_URL = process.env.NEXT_PUBLIC_ML_API_BASE_URL;

export const API_ENDPOINTS = {
  AUTH: `${BASE_URL}/v1/auth`,
  PAY: `${BASE_URL}/v1/pay`,
  CHAT: `${CHAT_BASE_URL}/chat`,
  FUNDING: `${BASE_URL}/v1/funding`,
  ITEM: `${BASE_URL}/v1/items`,
  CASH: `${BASE_URL}/v1/cash`,
  CARD: `${BASE_URL}/v1/recommend/cards`,
};
