import { ButtonHTMLAttributes } from "react";

export default function BottomFixedButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <div
      className="fixed bottom-0 bg-black px-9 pt-3 pb-10 w-full  max-w-[500px] -mx-4" // -mx-4: 레이아웃 패딩
      style={{ left: "inherit" }}
    >
      <button
        className="py-3 bg-accent-green rounded-xl text-black text-t3 w-full"
        {...props}
      >
        확인
      </button>
    </div>
  );
}
