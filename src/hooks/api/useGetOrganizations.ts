import { getOrganizations } from "@/services/funding";
import { useQuery } from "@tanstack/react-query";

// OK
export const useGetOrganizations = () => {
  return useQuery({
    queryKey: ["organization"],
    queryFn: async () => {
      return await getOrganizations();
    },
  });
};
