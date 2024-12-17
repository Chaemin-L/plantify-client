import { API_ENDPOINTS } from "@/config/api";
import fetchClient from "@/lib/fetchClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function deleteMyCard(cardId: number) {
  const response = await fetchClient(`${API_ENDPOINTS.CARD_MY}/${cardId}`, {
    method: "DELETE",
  });
  return response;
}

export const useDeleteMyCard = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (cardId: number) => await deleteMyCard(cardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["my_cards"] });
    },
  });
};
