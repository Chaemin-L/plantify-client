import { kakaoAuthURL } from "@/config/api";
import Image from "next/image";
import Link from "next/link";
import FeatureLayout from "./feature-layout";
import ThreeLinesLoop from "./three-lines-loop";

export default function PlantiCTA() {
  return (
    <div className="h-screen relative">
      <FeatureLayout
        title="PlantiFy+"
        keyword="Plantify"
        description={`다양하게 확장 가능한 Plantify\n플랜티파이에서 지금 바로\n플랜티가 되어보세요!`}
      >
        <div className="w-full h-full flex flex-col justify-center items-center py-[20%]">
          <Image
            src="/icons/logo.png"
            width={200}
            height={200}
            alt="플랜티파이 로고"
            className=" w-32"
          />
          <div className="flex-1"></div>
        </div>
        <ThreeLinesLoop />
        {/* <div className="relative h-[500px]"> */}
        {/* </div> */}
      </FeatureLayout>
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
