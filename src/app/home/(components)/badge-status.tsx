export default function BadgeStatusSection() {
  return (
    <div className="card flex justify-between gap-[10%]">
      <img src="/illusts/3d-forest.svg" className="w-[50%]" />
      <div className="flex-grow flex flex-col text-left justify-center gap-5">
        <div className="flex flex-col">
          <span className="text-bd3">획득한 배지</span>
          <span className="card-title">3개</span>
        </div>
        <div className="flex flex-col">
          <span className="text-bd3">성공한 펀딩</span>
          <span className="card-title">5개</span>
        </div>
      </div>
    </div>
  );
}
