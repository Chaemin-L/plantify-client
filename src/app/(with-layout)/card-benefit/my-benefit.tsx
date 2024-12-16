import { PATH } from "@/lib/_shared/paths";
import { getMyCards } from "@/services/card";
import Link from "next/link";
import MyCardList from "./(components)/my-card-list";

interface Props {
  token: string;
}

export default async function MyBenefit({ token }: Props) {
  const data = await getMyCards(token);
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-t2">어디서 결제할 예정이신가요?</h1>
      <MyCardList />

      <Link href={PATH.CARD_BENEFIT_ADD}>카드 추가하기</Link>
    </div>
  );
}
