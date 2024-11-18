"use client";
import Accordion from "@/app/(_components)/accordion";
import CardItem from "./card-item";

export default function BestCard() {
  return (
    <section className="card">
      <Accordion>
        <Accordion.Summary>
          <div className="space-y-5">
            <h1 className="card-title">추천 카드</h1>
            <CardItem name="SBI저축 PAY백" point={40} />
          </div>
        </Accordion.Summary>
        <Accordion.Details>
          <div className="ml-4 pt-7 text-bd3 font-bold flex flex-col gap-4">
            <div className="flex gap-10">
              <span>할인대상</span>
              <span>가맹점</span>
            </div>
            <div className="flex gap-10">
              <span>할인종류</span>
              <span>0.2%캐쉬백</span>
            </div>
            <div className="flex gap-10">
              <span>잔여 혜택</span>
              <span>10,000원</span>
            </div>
          </div>
        </Accordion.Details>
      </Accordion>
    </section>
  );
}
