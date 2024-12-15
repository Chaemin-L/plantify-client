"use client";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";
import FundingMain from "./funding-main";

export default function TokenProvider() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);
  }, []);

  if (!accessToken) {
    return <Loading />;
  }

  return <FundingMain token={accessToken} />;
}
