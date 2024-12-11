"use client";
import Select, { SelectItemType } from "@/app/(_components)/select";
import Loading from "@/app/loading";
import { useGetStoreItemsByCategory } from "@/hooks/api/useGetStoreItemsByCategory";
import { usePostPurchaseItems } from "@/hooks/api/usePostPurchaseItems";
import { useModal } from "@/hooks/useModal";
import { PATH } from "@/lib/_shared/paths";
import { ItemType } from "@/types/api/item";
import { ItemCategoryType } from "@/types/forest";
import { showToast } from "@/utils/toast";
import { isItemCategoryType } from "@/utils/typeCheck";
import Image from "next/image";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import StoreItemCard from "../(components)/store-item-card";

const categories: SelectItemType<ItemCategoryType>[] = [
  { label: "땅", value: "GROUND" },
  { label: "나무", value: "TREE" },
  { label: "꽃", value: "FLOWER" },
  { label: "기타", value: "ETC" },
];

// const storeItems = [
//   { price: 100 },
//   { price: 200 },
//   { price: 400 },
//   { price: 500 },
//   { price: 700 },
//   { price: 800 },
// ].map((price, idx) => ({
//   ...price,
//   id: idx,
//   imgUrl: `/temp/forest/ground-item${idx + 1}.png`,
// }));

export default function Page() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "GROUND";
  const [itemId, setItemId] = useState<number>(0);

  if (!isItemCategoryType(category)) return notFound();

  const { data: storeItems } = useGetStoreItemsByCategory(category);
  // console.log(data);

  // TODO: user's coin, store data fetching api
  const { mutate } = usePostPurchaseItems();

  const userCoins = 1618;

  const { openModal, Modal, confirm } = useModal(
    "아이템을 구매하시겠습니까?",
    "구매"
  );

  useEffect(() => {
    if (confirm) {
      mutate({ itemId, quantity: 1 });
      showToast("아이템을 성공적으로 구매하였습니다!", "info");
    }
  }, [confirm]);

  const handlePurchase = (itemId: number) => {
    openModal();
    setItemId(itemId);
  };

  if (!storeItems) return <Loading />;

  return (
    <div className="flex flex-col gap-5">
      <Select
        baseUrl={PATH.FOREST_STORE}
        name="category"
        selected={category}
        items={categories}
      />
      <div className="w-full gap-2 flex justify-end items-center">
        <Image
          width={16}
          height={16}
          src="/icons/tree-coin.svg"
          alt="트리코인"
          className="w-4 h-4"
        />
        <span>{userCoins.toLocaleString()}</span>
      </div>
      <div className="grid-cols-3 w-full grid gap-3">
        {/* {storeItems.map((storeItem) => ( */}
        {storeItems.map((storeItem: ItemType) => (
          <StoreItemCard
            key={storeItem.itemId}
            {...storeItem}
            onClick={() => handlePurchase(storeItem.itemId)}
          />
        ))}
      </div>
      <Modal />
    </div>
  );
}
