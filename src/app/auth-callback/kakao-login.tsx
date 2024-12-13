"use client";
import { signIn } from "@/services/auth";
import { useEffect } from "react";
import Loading from "../loading";

interface Props {
  code: string;
}
export default function KakaoLogin({ code }: Props) {
  useEffect(() => {
    signIn(code);
  }, [code]);

  return <Loading />;
}
