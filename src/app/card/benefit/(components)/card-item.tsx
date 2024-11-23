export interface CardItemType {
  name: string;
  point: number;
}

export default function CardItem({ name, point }: CardItemType) {
  const isPositive = point > 0;
  return (
    <div className="ml-[5%] flex gap-[5%]">
      <div className="w-1/5 bg-gray-300 rounded-xl aspect-[1/1.5]" />
      <div className=" flex flex-col justify-center gap-2">
        <span className="text-bd3 font-bold">{name}</span>
        <span className="text-t4">
          {isPositive ? `${point}원 포인트` : "혜택없음"}
        </span>
      </div>
    </div>
  );
}
