import { gql, useQuery } from "@apollo/client";

const GET_USING_ITEMS = gql`
  query getAllUsingItemsByUser {
    getAllUsingItemsByUser {
      id
      myItemId
      imageUri
      posX
      posY
      category
      createdAt
      updatedAt
    }
  }
`;

export function useGetUsingItems() {
  return useQuery(GET_USING_ITEMS);
}
