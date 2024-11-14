import AdSliderBanner from "./(components)/ad-slider-banner";
import BestFunding from "./(components)/best-funding";
import FundingList from "./(components)/funding-list";

export default function FundraisingsPage() {
  // TODO: data fetch
  return (
    <div className="flex flex-col gap-5">
      {/** 슬라이더 */}
      <AdSliderBanner />

      {/** 베스트 펀딩 */}
      <BestFunding />

      {/** 펀딩 리스트 */}
      <FundingList />
    </div>
  );
}
