"use client";
import { typingText } from "@/lib/gsap";
import { useEffect } from "react";
import FeatureLayout from "./feature-layout";

export default function PlantiPick() {
  useEffect(() => {
    typingText(".typing-chat", aiMessage, {
      repeat: -1,
      duration: 15,
      yoyo: false,
    });
  }, []);

  return (
    <FeatureLayout
      title="PlantiPick"
      keyword="피픽"
      description={`기부 도우미, 피픽\n나눔의 길을 안내하는 길잡이`}
    >
      <ul className="flex-col flex gap-3 w-full h-full overflow-auto">
        <li
          className={
            "bg-white text-black self-end p-3 whitespace-pre-wrap rounded-2xl text-bd2 max-w-[90%] w-fit min-h-fit break-words max-h-fit "
          }
        >
          <p className="w-full">{userMessage}</p>
        </li>
        <li
          className={
            " text-white bg-shadow-700 p-3 whitespace-pre-wrap rounded-2xl text-bd2 max-w-[90%] w-fit min-h-fit break-words max-h-fit "
          }
        >
          <p className="typing-chat w-full"></p>
        </li>
      </ul>
    </FeatureLayout>
  );
}

const userMessage = "동물 관련한 펀딩을 추천해줘.";
const aiMessage = `동물 관련한 펀딩을 추천해드리겠습니다. <br />
 <br /> 1. '식용견'으로 길러졌던 누렁이들, 구조 후 이야기 
 <br /> 목표금액 13,200,000원, 달성금액 5,153,880원
 <br /> 2. 가족이 있어 행복한 삶, 제게도 나눠주세요! 
  <br /> 목표금액 11,000,000원, 달성금액 4,687,300원
 <br /> 3. 강생이들과 고치살개(강아지들과 같이 살아요) 
  <br /> 목표금액 14,500,000원, 달성금액 6,636,570원
 <br /> 4. 다시 네 발로 걷는 평범한 일상으로 돌아가기 위하여 <br /> 5. 동물원의 동물들은 행복할까?
  <br /> 목표금액 5,000,000원, 달성금액 3,236,250원

 `;
