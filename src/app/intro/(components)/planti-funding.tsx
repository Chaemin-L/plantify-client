import { FundingType } from "@/types/api/funding";
import ItemSlider from "../../(_components)/item-slider";
import FeatureLayout from "./feature-layout";

export default function PlantiFunding() {
  return (
    <FeatureLayout
      title="PlantiFunding"
      keyword="피프"
      description={`손쉬운 기부 펀딩, 피프\n쌓여있는 포인트로 언제 어디서나`}
    >
      <ItemSlider title="" items={data}></ItemSlider>
    </FeatureLayout>
  );
}

const data: FundingType[] = [
  {
    fundingId: 1,
    title: "장애인과 비 장애인의 같이가치 걷기 대회",
    content: "",
    image:
      "https://mud-kage.kakaocdn.net/dn/fBvim/btsJvcwcRwA/cyeKV3fbenJRQUFUD0DyJ0/c640.jpg",
    percent: 50,
    category: "DISABILITY",
    curAmount: 0,
    targetAmount: 0,
    organizationName: "",
  },

  {
    fundingId: 2,
    title: "장애인과 비 장애인의 같이가치 걷기 대회",
    content: "",
    image:
      "https://mud-kage.kakaocdn.net/dn/kK6pP/btsKlduRu5q/x5vkEjmFFkvyPEGXRi8UN0/c640.jpg",
    percent: 45,
    category: "ANIMAL",
    curAmount: 0,
    targetAmount: 0,
    organizationName: "",
  },
  {
    fundingId: 3,
    title: "장애아동의 즐거운 겨울방학을 응원해 주세요!",
    content: "",
    image:
      "https://mud-kage.kakaocdn.net/dn/iW7fN/btsJTMbFVO7/PRPBgnQvhV2KfDm5MC2WEK/c640.jpg",
    percent: 30,
    category: "DISABILITY",
    curAmount: 0,
    targetAmount: 0,
    organizationName: "",
  },
  {
    fundingId: 4,
    title: "대한이 살았다 : 다시 쓰는 일제강점기 역사와 오늘",
    content: "",
    image:
      "https://mud-kage.kakaocdn.net/dn/dptVVi/btsKoTVDTAS/LUOK2Zavd74ANZZQ0i1WU1/c640.jpg",
    percent: 22,
    category: "SOCIAL",
    curAmount: 0,
    targetAmount: 0,
    organizationName: "",
  },
  {
    fundingId: 5,
    title: "밑반찬 나눔으로 건강한 식생활을 지켜주세요.",
    content: "",
    image:
      "https://mud-kage.kakaocdn.net/dn/HzwDQ/btsKuSXYpnp/AovhYUnE4FK09zCC0hysUk/c640.jpg",
    percent: 7,
    category: "SOCIAL",
    curAmount: 0,
    targetAmount: 0,
    organizationName: "",
  },
  {
    fundingId: 6,
    title: "사라지는 꿀벌과 야생벌, 관찰과 기록으로 함께 지켜요!",
    content: "",
    image:
      "https://mud-kage.kakaocdn.net/dn/Ch2cD/btsJ1GXqx0R/KDnElNtCu7JAKViy4C7RE0/c640.jpg",
    percent: 76,
    category: "ENVIRONMENT",
    curAmount: 0,
    targetAmount: 0,
    organizationName: "",
  },
];
