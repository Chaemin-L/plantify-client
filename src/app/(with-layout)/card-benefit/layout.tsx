import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantify - 더 큰 카드 혜택 추천",
  description: "사용처에서 혜택이 큰 카드들을 추천해요",
  keywords: [
    "plantify",
    "card",
    "benefit",
    "recommend",
    "카드",
    "추천",
    "혜택",
  ],
};

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="space-y-5">
      <>{children}</>
    </div>
  );
}
