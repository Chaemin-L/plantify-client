"use client";
import { MONEYGRAPHY } from "@/styles/fonts/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import PlantiForest from "./planti-forest";
import PlantiFunding from "./planti-funding";
import PlantiPay from "./planti-pay";
import PlantiProfit from "./planti-profit";
import PlantiPrompt from "./planti-prompt";
import PlantiCTA from "./plantify-cta";
import Welcome from "./welcome";

export default function Page() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
    <div
      className={`${MONEYGRAPHY.variable} ${MONEYGRAPHY.className} h-full *:relative *:h-full *:w-full *:bg-shadow-900`}
    >
      <section className="panel panel-1 flex items-center justify-center">
        <Welcome />
      </section>
      <section className="panel panel-2">
        <PlantiPay />
      </section>
      <section className="panel panel-3">
        <PlantiFunding />
      </section>
      <section className="panel panel-3">
        <PlantiProfit />
      </section>
      <section className="panel panel-3">
        <PlantiForest />
      </section>
      <section className="panel panel-3">
        <PlantiPrompt />
      </section>
      <section className="panel panel-3">
        <PlantiCTA />
      </section>
    </div>
  );
}
