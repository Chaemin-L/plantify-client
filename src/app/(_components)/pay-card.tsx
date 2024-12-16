"use client";
import { PayType, PointType } from "@/types/api/pay";
import Image from "next/image";
import { MouseEventHandler, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-flip";
import { EffectFlip } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  pay: PayType;
  points: PointType;
}

export default function PayCard({ pay, points }: Props) {
  const [fullScreen, setFullScreen] = useState<boolean | HTMLImageElement>(
    false
  );
  const qrcodeRef = useRef<HTMLImageElement>(null);
  const barcodeRef = useRef<HTMLImageElement>(null);
  const loading = useRef<boolean>(false);

  const hasPay = pay !== null;
  const payNum = pay.payNum
    .toString()
    .split("")
    .map((num, idx) => (idx % 4 ? num : "  " + num));

  const handleMoveBodyTransitionEnd = (target: HTMLImageElement) => {
    setFullScreen(target);
    document.body.getElementsByTagName("main")[0].appendChild(target);
    target.removeEventListener("transitionend", () =>
      handleMoveBodyTransitionEnd(target)
    );
    loading.current = false;
  };

  const handleMoveOriginTransitionEnd = (target: HTMLImageElement) => {
    if (target.id === "qrcode") {
      document.getElementById("pay")!.prepend(target);
    } else {
      document.getElementById("pay")!.appendChild(target);
    }
    setFullScreen(false);
    target.removeEventListener("transitionend", () =>
      handleMoveOriginTransitionEnd(target)
    );
    loading.current = false;
  };

  const handleBarcodeFullScreenMode: MouseEventHandler<HTMLImageElement> = (
    e
  ) => {
    const target = e.target as HTMLImageElement;
    loading.current = true;
    target.style.position = "absolute";
    target.style.right = "50%";
    target.style.top = "45%";
    target.style.zIndex = "999";
    target.style.transform = "rotate(90deg) scale(2) translate(0, -100%)";
    target.style.transition = "all 0.3s";

    target.addEventListener("transitionend", () =>
      handleMoveBodyTransitionEnd(target)
    );
  };

  const handleQRFullScreenMode: MouseEventHandler<HTMLImageElement> = (e) => {
    const target = e.target as HTMLImageElement;
    loading.current = true;
    target.style.position = "absolute";
    target.style.right = "50%";
    target.style.top = "45%";
    target.style.zIndex = "999";
    target.style.transform = "scale(3) translate(18%, 0)";
    target.style.transition = "all 0.3s";

    target.addEventListener("transitionend", () => {
      handleMoveBodyTransitionEnd(target);
    });
  };

  const handleCancelFullScreenMode = (target: HTMLImageElement) => {
    (target as HTMLElement & { style: object }).style = {
      ...target.style,
      position: "static",
      transition: "all 0.3s",
      zIndex: "0",
      transform: "scale(1/2) translate(0, 0)",
      webkitTransform: "rotate(90deg) scale(2) translate(0, -100%)",
    };
    target.addEventListener("transitionend", () =>
      handleMoveOriginTransitionEnd(target)
    );
  };

  return (
    <>
      {hasPay && (
        <Swiper
          loop={true}
          effect={"flip"}
          modules={[EffectFlip]}
          className="relative w-full h-full"
          onClick={(swiper) => swiper.slideNext()}
          noSwipingClass="no-swiper"
        >
          <SwiperSlide className="card aspect-[1.6/1] w-full min-h-36 overflow-hidden p-0 bg-accent-green will-change-transform ">
            <div className=" w-full">
              <Image
                width={90}
                height={90}
                quality={100}
                src="/icons/ic.png"
                alt="카드 IC칩"
                loading="eager"
                className="h-[15%] w-auto absolute left-5 top-1/2 -translate-y-1/2 ml-5 rotate-0"
                style={{
                  transform: "rotate(0deg)",
                  WebkitTransform: "rotate(0deg)",
                }}
              />
              <div className="w-full h-full">
                <Image
                  priority
                  src="/icons/card-logo.png"
                  width={180}
                  height={300}
                  loading="eager"
                  className="absolute w-[35%] top-16 max-xs:top-10 right-10 "
                  alt="카드 로고"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card aspect-[1.6/1] w-full min-h-36 bg-white p-4">
            <div className="w-full h-full text-black flex flex-col items-center justify-center gap-2">
              <div id="pay" className="flex-1 flex gap-4 items-center ">
                <Image
                  ref={qrcodeRef}
                  id="qrcode"
                  src="/temp/qr.png"
                  width={100}
                  height={100}
                  alt="페이 QRcode"
                  className="no-swiper flex-1 w-auto h-full max-h-20 xs:max-h-24 transition-all will-change-transform"
                  onClick={(e) => {
                    if (loading.current) return;
                    handleQRFullScreenMode(e);
                  }}
                />
                <Image
                  ref={barcodeRef}
                  id="barcode"
                  src="/temp/barcode.png"
                  width={300}
                  height={300}
                  className="no-swiper flex-4 min-w-0 h-full max-h-20 xs:max-h-24 aspect-[4/1] rounded-md transition-all will-change-transform"
                  alt="페이 Barcode"
                  onClick={(e) => {
                    if (loading.current) return;
                    handleBarcodeFullScreenMode(e);
                  }}
                />
              </div>
              <div className="flex-1 w-full h-full flex max-xs:text-xs">
                <Image
                  width={200}
                  height={150}
                  alt="카드 로고"
                  loading="eager"
                  src="/icons/card-back-logo.png"
                  className="absolute -bottom-0 left-6 xs:left-10 h-[35%] xs:h-[40%] w-auto"
                />
                <div className="w-full flex flex-col gap-1 mr-1.5 sm:mr-4 items-end justify-end *:h-fit">
                  <div className="flex items-center  gap-2">
                    <span className="text-bd3 xs:text-bd1">포인트</span>
                    <span className="text-t4 xs:text-t3">
                      {points.pointBalance.toLocaleString()}원
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-bd3 xs:text-bd1">머니</span>
                    <span className="text-t4 xs:text-t3">
                      {pay.balance.toLocaleString()}원
                    </span>
                  </div>
                  <div className="no-swiper">{payNum}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
      {fullScreen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/80 z-40 animate-[fadeIn_0s]">
          <div className="w-full max-w-[500px] bg-white h-full mx-auto flex justify-end p-10">
            <img
              src="/icons/x.png"
              className="w-10 h-10 p-2"
              onClick={() =>
                handleCancelFullScreenMode(fullScreen as HTMLImageElement)
              }
            />
          </div>
        </div>
      )}
    </>
  );
}
