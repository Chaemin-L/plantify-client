import Checkbox from "@/app/(_components)/checkbox";
import { SearchCardType } from "@/types/api/card";

interface Props {
  data: SearchCardType[];
  checkedCard: SearchCardType[];
  onCheck: (checkedCard: SearchCardType) => void;
}

export default function SearchResult({ data, checkedCard, onCheck }: Props) {
  return (
    <div className="flex flex-col px-5">
      {data
        .filter((card) => !checkedCard.includes(card) && card.addable)
        .map((card, idx) => (
          <Checkbox
            key={`${card.card_id}_${idx}`}
            label={card.card_name}
            onClick={() => onCheck(card)}
          />
        ))}
    </div>
  );
}
