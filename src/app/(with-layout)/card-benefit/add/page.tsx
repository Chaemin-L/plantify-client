"use client";
import BottomFixedButton from "@/app/(_components)/bottom-fixed-button";
import SearchBar from "@/app/(_components)/searchbar";
import { FormEvent, useState } from "react";
import CheckList from "./checklist";

export interface CardType {
  id: number;
  name: string;
}

// const cardList = [
//   { id: 1, name: "카드1" },
//   { id: 2, name: "카드2" },
//   { id: 3, name: "카드3" },
//   { id: 4, name: "카드4" },
//   { id: 5, name: "카드5" },
//   { id: 6, name: "카드6" },
//   { id: 7, name: "카드7" },
// ];

export default function CardAddPage() {
  const [query, setQuery] = useState("");
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setQuery(e.target.search.value);
  };

  return (
    <div className="space-y-5 h-full">
      <SearchBar onSubmit={onSubmit} />
      <CheckList query={query} />
      <BottomFixedButton>확인</BottomFixedButton>
    </div>
  );
}
