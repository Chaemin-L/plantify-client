"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { useRouter } from "next/navigation";

export interface LinkType {
  href?: string;
  title: string;
  description: string;
  icon?: string;
  onClick?: () => void;
}

interface Props {
  links: LinkType[];
}

export default function LinkSlider({ links }: Props) {
  const router = useRouter();
  return (
    <Swiper
      modules={[Autoplay]}
      pagination={{ dynamicBullets: true, clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        stopOnLastSlide: false,
        pauseOnMouseEnter: true,
      }}
      style={{ margin: -20, padding: 20, height: "120px" }}
    >
      {links.map(({ href, title, description, icon, onClick }, idx) => (
        <SwiperSlide className="select-none py-1" key={`${title}_${idx}`}>
          <button
            className="flex items-center h-full"
            onClick={() => (onClick ? onClick() : router.push(href!))}
          >
            <div className="space-y-1 max-w-[50%]">
              <h1 className=" text-t3">{title}</h1>
              <p className="text-bd3 max-xs:whitespace-pre-wrap">
                {description}
              </p>
            </div>
            {icon && (
              <img
                src={icon}
                className="absolute right-0 top-1/2 -translate-y-1/2 max-h-40 max-w-[40%]"
                alt="기부사 검색"
              />
            )}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
