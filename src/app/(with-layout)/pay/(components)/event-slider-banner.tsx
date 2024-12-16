"use client";
import LinkSlider, { LinkType } from "@/app/(_components)/link-slider";
import { showToast } from "@/utils/toast";

// dummy data
const events: LinkType[] = [
  {
    title: "출석체크 이벤트!",
    description: "매일 출석하고\n5캐시를 받아보세요",
    icon: "/icons/dart.svg",
    onClick: () => showToast("어쩌구", "info"),
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

export default function EventSliderBanner() {
  return (
    <div className="card h-fit">
      <LinkSlider links={events} />
    </div>
  );
}
