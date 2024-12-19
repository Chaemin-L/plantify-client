import { gql, useQuery } from "@apollo/client";

export const GET_USING_ITEMS = gql`
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
      __typename
    }
  }
`;

export function useGetUsingItems() {
  return useQuery(GET_USING_ITEMS);
}
