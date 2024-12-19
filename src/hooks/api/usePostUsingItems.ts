import { UpdateUsingItemsRes } from "@/types/api/item";
import { gql, useMutation } from "@apollo/client";

const CREATE_USING_ITEMS = gql`
  mutation ManageUsingItems($actions: [UsingItemActionInput!]!) {
    manageUsingItems(actions: $actions) {
      myItemId
    }
  }
`;

const POST_USING_ITEMS = gql`
  mutation ManageUsingItems($actions: [UsingItemActionInput!]!) {
    manageUsingItems(actions: $actions) {
      myItemId
      posX
      posY
    }
  }
`;

export function usePostCreateUsingItems() {
  return useMutation(CREATE_USING_ITEMS);
}

export function usePostUpdateUsingItems() {
  return useMutation<UpdateUsingItemsRes>(POST_USING_ITEMS);
}
