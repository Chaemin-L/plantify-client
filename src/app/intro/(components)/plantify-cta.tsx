import { kakaoAuthURL } from "@/config/api";
import Link from "next/link";
import FeatureLayout from "./feature-layout";

export default function PlantiCTA() {
  return (
    <div className="h-full relative">
      <FeatureLayout
        title="PlantiFy+"
        description={`다양하게 확장 가능한 플랜티파이\n플랜티파이에서 지금 바로\n플랜티가 되어보세요!`}
      ></FeatureLayout>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <Link href={kakaoAuthURL}>
          <img
            src="/icons/kakao-login2.png"
            className="mx-auto"
            alt="카카오 로그인"
          />
        </Link>
      </div>
    </div>
  );
}
