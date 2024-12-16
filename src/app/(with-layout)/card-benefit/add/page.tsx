"use client";
import SearchBar from "@/app/(_components)/searchbar";
import { FormEvent, useState } from "react";
import CheckList from "./checklist";

export interface CardType {
  id: number;
  name: string;
}

export default function CardAddPage() {
  const [query, setQuery] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setQuery((e.target as HTMLFormElement).search.value);
  };

  return (
    <div className="space-y-5 h-full">
      <SearchBar onSubmit={onSubmit} />
      <CheckList query={query} />
    </div>
  );
}
