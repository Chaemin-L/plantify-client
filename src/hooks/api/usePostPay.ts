import { API_ENDPOINTS } from "@/config/api";
import { PATH } from "@/lib/_shared/paths";
import fetchClient from "@/lib/fetchClient";
import { CreateAccountReq, PayType } from "@/types/api/pay";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { redirect } from "next/navigation";

// OK
export async function postPay(accounts: CreateAccountReq) {
  const data: PayType = await fetchClient(`${API_ENDPOINTS.PAY}`, {
    method: "POST",
    body: JSON.stringify(accounts),
  });
  return data;

  throw new Error("페이를 생성하는데 실패했습니다");
}

export const usePostPay = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (accounts: CreateAccountReq) => await postPay(accounts),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pay"] });
      redirect(PATH.PAY_ACCOUNTS);
    },
  });
};
