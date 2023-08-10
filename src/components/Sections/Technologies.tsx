"use client";

import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiNodedotjs,
  SiJavascript,
  SiGooglecloud,
  SiDocker,
  SiGnubash,
  SiPrisma,
  SiMicrosoftazure,
} from "react-icons/si";

import { gsap } from "gsap";
import { ReactNode, useEffect } from "react";
import horizontalLoop from "../utils/GSAPFunctions/HorizontalLoop";

export default function Technologies() {
  const technologiesList = [
    <SiTypescript size={"5vw"} />,
    <SiJavascript size={"5vw"} />,
    <SiReact size={"5vw"} />,
    <SiNextdotjs size={"5vw"} />,
    <SiNodedotjs size={"5vw"} />,
    <SiPrisma size={"5vw"} />,
    <SiPython size={"5vw"} />,
    <SiGooglecloud size={"5vw"} />,
    <SiMicrosoftazure size={"5vw"} />,
    <SiDocker size={"5vw"} />,
    <SiGnubash size={"5vw"} />,
  ];
  useEffect(() => {
    const boxes = gsap.utils.toArray(".box") as ReactNode[];

    const loop = horizontalLoop(boxes, {
      paused: false,
      repeat: -1,
      speed: 1.25,
    });

    return () => {
      loop.kill();
    };
  }, []);

  return (
    <div className="flex overflow-x-hidden justify-center py-12">
      <div className="flex flex-wrap gap-5">
        {technologiesList.map((technology, index) => (
          <div className="box" key={index}>
            {technology}
          </div>
        ))}
      </div>
    </div>
  );
}
