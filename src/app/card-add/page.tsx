import BottomFixedButton from "../(_components)/bottom-fixed-button";
import SearchBar from "../(_components)/searchbar";
import CheckList from "./(components)/checklist";

export interface CardType {
  id: number;
  name: string;
}

const cardList = [
  { id: 1, name: "카드1" },
  { id: 2, name: "카드2" },
  { id: 3, name: "카드3" },
  { id: 4, name: "카드4" },
  { id: 5, name: "카드5" },
  { id: 6, name: "카드6" },
  { id: 7, name: "카드7" },
];

export default function CardAddPage() {
  return (
    <div className="space-y-5 h-full">
      <SearchBar />
      <CheckList cardList={cardList} />
      <BottomFixedButton />
    </div>
  );
}
