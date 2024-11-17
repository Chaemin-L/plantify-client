"use client";

import { PATH } from "@/lib/paths";
import Link from "next/link";
import { useEffect } from "react";

export default function NotFound({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="flex justify-around items-center flex-col h-full">
      <div className="flex flex-col text-center gap-4">
        <h1 className="text-t1">404</h1>
        <p className="text-t2">잘못된 접근입니다</p>
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
