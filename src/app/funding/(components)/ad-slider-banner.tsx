import LinkSlider from "@/app/(_components)/link-slider";
import { PATH } from "@/lib/_shared/paths";

// dummy data
const links = [
  {
    href: PATH.FUNDING_COMPANY,
    title: "기부사 검색하러 가기",
    description: "기부사에 대해 더 깊이 알아보아요",
  },
  {
    href: "https://www.tossbank.com/",
    title: "토스뱅크",
    description: "은행을 바꾸는 은행, 토스은행",
  },
  {
    href: "https://www.hankyung.com/",
    title: "한국경제신문",
    description: "한경 60년 미래를 봅니다",
  },
];
export default function AdSliderBanner() {
  return (
    <div className="card">
      <LinkSlider links={links} />
    </div>
  );
}
