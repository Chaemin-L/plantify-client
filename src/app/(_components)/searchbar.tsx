import Image from "next/image";
import { FormEventHandler } from "react";

interface Props {
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export default function SearchBar({ onSubmit }: Props) {
  return (
    <form
      className="flex gap-3 items-center bg-shadow-800 rounded-full px-6 py-3"
      onSubmit={onSubmit}
    >
      <input
        type="search"
        name="search"
        className="flex-1 bg-transparent focus:outline-0 text-t4"
        autoFocus
      />
      <button type="submit">
        <Image src="/icons/search.svg" width={16} height={16} alt="검색" />
      </button>
    </form>
  );
}
