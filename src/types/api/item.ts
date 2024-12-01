import { ItemCategoryType } from "../forest";

// export type CategoryType = "BACKGROUND" | "FLOWER" | "ETC";
export type CategoryType = "BACKGROUND" | "GROUND" | "TREE";

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
  myItemId: number;
  itemId: number;
  itemName: string;
  image: string; // api not yet
  category: CategoryType;
  quantity: number;
  userId: number;
}

export interface Position {
  posX: number;
  posY: number;
}
export interface MyUsingItemType extends Position {
  usingItemId: number;
  myItemId: number;
}

export interface PostUsingItem extends Position {
  myItemId: number;
  image: string; // api not yet
  category: ItemCategoryType;
}
