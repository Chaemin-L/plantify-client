import { redirect } from "next/navigation";
import { PATH } from "./_shared/paths";

const fetchClient = async (url: string, options: RequestInit = {}) => {
  let token =
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
