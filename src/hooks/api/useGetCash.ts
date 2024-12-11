import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { CashType } from "@/types/api/cash";
import { FinalResponse } from "@/types/api/common";
import { useQuery } from "@tanstack/react-query";

// OK
export async function getCash() {
  const data: FinalResponse<CashType> = await fetchClient(
    `${API_ENDPOINTS.CASH}`
  );
  if (data.status === 200) return data.data;
  throw new Error();
}

export const useGetCash = () => {
  return useQuery({
    queryKey: ["cash"],
    queryFn: async () => await getCash(),
  });
};
