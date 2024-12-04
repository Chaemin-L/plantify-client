import { TextPlugin } from "gsap/dist/TextPlugin";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Step1() {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
  });
  return (
    <div className="h-[50%]  w-[80%]  flex flex-col mx-auto">
      <h1 className="text-t1 ">
        만나서 반가워요.
        <br />
        <span className="text-accent-green" /> 여러분
      </h1>
    </div>
  );
}
