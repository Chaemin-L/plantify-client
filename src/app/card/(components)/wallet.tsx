"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import { PATH } from "@/lib/_shared/paths";
import Link from "next/link";

export default function Wallet() {
  return (
    <div className="my-card h-[300px]">
      <Swiper
        modules={[Pagination]}
        pagination={{ dynamicBullets: false, clickable: true }}
        spaceBetween={-200}
        slidesPerView={1}
        centeredSlides={true}
        direction="vertical"
        style={{
          height: "100%",
          overflow: "hidden",
        }}
      >
        <SwiperSlide>
          <Card thumbnail="https://asset-fe.tossbank.com/card/tossbank_card_vtip.png" />
        </SwiperSlide>
        <SwiperSlide className="">
          <Card thumbnail="https://d1c5n4ri2guedi.cloudfront.net/card/588/card_img/21345/588card.png" />
        </SwiperSlide>

        <SwiperSlide>
          <Link
            href={PATH.CARD_ADD}
            className=" w-[80%] bg-shadow-700 rounded-lg aspect-[1.6/1] flex justify-center items-center m-auto"
          >
            카드 추가하기 +
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const Card = ({ thumbnail }: { thumbnail: string }) => {
  return (
    <Swiper
      loop={true}
      effect={"flip"}
      modules={[EffectFlip]}
      className="relative w-full h-full"
      onClick={(swiper) => swiper.slideNext()}
    >
      <SwiperSlide>
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 aspect-[1.6/1] rotate-90 ">
          <img src={thumbnail} className=" m-auto" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* <div className="absolute left-1/2 -translate-x-1/2  aspect-[1.6/1] flex top-20 place-content-center "> */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 aspect-[1.6/1]  ">
          <div className="text-shadow-900  m-auto">asdf</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
