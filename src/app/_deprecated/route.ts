import { API_ENDPOINTS } from "@/config/api";
import { PATH } from "@/lib/_shared/paths";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  const data = await (
    await fetch(`${API_ENDPOINTS.AUTH}/login?code=${code}`, {
      method: "POST",
    })
  ).json();

  if (!data.accessToken) {
    return NextResponse.json(
      { error: "Failed to fetch access token" },
      { status: 400 }
    );
  }

  // localStorage.setItem("accessToken", tokenResponse.data.accessToken);
  // localStorage.setItem("refreshToken", tokenResponse.data.refreshToken);

  return redirect(PATH.HOME);
}
