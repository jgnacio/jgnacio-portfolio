import React from "react";
import { P5CanvasInstance, type Sketch } from "react-p5-wrapper";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { Cutive_Mono } from "next/font/google";
import { rejects } from "assert";
const cutive_font = Cutive_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

const sketch: Sketch = (p5) => {
  const width = window.innerWidth - window.innerWidth / 18;
  const height = 20;
  let middleX = width / 2;
  let kx = 2;
  let ky = 4;

  const square = {
    x: 0,
    y: 0,
    size: [10, 10],
  };

  p5.setup = () => {
    p5.createCanvas(width, height);
  };

  p5.draw = () => {
    p5.background(0);
    p5.fill(255);
  };
};

export default function AnimatedText() {
  return <NextReactP5Wrapper sketch={sketch} />;
}
