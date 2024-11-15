"use client";

import clsx from "clsx";

export interface SelectItemType<T> {
  label: string;
  value: T;
}

interface Props<T> {
  items: SelectItemType<T>[];
  selectedItem: string;
  onClick: (value: T) => void;
}

export default function Select<T>({ items, selectedItem, onClick }: Props<T>) {
  return (
    <ul className="flex gap-2">
      {items.map(({ label, value }: SelectItemType<T>) => (
        <li
          key={`${value}`}
          onClick={() => onClick(value)}
          className={clsx(
            "rounded-full px-4 py-2 text-bd2 cursor-pointer",
            selectedItem === value
              ? "bg-accent-purple text-black"
              : "text-white bg-shadow-800"
          )}
        >
          {label}
        </li>
      ))}
    </ul>
  );
}
