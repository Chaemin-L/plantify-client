import { API_ENDPOINTS } from "@/config/api";
import { PATH } from "@/lib/_shared/paths";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse } from "@/types/api/common";
import { CreateAccountReq, PayType } from "@/types/api/pay";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { ACCOUNT_QUERY_KEY } from "./useGetAccounts";

// deprecated
export async function postAccounts(accounts: CreateAccountReq) {
  const data: FinalResponse<PayType> = await fetchClient(
    `${API_ENDPOINTS.PAY}/accounts`,
    {
      method: "POST",
      body: JSON.stringify(accounts),
    }
  );
  if (data.status === 200) return data.data;

  throw new Error("페이를 가져오는데 실패했습니다");
}

export const usePostAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (accounts: CreateAccountReq) =>
      await postAccounts(accounts),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ACCOUNT_QUERY_KEY });
      redirect(PATH.PAY_ACCOUNTS);
    },
  });
};
