import { PATH } from "@/lib/_shared/paths";
import Link from "next/link";

export default function GoForest() {
  return (
    <Link
      href={PATH.HOME}
      className="relative h-full bg-accent-green rounded-t-xl -mx-4 -mb-9 text-black p-5"
    >
      <span className="text-bd1">나만의 숲을 만들어요</span>
      <h1 className="text-t1">숲 꾸미기</h1>
      <img
        src="/illusts/3d-forest.svg"
        className="absolute bottom-3 right-3 w-[240px]"
      />
    </Link>
  );
}
