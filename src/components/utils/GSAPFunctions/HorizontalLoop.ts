import { ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

interface Config {
  repeat?: number;
  paused?: boolean;
  speed?: number;
  paddingRight?: string;
  snap?: number | boolean;
}

export default function horizontalLoop(
  items: ReactNode[],
  config: Config
): gsap.core.Timeline {
  config = config || {};

  const { repeat, paused, speed, paddingRight, snap } = config;

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline(config);
  tl.to(items, {
    scrollTrigger: {
      trigger: ".box",
      start: "top bottom",
      end: "bottom top",
      markers: true,
    },
  });

  tl.to(items, {
    y: -10,
    duration: 0.1,
    scale: 1.1,
    yoyo: true,
    rotate: 0,
    delay: 0.5,
    stagger: {
      each: 0.1,
      ease: "power1.Out",
    },
  });

  tl.to(items, {
    rotate: 360,
    duration: 1,
    stagger: {
      each: 0.1,
      ease: "power1.Out",
      from: "center",
    },
    color: "#c04af2",
  });

  tl.to(items, {
    y: 0,
    duration: 0.1,
    scale: 1,
    yoyo: true,
    stagger: {
      each: 0.1,
      ease: "power1.inOut",
      from: "end",
    },
    color: "inherit",
  });

  return tl;
}
