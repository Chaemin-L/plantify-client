"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export interface SelectItemType<T> {
  label: string;
  value: T;
}

interface Props<T> {
  baseUrl: string;
  name: string;
  selected: string;
  items: SelectItemType<T>[];
  sticky?: boolean;
}

export default function Select<T>({
  baseUrl,
  name,
  selected,
  items,
  sticky = false,
}: Props<T>) {
  const router = useRouter();
  return (
    <ul
      className={clsx(
        "flex gap-2 select-none flex-wrap  bg-black ",
        sticky && "sticky top-0 z-20 pb-5"
      )}
    >
      {items.map(({ label, value }: SelectItemType<T>) => (
        <button
          key={`${value}`}
          className={clsx(
            "rounded-full px-4 py-2 text-bd2 cursor-pointer whitespace-nowrap",
            selected === value
              ? "bg-accent-purple text-black"
              : "text-white bg-shadow-800"
          )}
          onClick={() => router.replace(`${baseUrl}?${name}=${value}`)}
        >
          {label}
        </button>
      ))}
    </ul>
  );
}
