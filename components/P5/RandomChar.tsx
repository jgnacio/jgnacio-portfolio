import React from "react";
import { P5CanvasInstance, type Sketch } from "react-p5-wrapper";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { Cutive_Mono } from "next/font/google";
import { rejects } from "assert";
import { isGeneratorObject } from "util/types";

const sketch: Sketch = (p5) => {
  const text = '$> echo "hello world"';
  const textSplit = text.split("");
  let empty = "";
  let buffer : Generator;
  let timeAdd = 0;
  const width = 200;
  const height = 20;

  p5.setup = () => {
    p5.createCanvas(width, height);
  };

function* addLast(string : String[]) {
    for (let elem of string) {
      yield elem;
    }
  }
  const iterator = addLast(textSplit)

  p5.draw = () => {
    p5.background(0);
    p5.fill(0, 200, 100);
  }
};

export default function RandonChar() {
  return <NextReactP5Wrapper sketch={sketch} />;
}
