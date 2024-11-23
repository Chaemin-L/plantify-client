export type CategoryType = "BACKGROUND" | "FLOWER" | "ETC";

export interface ItemType {
  itemId: number;
  userId: number;
  name: string;
  price: number;
  imageUri: string;
  category: CategoryType;
  createdAt: Date;
  updatedAt: Date;
}

export interface MyItemType {
  usingItemId: number;
  myItemId: number;
  posX: number;
  posY: number;
}

export interface Position {
  posX: number;
  posY: number;
}

export interface GetUsingMyItemRequest extends Position {
  myItemId: number;
}
