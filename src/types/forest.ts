import { CategoryType } from "./api/item";

export const ItemCategory: CategoryType[] = ["GROUND", "TREE", "FLOWER", "ETC"];

export type ItemCategoryType = (typeof ItemCategory)[number];
