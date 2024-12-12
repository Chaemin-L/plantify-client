import { kakaoAuthURL } from "@/config/api";
import Link from "next/link";
import FeatureLayout from "./(components)/feature-layout";

export default function PlantiCTA() {
  return (
    <FeatureLayout
      title="PlantiFy+"
      description={`다양하게 확장 가능한 플랜티파이\n플랜티파이에서 지금 바로\n플랜티가 되어보세요!`}
    >
      어쩌구
      <Link href={kakaoAuthURL}>
        <img
          src="/icons/kakao-login2.png"
          className="mx-auto"
          alt="카카오 로그인"
        />
      </Link>
    </FeatureLayout>
  );
}
