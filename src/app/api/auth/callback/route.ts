import { API_ENDPOINTS, BASE_URL } from "@/config/api";
import { PATH } from "@/lib/_shared/paths";
import fetchClient from "@/lib/fetchClient";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  const tokenResponse = await fetchClient(
    `${API_ENDPOINTS.AUTH}/v1/auth/kakao/login?code=${code}`,
    {
      method: "POST",
    }
  );

  if (!tokenResponse.data.accessToken) {
    return NextResponse.json(
      { error: "Failed to fetch access token" },
      { status: 400 }
    );
  }

  localStorage.setItem("accessToken", tokenResponse.data.accessToken);
  localStorage.setItem("refreshToken", tokenResponse.data.refreshToken);

  return redirect(PATH.HOME);
}
