"use client";

import clsx from "clsx";
import Link from "next/link";

export interface SelectItemType<T> {
  label: string;
  value: T;
}

interface Props<T> {
  baseUrl: string;
  items: SelectItemType<T>[];
  selectedItem: string;
}

export default function Select<T>({ baseUrl, items, selectedItem }: Props<T>) {
  return (
    <ul className="flex gap-2 select-none flex-wrap">
      {items.map(({ label, value }: SelectItemType<T>) => (
        <Link
          key={`${value}`}
          href={`${baseUrl}/${value}`}
          className={clsx(
            "rounded-full px-4 py-2 text-bd2 cursor-pointer whitespace-nowrap",
            selectedItem === value
              ? "bg-accent-purple text-black"
              : "text-white bg-shadow-800"
          )}
        >
          {label}
        </Link>
      ))}
    </ul>
  );
}
