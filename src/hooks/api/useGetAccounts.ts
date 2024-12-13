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
  throw new Error();
}

export const useGetAccounts = () => {
  return useQuery({
    queryKey: ["pay", "accounts"],
    queryFn: async () => await getAccounts(),
  });
};
