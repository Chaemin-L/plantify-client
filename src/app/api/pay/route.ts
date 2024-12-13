import { API_ENDPOINTS } from "@/config/api";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const res = await fetch(API_ENDPOINTS.PAY, {
    headers: request.headers,
  });
  const data = await res.json();

  return Response.json({ data });
}
