"use client";

import { PATH } from "@/lib/_shared/paths";
import { requestAccessToken, validateToken } from "@/services/auth";
import { redirect } from "next/navigation";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface AuthContextProps {
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void | null;
}

const AuthContext = createContext<AuthContextProps>({
  accessToken: "",
  setAccessToken: null,
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  useEffect(() => {
    const verify = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (accessToken && refreshToken) {
        const response = await validateToken(accessToken);
        if (response.status === 200) setAccessToken(accessToken);
        if (response.status >= 400) {
          const { data: token } = await requestAccessToken(refreshToken);
          if (token) {
            setAccessToken(token);
          }
        }
      } else redirect(PATH.INTRO);
    };
    verify();
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
