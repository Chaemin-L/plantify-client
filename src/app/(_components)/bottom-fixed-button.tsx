import { ButtonHTMLAttributes } from "react";

export default function BottomFixedButton({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div
      className="fixed bottom-0 bg-black px-6 sm:px-8 pt-3 pb-10 w-full  max-w-[500px] -mx-4" // -mx-4: 레이아웃 패딩
      style={{ left: "inherit" }}
    >
      <Button {...props}>{children}</Button>
    </div>
  );
}

export function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="py-3 bg-accent-green rounded-xl text-black text-t3 w-full disabled:bg-shadow-600"
      {...props}
    >
      {children}
    </button>
  );
}
