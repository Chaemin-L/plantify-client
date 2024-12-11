"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import Welcome from "./welcome";
import PlantiPay from "./planti-pay";
import PlantiFunding from "./planti-funding";
import PlantiProfit from "./planti-profit";
import PlantiForest from "./planti-forest";
import PlantiPrompt from "./planti-prompt";
import PlantiCTA from "./plantify-cta";
import { MONEYGRAPHY, MONEYGRAPHY_PIXEL } from "@/styles/fonts/fonts";

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
