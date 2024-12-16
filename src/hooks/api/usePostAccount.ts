import { API_ENDPOINTS } from "@/config/api";
import { PATH } from "@/lib/_shared/paths";
import fetchClient from "@/lib/fetchClient";
import { CreateAccountReq, PayType } from "@/types/api/pay";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { ACCOUNT_QUERY_KEY } from "./useGetAccounts";
import { PAY_QUERY_KEY } from "./useGetPay";

// deprecated
export async function postAccounts(accounts: CreateAccountReq) {
  const data: PayType = await fetchClient(`${API_ENDPOINTS.PAY}/accounts`, {
    method: "POST",
    body: JSON.stringify(accounts),
  });
  return data;
}

export const usePostAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (accounts: CreateAccountReq) =>
      await postAccounts(accounts),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...ACCOUNT_QUERY_KEY, ...PAY_QUERY_KEY],
      });
      redirect(PATH.HOME);
    },
  });
};
