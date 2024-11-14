import Progressbar from "./progressbar";

export default function FundingStatus() {
  return (
    <div className="">
      <div className="flex justify-between mb-4">
        <h1 className="card-title">펀딩현황</h1>
        <span className="card-title">64%</span>
      </div>
      <Progressbar percent={64} />
      <div className="text-bd3 mt-3">목표 금액: 1억</div>
    </div>
  );
}
