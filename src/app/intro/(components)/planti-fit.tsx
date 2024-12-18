import MyCardList from "@/app/(with-layout)/card-benefit/(components)/my-card-list";
import { GetMyCardRes } from "@/types/api/card";
import FeatureLayout from "./feature-layout";

export default function PlantiFit() {
  return (
    <FeatureLayout
      title="PlantiFit"
      keyword="피핏"
      description={`다양한 혜택 한 번에, 피핏\n숨겨진 카드 혜택까지 모두 모아`}
    >
      <MyCardList listData={dummyMyCardList} autoPlay />
    </FeatureLayout>
  );
}

export const dummyMyCardList: GetMyCardRes = [
  {
    card: {
      card_name: "현대",
      card_image:
        "https://d1c5n4ri2guedi.cloudfront.net/card/13/card_img/28201/13card.png",
      benefit_point: 10,
    },
  },

  {
    card: {
      card_name: "BC 바로 리워드 플러스",
      card_image:
        "https://d1c5n4ri2guedi.cloudfront.net/card/2347/card_img/32524/2347card.png",
      benefit_point: 10,
    },
  },

  {
    card: {
      card_name: "토스 신용카드",
      card_image:
        "https://d1c5n4ri2guedi.cloudfront.net/card/589/card_img/21346/589card.png",
      benefit_point: 10,
    },
  },

  {
    card: {
      card_name: "카카오뱅크 개인사업자 삼성카드",
      card_image:
        "https://d1c5n4ri2guedi.cloudfront.net/card/2420/card_img/28101/2420card.png",
      benefit_point: 10,
    },
  },

  {
    card: {
      card_name: "모니모A",
      card_image:
        "https://d1c5n4ri2guedi.cloudfront.net/card/2631/card_img/31783/2631card.png",
      benefit_point: 10,
    },
  },

  {
    card: {
      card_name: "컬리카드",
      card_image:
        "https://d1c5n4ri2guedi.cloudfront.net/card/2518/card_img/28798/2518card.png",
      benefit_point: 10,
    },
  },

  {
    card: {
      card_name: "T우주 신한카드",
      card_image:
        "https://d1c5n4ri2guedi.cloudfront.net/card/2302/card_img/23140/2302card.png",
      benefit_point: 10,
    },
  },
].map((data, idx) => {
  return {
    card_id: idx,
    myCard_id: idx,
    card: {
      ...data.card,
      company: "",
      type: "",
      benefits: [""],
      card_id: idx,
    },
  };
});
