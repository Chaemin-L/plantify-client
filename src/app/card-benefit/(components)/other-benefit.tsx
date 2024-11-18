"use client";
import { useState } from "react";
import CardItem, { CardItemType } from "./card-item";

// dummy data
const otherCards: CardItemType[] = Array(3).fill({
  name: "현대카드Zero Edtion2(포인트형)",
  point: 0,
});

export default function OtherBenefit() {
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleShowAll = () => setShowAll(!showAll);
  return (
    <section className="card">
      <h1 className="card-title ">다른 카드 혜택</h1>
      <ul className="flex flex-col gap-6 py-5">
        {showAll
          ? otherCards.map((otherCards, idx) => (
              <li key={`${otherCards.name}_${idx}`}>
                <CardItem {...otherCards} />
              </li>
            ))
          : otherCards.slice(0, 2).map((otherCards, idx) => (
              <li key={`${otherCards.name}_${idx}`}>
                <CardItem {...otherCards} />
              </li>
            ))}
      </ul>
      <div
        className="-mb-5 -mx-5 text-t4 text-shadow-300 text-center py-4 cursor-pointer border-t border-shadow-500"
        onClick={toggleShowAll}
      >
        {showAll ? "접기" : "내 카드 전체보기"}
      </div>
    </section>
  );
}
