import Link from "next/link";
import FeatureLayout from "./(components)/feature-layout";

const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
const CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET;

export default function PlantiCTA() {
  const kakaoAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&response_type=code`;

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
