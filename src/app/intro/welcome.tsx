import { useEffect } from "react";
import { typingText, verticalMove } from "@/lib/gsap";
import Image from "next/image";

export default function Welcome() {
  useEffect(() => {
    typingText(".typing-text", "예비 플랜티");
    verticalMove(".logo");
  }, []);

  return (
    <div className="h-[70%] w-[90%] flex flex-col  mx-auto">
      {/** 인사 멘트 */}
      <h1 className="text-[32px]">
        만나서 반가워요.
        <br />
        <span className="typing-text text-accent-green" /> 여러분
      </h1>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ">
        <Image
          src="/icons/logo.svg"
          width={200}
          height={200}
          alt="서비스 로고"
          className="logo w-40 h-40"
        />
      </div>

      {/** 애니메이션 루프 */}
      {/* <ThreeLinesLoop /> */}
    </div>
  );
}
