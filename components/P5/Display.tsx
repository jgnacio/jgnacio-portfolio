import React from "react";
import { P5CanvasInstance, type Sketch } from "react-p5-wrapper";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { nextTick } from "process";
import { Cutive_Mono } from "next/font/google";
const cutive_font = Cutive_Mono({
    weight: ["400"],
    subsets: ["latin"]
});
  
const sketch: Sketch = p5 => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    let middleY = window.innerHeight / 2
    let middleX = window.innerWidth / 2
    let radio = 600

    p5.setup = () => {
        p5.createCanvas(window.innerWidth, window.innerHeight)
        p5.textFont(cutive_font.className)
    };

    p5.draw = () => {
        p5.background(0)
        p5.textSize(200)
        const character = alphabet[Math.floor(Math.random() * alphabet.length)]
        radio += p5.random(-20, 20.4)
        p5.fill(255)
        p5.text(character, middleX-80, middleY)
        p5.noFill()
        p5.stroke(255)
        p5.arc(middleX, middleY, radio, radio , p5.PI **(p5.deltaTime), (p5.deltaTime), p5.PIE)
    };
};

export default function Display() {
    return (
        <NextReactP5Wrapper sketch={sketch} />
    )
}