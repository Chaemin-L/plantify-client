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
  sticky?: boolean;
}

export default function Select<T>({
  baseUrl,
  items,
  selectedItem,
  sticky = false,
}: Props<T>) {
  return (
    <ul
      className={clsx(
        "flex gap-2 select-none flex-wrap  bg-black ",
        sticky && "sticky top-0 z-20 pb-5"
      )}
    >
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
