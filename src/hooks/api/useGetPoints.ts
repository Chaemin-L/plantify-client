import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { FinalResponse } from "@/types/api/common";
import { PointType } from "@/types/api/pay";
import { useQuery } from "@tanstack/react-query";

export const POINT_QUERY_KEY = ["point"];

export async function getPoints() {
  const response: FinalResponse<PointType> = await fetchClient(
    `${API_ENDPOINTS.PAY}/points`
  );
  if (response.status === 200) return response.data;
  throw new Error("포인트를 가져오는데 실패했습니다");
}

export const useGetPoints = () => {
  return useQuery({
    queryKey: POINT_QUERY_KEY,
    queryFn: async () => await getPoints(),
    staleTime: 1000 * 60 * 3, // 3 min
  });
};
