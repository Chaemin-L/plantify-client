import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { AccountType } from "@/types/api/pay";
import { useQuery } from "@tanstack/react-query";

export const ACCOUNT_QUERY_KEY = ["accounts"];

export async function getAccounts() {
  const data: AccountType[] = await fetchClient(
    `${API_ENDPOINTS.PAY}/accounts`
  );
  return data;
}

export const useGetAccounts = () => {
  return useQuery({
    queryKey: ACCOUNT_QUERY_KEY,
    queryFn: async () => await getAccounts(),
    refetchOnMount: "always",
  });
};
