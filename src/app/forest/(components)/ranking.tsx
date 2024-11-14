import { PATH } from "@/lib/paths";
import Link from "next/link";

export default function Ranking() {
  return (
    <Link href={PATH.HOME} className="card h-[35%] ">
      <h1 className="card-title">명예의 전당 👑</h1>
    </Link>
  );
}
