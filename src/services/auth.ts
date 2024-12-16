import { API_ENDPOINTS } from "@/config/api";
import { PATH } from "@/lib/_shared/paths";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse } from "@/types/api/common";
import { redirect } from "next/navigation";

export async function signIn(code: string) {
  const response: { accessToken: string; refreshToken: string } =
    await fetchClient(`${API_ENDPOINTS.AUTH}/login?code=${code}`, {
      method: "POST",
    });

  const { accessToken, refreshToken } = response;
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
  redirect(PATH.HOME);
}

export async function validateToken(token: string) {
  const response: FinalResponse<{ userId: number; role: string } | null> =
    await fetch(`${API_ENDPOINTS.AUTH}/validate-token`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  console.log("response", response);
  return response;
}

export async function requestAccessToken(token: string) {
  console.log("requestAccessToken 실행", token);
  const response: FinalResponse<string | null> = await fetch(
    `${API_ENDPOINTS.AUTH}/refresh`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((res) => res.json());
  if (response.status === 200 && response.data) {
    localStorage.setItem("accessToken", response.data);
  } else {
    redirect(PATH.INTRO);
  }
  return response;
}
