import Image from "next/image";
import FeatureLayout from "./feature-layout";

export default function PlantiForest() {
  return (
    <FeatureLayout
      title="PlantiForest"
      keyword="피포"
      description={`나만의 숲꾸미기, 피포\n자유롭게 꾸미는 내 손 안의 숲 `}
    >
      <Image
        src="/temp/intro-forest.png"
        width={500}
        height={500}
        alt="숲꾸 예시 이미지"
        loading="lazy"
      />
    </FeatureLayout>
  );
}
