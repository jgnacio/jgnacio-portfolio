import React from "react";
import { P5CanvasInstance, type Sketch } from "react-p5-wrapper";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { Cutive_Mono } from "next/font/google";
const cutive_font = Cutive_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

const sketch: Sketch = (p5) => {
  const string = "IGNACIO GOMEZ";
  const leters = string.split("");
  let width = window.innerWidth - window.innerWidth / 18;
  let height = window.innerHeight;
  let middleY = height / 2;
  let middleX = width / 2;
  let radio = 600;

  function getRandom(leters: String[]) {
    return leters[Math.floor(Math.random() * leters.length)];
  }

  p5.setup = () => {
    p5.createCanvas(width, height);
    p5.textFont(cutive_font.className);
  };

  p5.draw = () => {
    p5.background(0);
    p5.textSize(200);
    const phrase = getRandom(leters);
    radio += p5.random(-17, 20.4);
    p5.fill(255);
    p5.text(phrase, middleX - 80, middleY);
    p5.noFill();
    p5.stroke(255);
    p5.arc(
      middleX,
      middleY,
      radio,
      radio,
      p5.PI ** p5.deltaTime,
      p5.deltaTime,
      p5.PIE
    );
  };
};

export default function Display() {
  return <NextReactP5Wrapper sketch={sketch} />;
}
