import { UpdateUsingItemsRes } from "@/types/api/item";
import { gql, useMutation } from "@apollo/client";
import { GET_USING_ITEMS } from "./useGetUsingMyItems";

const CREATE_USING_ITEMS = gql`
  mutation ManageUsingItems($actions: [UsingItemActionInput!]!) {
    manageUsingItems(actions: $actions) {
      id
      myItemId
      __typename
    }
  }
`;

const POST_USING_ITEMS = gql`
  mutation ManageUsingItems($actions: [UsingItemActionInput!]!) {
    manageUsingItems(actions: $actions) {
      id
      myItemId
      posX
      posY
      __typename
    }
  }
`;

export function usePostCreateUsingItems() {
  return useMutation(CREATE_USING_ITEMS, {
    refetchQueries: () => [
      {
        query: GET_USING_ITEMS,
      },
    ],
  });
}

export function usePostUpdateUsingItems() {
  return useMutation<UpdateUsingItemsRes>(POST_USING_ITEMS, {
    refetchQueries: () => [
      {
        query: GET_USING_ITEMS,
      },
    ],
  });
}
