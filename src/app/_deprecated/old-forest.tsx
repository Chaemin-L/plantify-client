import { PATH } from "@/lib/_shared/paths";
import Image from "next/image";
import Link from "next/link";
import FeatureGroup from "../(with-layout)/forest/(components)/feature-group";
import GoForest from "../(with-layout)/forest/(components)/go-forest";
import Ranking from "../(with-layout)/forest/(components)/ranking";
import EventSliderBanner from "../(with-layout)/pay/(components)/event-slider-banner";

export default function ForestPage() {
  return (
    <div className="flex flex-col gap-5 h-full">
      {/** 이벤트 */}
      <EventSliderBanner />

      {/** 숲 꾸미기 */}
      <GoForest />

      {/** 상점, 출석체크 */}
      <FeatureGroup />

      {/** 명예의 전당 */}
      <Ranking />

      <Link
        href={PATH.CHAT}
        className="fixed bottom-4 right-4  bg-shadow-600 rounded-full p-3"
      >
        <Image width={32} height={32} src="/icons/chat.svg" alt="채팅" />
      </Link>
    </div>
  );
}
