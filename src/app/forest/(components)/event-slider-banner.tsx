import LinkSlider from "@/app/(_components)/link-slider";

// dummy data
const events = [
  {
    title: "출석체크 이벤트!",
    description: "매일 출석하고 5캐시를 받아보세요",
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
