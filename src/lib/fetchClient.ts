const fetchClient = async (url: string, options: RequestInit = {}) => {
  let token;
  if (process.env.NODE_ENV === "development") {
    token =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;
  } else {
    token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
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
  if (!response.ok) {
    throw new Error(
      `HTTP error! status: ${response.status}${response.statusText}`
    );
  }
  return response.json();
};

export default fetchClient;
