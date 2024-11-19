import LinkSlider from "@/app/(_components)/link-slider";

// dummy data
const links = [
  {
    title: "기부사 검색하러 가기",
    description: "기부사에 대해 더 깊이 알아보아요",
  },
  {
    title: "광고 1",
    description: "광고 설명",
  },
  {
    title: "광고 2",
    description: "광고 설명",
  },
];
export default function AdSliderBanner() {
  return (
    <div className="card">
      <LinkSlider links={links} />
    </div>
  );
}
