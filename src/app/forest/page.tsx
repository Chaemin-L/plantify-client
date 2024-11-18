import Ranking from "./(components)/ranking";
import GoForest from "./(components)/go-forest";
import EventSliderBanner from "./(components)/event-slider-banner";
import { PATH } from "@/lib/_shared/paths";
import FeatureCard from "./(components)/feature-card";

const menuTabInfo = [
  {
    title: "상점",
    href: PATH.HOME,
    thumbnail: "/illusts/3d-forest.svg",
  },
  {
    title: "출석체크",
    href: PATH.HOME,
    thumbnail: "/illusts/3d-forest.svg",
  },
];

export default function ForestPage() {
  return (
    <div className="flex flex-col gap-5 h-full">
      {/** 이벤트 */}
      <EventSliderBanner />

      {/** 상점, 출석체크 */}
      <div className="flex gap-4">
        {menuTabInfo.map((item, idx) => (
          <FeatureCard key={`${item.title}_${idx}`} {...item} />
        ))}
      </div>

      {/** 명예의 전당 */}
      <Ranking />

      {/** 숲 꾸미기 */}
      <GoForest />
    </div>
  );
}
