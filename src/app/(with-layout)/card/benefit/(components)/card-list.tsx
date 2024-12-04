"use client";
import Accordion from "@/app/(_components)/accordion";
import CardItem from "./card-item";
import { BenefitCardListType } from "@/types/api/card";
import { useState } from "react";
import Loading from "@/app/(_components)/loading";

interface Props {
  listData: BenefitCardListType | null;
}

export default function CardList({ listData }: Props) {
  const [showAll, setShowAll] = useState<boolean>(false);
  const toggleShowAll = () => setShowAll(!showAll);

  if (!listData) {
    return <Loading />;
  }

  const topCard = listData.top_card;

  return (
    <>
      <section className="card">
        <Accordion>
          <div className="space-y-5">
            <h1 className="card-title">추천 카드</h1>
            <Accordion.Summary>
              <CardItem {...topCard} />
            </Accordion.Summary>
          </div>
          <Accordion.Details>
            <div className="ml-4 pt-7 text-bd3 font-bold flex flex-col gap-4">
              <div className="flex gap-10">
                <span>할인대상</span>
                <span>{topCard.discount_target}</span>
              </div>
              <div className="flex gap-10">
                <span>할인종류</span>
                <span>{topCard.discount_type}</span>
              </div>
            </div>
          </Accordion.Details>
        </Accordion>
      </section>
      <section className="card">
        <h1 className="card-title ">다른 카드 혜택</h1>
        <ul className="flex flex-col gap-6 py-5">
          {showAll
            ? listData.other_cards.map((data, idx) => (
                <li key={idx}>
                  <CardItem {...data} />
                </li>
              ))
            : listData.other_cards.slice(0, 2).map((data, idx) => (
                <li key={idx}>
                  <CardItem {...data} />
                </li>
              ))}
        </ul>
        <div
          className="-mb-5 -mx-5 text-t4 text-shadow-300 text-center py-4 cursor-pointer border-t border-shadow-500"
          onClick={toggleShowAll}
        >
          {showAll ? "접기" : "더보기"}
        </div>
      </section>
    </>
  );
}
