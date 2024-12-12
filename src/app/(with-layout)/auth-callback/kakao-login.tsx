"use client";

import Loading from "@/app/loading";
import { signIn } from "@/services/auth";
import { useEffect } from "react";

interface Props {
  code: string;
}
export default function KakaoLogin({ code }: Props) {
  useEffect(() => {
    signIn(code);
  }, [code]);

  return <Loading />;
}
