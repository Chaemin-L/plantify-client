import { API_ENDPOINTS } from "@/config/api";
import { PATH } from "@/lib/_shared/paths";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse } from "@/types/api/common";
import { redirect } from "next/navigation";

export async function signIn(code: string) {
  const data: FinalResponse<{ accessToken: string; refreshToken: string }> =
    await fetchClient(`${API_ENDPOINTS.AUTH}/login?code=${code}`, {
      method: "POST",
    });

  console.log("signIn data: ", data);
  if (data.status === 200) {
    const {
      data: { accessToken, refreshToken },
    } = data;
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("refreshToken", refreshToken);
    redirect(PATH.HOME);
  } else throw new Error("로그인에 실패하였습니다.");
}
