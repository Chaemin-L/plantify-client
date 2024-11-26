"use client";

import { PATH } from "@/lib/_shared/paths";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="flex justify-around items-center flex-col h-full">
      <div className="flex flex-col text-center gap-4">
        <h1 className="text-t1">{error.name}</h1>
        <p className="text-t2">{error.message}</p>
      </div>
      <Link
        href={PATH.HOME}
        className="bg-accent-red rounded-full px-4 py-2 font-bold"
      >
        홈화면으로
      </Link>
    </div>
  );
}
