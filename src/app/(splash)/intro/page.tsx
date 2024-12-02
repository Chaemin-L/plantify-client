import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-between p-4 h-full">
      <div className="pt-40 flex-1 flex flex-col gap-2">
        <h1 className="text-t1">안녕하세요</h1>
        <p>가치 있는 소비 습관</p>
      </div>
      <Link href="/api/auth">
        <img src="/icons/kakao-login2.png" className="mx-auto" />
      </Link>
    </div>
  );
}
