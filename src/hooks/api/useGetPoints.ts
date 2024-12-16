import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { PointType } from "@/types/api/pay";
import { useQuery } from "@tanstack/react-query";

export const POINT_QUERY_KEY = ["point"];

export async function getPoints() {
  const response: PointType = await fetchClient(`${API_ENDPOINTS.PAY}/points`);
  return response;
}

export const useGetPoints = () => {
  return useQuery({
    queryKey: POINT_QUERY_KEY,
    queryFn: async () => await getPoints(),
    staleTime: 1000 * 60 * 3, // 3 min
  });
};
