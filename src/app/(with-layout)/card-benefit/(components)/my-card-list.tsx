"use client";
import { useDeleteMyCard } from "@/hooks/api/useDeleteMyCard";
import { PATH } from "@/lib/_shared/paths";
import { GetMyCardRes, MyCardType } from "@/types/api/card";
import { rotateCard } from "@/utils/rotateCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// const listData: SearchCardType[] = Array(5).fill({
//   name: "카드이름",
//   image_url:
//     "https://d1c5n4ri2guedi.cloudfront.net/card/13/card_img/28201/13card.png",
//   company_name: "현대",
//   card_type: "타입",
//   card_id: 0,
//   benefits: [
//     { benefit_category: "혜택 카테고리1", benefit_description: "혜택 설명" },
//     { benefit_category: "혜택 카테고리2", benefit_description: "혜택 설명" },
//     { benefit_category: "혜택 카테고리3", benefit_description: "혜택 설명" },
//   ],
// });

interface Props {
  listData: GetMyCardRes;
  autoPlay?: boolean;
}

export default function MyCardList({ listData, autoPlay = false }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { mutate } = useDeleteMyCard();

  const handleDeleteCard = (myCard_id: number) => {
    mutate(myCard_id);
  };

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        preventClicks={autoPlay}
        autoplay={
          autoPlay && {
            delay: 1000,
            disableOnInteraction: false,
          }
        }
        loop={autoPlay}
        allowTouchMove={!autoPlay}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="flex w-full mt-5"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        direction="horizontal"
      >
        {listData.map((data, idx) => {
          return (
            <SwiperSlide
              key={`${data.myCard_id}_${idx}`}
              className="w-fit h-fit"
            >
              <SlideItem idx={idx} data={data} />
            </SwiperSlide>
          );
        })}
        {!autoPlay && (
          <SwiperSlide key="add-card" className="h-full">
            <Link
              href={PATH.CARD_BENEFIT_ADD}
              className="h-full w-full flex flex-col justify-center items-center mx-auto px-auto  "
            >
              <div className="w-full aspect-[1/1.5] bg-shadow-600 rounded-md flex justify-center items-center">
                +
              </div>
            </Link>
          </SwiperSlide>
        )}
      </Swiper>
      {!autoPlay && listData[activeIndex] && (
        <div className="mt-10 flex flex-col gap-5">
          <div>
            <div className="flex justify-between">
              <h2 className="text-t2 break-words">
                {listData[activeIndex]?.card.card_name}
              </h2>

              <button
                className="rounded-full px-3 aspect-square bg-shadow-700 text-bd3"
                onClick={() =>
                  handleDeleteCard(listData[activeIndex]?.myCard_id)
                }
              >
                X
              </button>
            </div>
            <span className="text-bd3 lg:text-bd2 text-shadow-300">
              {listData[activeIndex]?.card.company}
            </span>
          </div>
          <div className="flex flex-col gap-2 text-bd3 lg:text-bd2">
            {listData[activeIndex]?.card.benefits.map((benefit, idx) => (
              <p key={`${idx}_${listData[activeIndex].myCard_id}`}>
                • &nbsp;{benefit}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

interface SlideItemProps {
  idx: number;
  data: MyCardType;
}

const SlideItem = ({ data: myCard }: SlideItemProps) => {
  const {
    myCard_id,
    card: { card_image },
  } = myCard;

  useEffect(() => {
    rotateCard(`my_card_${myCard_id}_old`, `my_card_${myCard_id}_new`, false);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center ">
      <img
        id={`my_card_${myCard_id}_new`}
        src={card_image}
        className="max-w-full max-h-full"
      />
      <img hidden id={`my_card_${myCard_id}_old`} src={card_image} />
    </div>
  );
};
