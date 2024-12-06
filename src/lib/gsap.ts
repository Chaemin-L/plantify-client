import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

// Please use it in useEffect
export function typingText(selector: string, text: string) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
  tl.to(selector, {
    duration: 1.5,
    text: { value: text, delimiter: "" },
    ease: "none",
  });
}

export function verticalMove(selector: string, options?: gsap.TweenVars) {
  gsap
    .timeline({ repeat: -1 })
    .to(selector, {
      duration: 2,
      y: "+=30",
      ease: "power1.inOut",
      ...options,
    })
    .to(selector, {
      duration: 2,
      y: "-=30",
      ease: "power1.inOut",
      ...options,
    });
}

// deprecated
export function horizontalLoop(
  selector: string,
  to: "left" | "right" = "right"
) {
  gsap
    .fromTo(
      selector,
      {
        xPercent: to === "left" ? 150 : -150,
        repeat: -2,
        duration: 10,
        ease: "power1.inOut",
      },
      {
        xPercent: to === "left" ? -150 : 150,
        repeat: -2,
        duration: 10,
        ease: "power1.inOut",
      }
    )
    .totalProgress(0.5);
}

// deprecated
export function initMarquee(
  selector: string,
  boxWidth: number,
  howMany: number,
  toLeft: boolean = false
) {
  let totalWidth = boxWidth * howMany,
    el = document.querySelectorAll(selector),
    direction = toLeft ? "-=" + totalWidth : "+=" + totalWidth;

  var mod = gsap.utils.wrap(0, totalWidth);

  gsap.set(selector, {
    x: function (i) {
      return i * boxWidth;
    },
  });

  gsap.timeline({ repeat: -1 }).to(el, {
    x: direction,
    modifiers: {
      x: (x) => mod(parseFloat(x)) + "px",
    },
    duration: 15,
    ease: "none",
    repeat: -1,
  });
}
