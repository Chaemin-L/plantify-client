import Image from "next/image";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Checkbox({ label = "", ...props }: Props) {
  return (
    <label className="flex gap-7 py-3">
      <input type="checkbox" {...props} className="peer hidden" />
      <Image
        src="/icons/checkbox-x.svg"
        width={16}
        height={16}
        alt="체크박스 해제"
        className="peer-checked:hidden"
      />
      <Image
        src="/icons/checkbox-o.svg"
        width={16}
        height={16}
        alt="체크박스 해제"
        className="hidden peer-checked:block"
      />
      <span className="text-bd1">{label}</span>
    </label>
  );
}
