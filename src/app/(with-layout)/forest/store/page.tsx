"use client";
import Image from "next/image";
import { PATH } from "@/lib/_shared/paths";
import StoreItemCard from "../(components)/store-item-card";
import { useModal } from "@/hooks/useModal";
import { notFound, useSearchParams } from "next/navigation";
import Select from "@/app/(_components)/select";
import { isItemCategoryType } from "@/utils/typeCheck";

const categories = [
  { label: "전체", value: "all" },
  { label: "하늘", value: "sky" },
  { label: "땅", value: "ground" },
];

const storeItems = [
  { price: 100 },
  { price: 200 },
  { price: 400 },
  { price: 500 },
  { price: 700 },
  { price: 800 },
].map((price, idx) => ({
  ...price,
  id: idx,
  imgUrl: `/temp/forest/ground-item${idx + 1}.png`,
}));

export default function Page() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "all";

  if (!isItemCategoryType(category)) return notFound();

  // const { data } = useStoreItemsQuery();
  // const { data } = useStoreItemsByCategoryQuery("BACKGROUND");
  // console.log(data);

  // TODO: user's coin, store data fetching api
  const userCoins = 1618;

  const { openModal, Modal, confirm } = useModal(
    "아이템을 구매하시겠습니까?",
    "구매"
  );

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
        {storeItems.map((storeItem) => (
          <StoreItemCard
            key={storeItem.id}
            {...storeItem}
            onClick={openModal}
          />
        ))}
      </div>
      <Modal />
    </div>
  );
}
