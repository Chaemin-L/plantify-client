"use client";
import Accordion from "@/app/(_components)/accordion";
import { useGetCardBenefit } from "@/hooks/api/useGetCardBenefit";
import { BenefitCardType } from "@/types/api/card";
import { BenefitCategory } from "@/types/card";
import { useState } from "react";
import AllCardItem from "./all-card-item";

interface Props {
  category: BenefitCategory;
}

export default function AllCardList({ category }: Props) {
  const [showAll, setShowAll] = useState<boolean>(false);

  const { data: listData, isFetching } = useGetCardBenefit(category);
  const toggleShowAll = () => setShowAll(!showAll);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="card">
        <Accordion>
          <div className="space-y-5">
            <h1 className="card-title">추천 카드</h1>
            <Accordion.Summary>
              <AllCardItem {...listData.top_card} />
            </Accordion.Summary>
          </div>
          <Accordion.Details>
            <div className="ml-4 pt-7 text-bd3 font-bold flex flex-col gap-4">
              <div className="flex gap-10">
                <span>할인대상</span>
                <span>{listData.top_card.discount_target}</span>
              </div>
              <div className="flex gap-10">
                <span>할인종류</span>
                <span>{listData.top_card.discount_type}</span>
              </div>
            </div>
          </Accordion.Details>
        </Accordion>
      </section>
      <section className="card">
        <h1 className="card-title ">다른 카드 혜택</h1>
        <ul className="flex flex-col gap-6 py-5">
          {showAll
            ? listData.other_cards.map((data: BenefitCardType, idx: number) => (
                <li key={`${idx}_${data.card_name}`}>
                  <AllCardItem {...data} />
                </li>
              ))
            : listData.other_cards
                .slice(0, 2)
                .map((data: BenefitCardType, idx: number) => (
                  <li key={`${idx}_${data.card_name}`}>
                    <AllCardItem {...data} />
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
