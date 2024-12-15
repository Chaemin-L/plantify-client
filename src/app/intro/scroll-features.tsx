"use client";
import { MONEYGRAPHY } from "@/styles/fonts/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Children, PropsWithChildren, useEffect } from "react";
import Welcome from "./welcome";

export default function ScrollFeatures({ children }: PropsWithChildren) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".panel").forEach((panel) => {
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
    <div
      className={`${MONEYGRAPHY.variable} ${MONEYGRAPHY.className} h-full *:relative *:h-full *:w-full *:bg-shadow-900`}
    >
      <section className="panel panel-1 flex items-center justify-center">
        <Welcome />
      </section>
      {Children.map(children, (child) => (
        <section className="panel">{child}</section>
      ))}
    </div>
  );
}
