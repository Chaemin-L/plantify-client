export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const CHAT_BASE_URL = process.env.NEXT_PUBLIC_CHAT_BASE_URL;
export const ML_BASE_URL = process.env.NEXT_PUBLIC_ML_API_BASE_URL;
export const NEXT_BASE_URL = "/api";

const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
const CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET;

export const API_ENDPOINTS = {
  AUTH: `${API_BASE_URL}/v1/auth`,
  PAY: `${API_BASE_URL}/v1/pay`,
  CHAT: `${CHAT_BASE_URL}/chat`,
  FUNDING: `${API_BASE_URL}/v1/funding`,
  ITEM: `${API_BASE_URL}/v1/items`,
  CASH: `${API_BASE_URL}/v1/cash`,
  CARD: `${API_BASE_URL}/v1/recommend/cards`,
};

export const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&response_type=code`;
