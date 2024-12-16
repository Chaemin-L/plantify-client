import { PATH } from "@/lib/_shared/paths";
import Image from "next/image";
import Link from "next/link";

export default function StoreBtn() {
  return (
    <>
      <Link
        href={PATH.FOREST_STORE}
        className=" absolute right-24 bottom-4 p-2 rounded-full bg-accent-purple w-fit aspect-square text-shadow-900 z-30 shadow-lg "
      >
        <Image
          src="/icons/shopping.webp"
          blurDataURL="/icons/shopping.webp"
          draggable={false}
          width={48}
          height={48}
          alt="보관함"
        />
      </Link>
    </>
  );
}
