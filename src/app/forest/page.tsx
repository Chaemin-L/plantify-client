import FeatureGrid from "./(components)/feature-grid";
import Ranking from "./(components)/ranking";
import GoForest from "./(components)/go-forest";
import EventSliderBanner from "./(components)/event-slider-banner";

export default function ForestPage() {
  return (
    <div className="flex flex-col gap-5 h-full">
      {/** 이벤트 */}
      <EventSliderBanner />

      {/** 상점, 출석체크 */}
      <FeatureGrid />

      {/** 명예의 전당 */}
      <Ranking />

      {/** 숲 꾸미기 */}
      <GoForest />
    </div>
  );
}
