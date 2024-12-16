import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { OrganizationType } from "@/types/api/funding";
import { useQuery } from "@tanstack/react-query";

// OK
export async function getOrganizations() {
  const data: OrganizationType[] = await fetchClient(
    `${API_ENDPOINTS.FUNDING}/organizations`
  );
  return data;
}

// OK
export const useGetOrganizations = () => {
  return useQuery({
    queryKey: ["organization"],
    queryFn: async () => {
      return await getOrganizations();
    },
  });
};
