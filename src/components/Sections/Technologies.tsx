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
} from "react-icons/si";

import { gsap } from "gsap";
import { ReactNode, useRef, useEffect } from "react";
import horizontalLoop from "../utils/GSAPFunctions/HorizontalLoop";

export default function Technologies() {
  const wrapper = useRef(null);

  useEffect(() => {

    const boxes = gsap.utils.toArray(".box") as ReactNode[];

    const loop = horizontalLoop(boxes, {
      paused: false,
      repeat: -1,
      speed: 1.25,
    });

    return () => {
      loop.kill();
    }
  }, [])


  return (
    <div className=" flex overflow-x-hidden">
      <div className="py-12" >
        <div className="flex" ref={wrapper}>
          <div className="box">
            <SiTypescript className="text-4xl mx-4" size={60} />
          </div>
          <div className="box">
            <SiReact className="text-4xl mx-4" size={60} />
          </div>
          <div className="box">
            <SiNextdotjs className="text-4xl mx-4" size={60} />
          </div>
          <div className="box">
            <SiNodedotjs className="text-4xl mx-4" size={60} />
          </div>
          <div className="box">
            <SiPython className="text-4xl mx-4" size={60} />
          </div>
          <div className="box">
            <SiJavascript className="text-4xl mx-4" size={60} />
          </div>
          <div className="box">
            <SiGooglecloud className="text-4xl mx-4" size={60} />
          </div>
          <div className="box">
            <SiDocker className="text-4xl mx-4" size={60} />
          </div>
          <div className="box">
            <SiGnubash className="text-4xl mx-4" size={60} />
          </div>
        </div>
      </div>
    </div>
  );
}
