"use client";

import Checkbox from "@/app/(_components)/checkbox";
import clsx from "clsx";
import { useState } from "react";
import { CardType } from "./page";

export default function CheckList({ cardList }: { cardList: CardType[] }) {
  const [checkedCard, setCheckedCard] = useState<CardType[]>([]);

  const checkAll = () => {
    for (let i = 0; i < cardList.length; i++) {
      if (!checkedCard.includes(cardList[i])) {
        return false;
      }
    }
    return true;
  };

  const onCheckAll = () => {
    const isAllChecked = checkAll();

    if (isAllChecked) {
      setCheckedCard(checkedCard.filter((card) => !cardList.includes(card)));
    } else {
      cardList.forEach((card) => {
        if (!checkedCard.includes(card)) {
          setCheckedCard((checkedCard) => [...checkedCard, card]);
        }
      });
    }
  };

  const onCheck = (card: CardType) => {
    if (checkedCard.includes(card)) {
      setCheckedCard(checkedCard.filter((c) => c.id !== card.id));
    } else {
      setCheckedCard([...checkedCard, card]);
    }
  };

  return (
    <div className="flex flex-col relative ">
      <div className="px-5">
        <Checkbox label="전체 선택" onClick={onCheckAll} />
      </div>
      <div className="bg-shadow-200 h-[1px] w-full" />

      <div
        className={clsx("flex flex-col px-5", !checkedCard.length && "hidden")}
      >
        {checkedCard.map((card) => (
          <Checkbox
            key={card.id}
            label={card.name}
            value={card.id}
            checked
            onClick={() => onCheck(card)}
          />
        ))}
      </div>

      <div className="flex flex-col px-5">
        {cardList
          .filter((card) => !checkedCard.includes(card))
          .map((card) => (
            <Checkbox
              key={card.id}
              label={card.name}
              onClick={() => onCheck(card)}
            />
          ))}
      </div>
    </div>
  );
}
