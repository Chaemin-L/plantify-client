"use client";
import Image from "next/image";
import { MouseEventHandler, useRef, useState } from "react";
import { EffectFlip } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PayCard() {
  const [fullScreen, setFullScreen] = useState<boolean | HTMLImageElement>(
    false
  );
  const qrcodeRef = useRef<HTMLImageElement>(null);
  const barcodeRef = useRef<HTMLImageElement>(null);
  const loading = useRef<boolean>(false);

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

  const handleBarcodeFullScreenMode: MouseEventHandler<
    HTMLImageElement
  > = async (e) => {
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

  const handleQRFullScreenMode: MouseEventHandler<HTMLImageElement> = async (
    e
  ) => {
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

  const handleCancelFullScreenMode = async (target: HTMLImageElement) => {
    //@ts-ignore
    target.style = {
      ...target.style,
      position: "static",
      transition: "all 0.3s",
      zIndex: "0",
      transform: "scale(1/2) translate(0, 0)",
    };
    target.addEventListener("transitionend", () =>
      handleMoveOriginTransitionEnd(target)
    );
  };

  return (
    <>
      <Swiper
        className="w-full h-full"
        loop={true}
        effect={"flip"}
        modules={[EffectFlip]}
        onClick={(swiper) => swiper.slideNext()}
        noSwipingClass="no-swiper"
      >
        <SwiperSlide>
          <div
            className="
            card aspect-[1.6/1] relative overflow-hidden p-0 bg-accent-green"
          >
            <div className=" w-full h-full ">
              <Image
                width={300}
                height={300}
                src="/icons/ic.svg"
                alt="카드 IC칩"
                className="h-[15%] w-auto absolute top-1/2 -translate-y-1/2 ml-5 "
              />
              <div className="w-full h-full">
                <img
                  src="/icons/card-logo.svg"
                  className="absolute w-[60%] top-16 max-xs:top-10 right-0 "
                  width={300}
                  height={300}
                  alt="카드 로고"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card aspect-[1.6/1] relative bg-white">
            <div className="text-black flex flex-col items-center justify-center max-xs:gap-2 gap-10 w-full h-full">
              <div id="pay" className="flex gap-4">
                <Image
                  ref={qrcodeRef}
                  id="qrcode"
                  src="/temp/qr.svg"
                  width={300}
                  height={300}
                  alt="페이 QRcode"
                  className="no-swiper w-fit max-h-24 aspect-square transition-all"
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
                  className="no-swiper flex-1 min-w-0 max-h-24 aspect-[4/1] rounded-md transition-all"
                  alt="페이 Barcode"
                  onClick={(e) => {
                    if (loading.current) return;
                    handleBarcodeFullScreenMode(e);
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between w-[200px]">
                  <span className="text-bd3 xs:text-bd1">포인트</span>
                  <span className="text-t4 xs:text-t3">8106원</span>
                </div>
                <div className="flex items-center justify-between w-[200px]">
                  <span className="text-bd3 xs:text-bd1">머니</span>
                  <span className="text-t4 xs:text-t3">330원</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
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
