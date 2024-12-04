"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useGSAP } from "@gsap/react";
import Step1 from "./(components)/step1";

export default function Page() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    const tl = gsap.timeline({ repeat: 10, repeatDelay: 1, yoyo: true });
    tl.to("h1 span", {
      duration: 2,
      text: { value: "예비 플랜티", delimiter: "" },
      ease: "none",
    });

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel as HTMLElement,
        start: "top top",
        pin: true,
        pinSpacing: false,
        snap: 1,
      });
    });
  }, []);

  return (
    <div className="h-full">
      <section className="panel panel-1 h-full w-full bg-shadow-900 flex items-center justify-center">
        <Step1 />
      </section>
      <section className="panel panel-2 h-full w-full  bg-shadow-700 flex items-center justify-center">
        <p>화면 2</p>
      </section>
      <section className="panel panel-3 h-full w-full bg-green-500 flex items-center justify-center">
        <p>화면 3</p>
        <img
          src="/icons/kakao-login2.png"
          className="mx-auto"
          alt="카카오 로그인"
        />
      </section>
    </div>
  );
}
