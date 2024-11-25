import { FinalResponse } from "@/types/api/common";

const fetchClient = async (url: string, options: RequestInit = {}) => {
  let token;
  if (process.env.NODE_ENV === "development") {
    token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  } else {
    token =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;
  }

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const mergedOptions: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}),
    },
  };

  const response = await fetch(url, mergedOptions);
  // 통신 에러
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  } else {
    const data: FinalResponse<any> = await response.json();
    if (data.status === 200) return data;
    // 비지니스 로직 에러
    throw new Error(`[${data.status} ERROR] ${data.message}`);
  }
};

export default fetchClient;
