import LinkSlider from "@/app/(_components)/link-slider";
import { PATH } from "@/lib/_shared/paths";

// dummy data
const links = [
  {
    href: PATH.FUNDING_ORGANIZATION,
    title: "기부사 검색",
    description: "기부사에 대해\n더 깊이 알아보아요",
    icon: "/icons/company.svg",
  },
  {
    href: "https://www.tossbank.com/",
    title: "토스뱅크",
    description: "은행을 바꾸는 은행,\n토스뱅크",
    icon: "/icons/toss_bank2.svg",
    // icon: "https://threedio-prod-var-cdn.icons8.com/qh/preview_sets/previews/Qqcyav2BkXdny30Y.webp",
  },
  {
    href: "https://www.hankyung.com/",
    title: "한국경제신문",
    description: "한경 60년 미래를 봅니다",
    icon: "/icons/news.svg",
  },
];
export default function AdSliderBanner() {
  return (
    <div className="card">
      <LinkSlider links={links} />
    </div>
  );
}
