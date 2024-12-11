import { CardType } from "@/types/api/card";
import { rotateCard } from "@/utils/rotateCard";
import { useEffect } from "react";

export default function CardItem({
  card_name,
  card_image,
  benefit_point,
}: CardType) {
  const isPositive = benefit_point > 0;

  useEffect(() => {
    rotateCard(`${card_name}_image`, `${card_name}_preview`);
  }, []);

  return (
    <>
      <div className=" flex gap-[3%]">
        <div className="w-1/4 flex justify-center items-center  rounded-xl overflow-hidden aspect-square">
          <img
            id={`${card_name}_preview`}
            className="max-w-full max-h-full"
            src={card_image}
            alt={`${card_name}이미지`}
          />
        </div>
        <div className=" flex flex-col justify-center gap-2">
          <span className="text-bd3 font-bold">{card_name}</span>
          <span className="text-t4">
            {isPositive ? `${benefit_point}원 포인트` : "혜택없음"}
          </span>
        </div>
      </div>
      <img hidden id={`${card_name}_image`} src={card_image} />
    </>
  );
}
