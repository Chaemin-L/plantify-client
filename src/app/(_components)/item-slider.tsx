import Link from "next/link";
import Progressbar from "./progressbar";
import { PATH } from "@/lib/_shared/paths";

interface ItemType {
  id: number;
  title: string;
  category: string;
  percent: number;
  image: string;
}

interface Props {
  items: ItemType[];
}

export default function ItemSlider({ items }: Props) {
  return (
    <div className="overflow-auto">
      <ul className="flex overflow-auto gap-3 w-fit">
        {items.map(({ id, title, category, percent, image }) => (
          <li key={id} className="w-40">
            <Link
              href={`${PATH.FUNDRAISINGS_LIST}/${id}`}
              className="select-none cursor-pointer group hover:opacity-80"
            >
              <img
                src={image}
                className="w-40 aspect-[1.2/1] object-cover rounded-t-xl "
              />
              <div className="flex flex-col gap-2 bg-shadow-800 rounded-b-xl px-3 py-4">
                <span className="text-bd4 font-normal">{category}</span>
                <h1 className="text-bd3 max-md:text-bd4 line-clamp-1 group-hover:underline">
                  {title}
                </h1>
                <Progressbar isShort percent={percent} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    // <Swiper
    //   modules={[FreeMode]}
    //   spaceBetween={12}
    //   slidesPerView={2}
    //   freeMode={true}
    //   style={{ margin: -20, padding: 20 }}
    // >
    //   {items.map(({ title, category, percent, image }) => (
    //     <SwiperSlide className="select-none cursor-grab active:cursor-grabbing">
    //       <img src={image} className="rounded-t-xl" />
    //       <div className="flex flex-col gap-2 bg-shadow-800 rounded-b-xl px-3 py-4">
    //         <span className="text-bd4 font-normal">{category}</span>
    //         <h1 className="text-bd4 line-clamp-1">{title}</h1>
    //         <Progressbar percent={percent} />
    //       </div>
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
  );
}
