"use client";
import FundingStatus from "@/app/(_components)/funding-status";
import { MouseEvent } from "react";

export default function FundingModal() {
  const toggleExpansion = (element, to, duration = 350) => {
    return new Promise((res) => {
      requestAnimationFrame(() => {
        element.style.transition = `
                    width: ${duration}ms ease-in-out,
                    height: ${duration}ms ease-in-out,
                `;
        element.style.width = to.width;
        element.style.maxWidth = to.maxWidth;
        element.style.height = to.height;
        const childElement = element.appendChild();
      });

      setTimeout(res, duration);
    });
  };
  const onClick = async (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const cardClone = card.cloneNode(true) as HTMLDivElement;
    cardClone.style.position = "fixed";
    cardClone.style.top = `50%`;
    cardClone.style.transform = `translateY(-50%)`;

    card.style.opacity = "0";

    card.parentElement?.appendChild(cardClone);
    const cardClone2 = card.cloneNode(true) as HTMLDivElement;
    const cardClone3 = card.cloneNode(true) as HTMLDivElement;

    toggleExpansion(cardClone, {
      width: "468px",
      height: "fit-content",
      maxWidth: "calc(100% - 32px)",
    });
    cardClone.appendChild(cardClone2);
    cardClone.appendChild(cardClone3);
  };
  return (
    <div className="card" onClick={onClick}>
      <FundingStatus id={0} percent={58} targetAmount={100000000} />
    </div>
  );
}
