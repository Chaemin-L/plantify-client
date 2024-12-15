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
    title: "이벤트 1",
    description: "이벤트 설명",
  },
  {
    title: "이벤트 2",
    description: "이벤트 설명",
  },
];

export default function EventSliderBanner() {
  return (
    <div className="card h-fit">
      <LinkSlider links={events} />
    </div>
  );
}
