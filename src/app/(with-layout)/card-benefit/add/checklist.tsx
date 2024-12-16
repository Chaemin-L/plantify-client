"use client";

import BottomFixedButton from "@/app/(_components)/bottom-fixed-button";
import Checkbox from "@/app/(_components)/checkbox";
import Loading from "@/app/loading";
import { useGetCardSearch } from "@/hooks/api/useGetCardSearch";
import { usePostMyCard } from "@/hooks/api/usePostMyCard";
import { SearchCardType } from "@/types/api/card";
import clsx from "clsx";
import { MouseEventHandler, useState } from "react";
import SearchResult from "./search-result";

interface Props {
  query: string;
}
export default function CheckList({ query }: Props) {
  const { data, isLoading } = useGetCardSearch(query);
  const [checkedCard, setCheckedCard] = useState<SearchCardType[]>([]);

  const { mutate } = usePostMyCard();

  const isEmpty = checkedCard.length === 0;

  const handleClick: MouseEventHandler = async (e) => {
    e.preventDefault();
    mutate(checkedCard.map((card) => card.card_id));
    setCheckedCard([]);
  };

  if (isLoading)
    return (
      <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <Loading />
      </div>
    );

  const checkAll = () => {
    for (let i = 0; i < data!.length; i++) {
      if (!checkedCard.includes(data![i])) {
        return false;
      }
    }
    return true;
  };

  const onCheckAll = () => {
    const isAllChecked = checkAll();

    if (isAllChecked) {
      setCheckedCard(checkedCard?.filter((card) => !data!.includes(card)));
    } else {
      data!.forEach((card) => {
        if (!checkedCard?.includes(card)) {
          setCheckedCard((checkedCard) => [...checkedCard, card]);
        }
      });
    }
  };

  const onCheck = (card: SearchCardType) => {
    if (checkedCard.includes(card)) {
      setCheckedCard(checkedCard.filter((c) => c.card_id !== card.card_id));
    } else {
      setCheckedCard([...checkedCard, card]);
    }
  };

  return (
    <div className="flex flex-col relative ">
      {(!isEmpty || query) && (
        <>
          <div className="px-5">
            <Checkbox label="전체 선택" onClick={onCheckAll} />
          </div>
          <div className="bg-shadow-200 h-[1px] w-full" />
        </>
      )}

      <div
        className={clsx(!checkedCard.length && "hidden", "flex flex-col px-5")}
      >
        {checkedCard.map((card, idx) => (
          <Checkbox
            key={`${card.card_id}_${idx}`}
            label={card.name}
            value={card.card_id}
            checked
            onChange={() => onCheck(card)}
          />
        ))}
      </div>

      <SearchResult data={data!} checkedCard={checkedCard} onCheck={onCheck} />
      <BottomFixedButton onClick={handleClick}>확인</BottomFixedButton>
    </div>
  );
}
