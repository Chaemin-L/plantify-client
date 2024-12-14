"use client";

import { PATH } from "@/lib/_shared/paths";
import { requestAccessToken, validateToken } from "@/services/auth";
import { redirect } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export default function AuthProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const verify = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (accessToken && refreshToken) {
        const response = await validateToken(accessToken);
        console.log(response);
        if (response.status >= 400) {
          await requestAccessToken(refreshToken);
        }
      } else redirect(PATH.INTRO);
    };
    verify();
  }, []);

  return <>{children}</>;
}
