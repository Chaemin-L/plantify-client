"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "@/styles/swiper.css";
import Link from "next/link";
import { PATH } from "@/lib/paths";

interface LinkType {
  title: string;
  description: string;
}

interface Props {
  links: LinkType[];
}

export default function LinkSlider({ links }: Props) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination={{ dynamicBullets: true, clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        stopOnLastSlide: false,
        pauseOnMouseEnter: true,
      }}
      style={{ margin: -20, padding: 20 }}
    >
      {links.map(({ title, description }) => (
        <SwiperSlide className="select-none space-y-1">
          <Link href={PATH.FUNDRAISINGS}>
            <h1 className="text-t4">{title}</h1>
            <p className="text-bd3"> {description}</p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
