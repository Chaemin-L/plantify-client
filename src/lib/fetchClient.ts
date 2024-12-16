import { redirect } from "next/navigation";
import { PATH } from "./_shared/paths";

const fetchClient = async (url: string, options: RequestInit = {}) => {
  if (typeof window === "undefined") {
    throw new Error("fetchClient는 클라이언트에서만 호출할 수 있습니다.");
  }

  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

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
  if (!response.ok) {
    if (response.status === 403) {
      redirect(PATH.INTRO);
    }
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  if (data.status === 200) return data;
};

export default fetchClient;
