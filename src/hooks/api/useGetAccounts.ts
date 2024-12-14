import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse } from "@/types/api/common";
import { AccountType } from "@/types/api/pay";
import { useQuery } from "@tanstack/react-query";

export async function getAccounts() {
  const data: FinalResponse<AccountType[]> = await fetchClient(
    `${API_ENDPOINTS.PAY}/accounts`
  );
  if (data.status === 200) return data.data;
  throw new Error("계좌 정보를 가져오는데에 문제가 생겼습니다");
}

export const useGetAccounts = () => {
  return useQuery({
    queryKey: ["accounts"],
    queryFn: async () => await getAccounts(),
    refetchOnMount: "always",
  });
};
