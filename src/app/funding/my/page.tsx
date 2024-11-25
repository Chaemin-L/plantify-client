import { youth } from "../(_dummy)/list-data";
import FundingList from "../(components)/funding-list";

export default function MyFundingPage() {
  // TODO: my funding list data fetching
  return (
    <div className="flex flex-col gap-5 pt-2">
      <h1 className="text-t2 ">내 펀딩</h1>
      <FundingList showProgress listData={youth} />
    </div>
  );
}
