import Navbar from "@/components/Navbar/Navbar";
import { Cutive_Mono } from "next/font/google";
import Display from "@/components/P5/Display";
import Hero from "@/components/Hero/Hero";

const cutive_font = Cutive_Mono({
  weight: ["400"],
  subsets: ["latin"]
});

export default function Home() {
  return (
    <main className={`bg-black ${cutive_font.className}`}>
      <Navbar />
      <Hero />
      <div className="w-screen h-screen overflow-hidden border-b-8">
        <Display />
      </div>
      <section className="bg-white" id="#about">
        <div className="flex flex-col sm:flex-row w-screen h-max sm:flex-wrap">
          <div className="flex text-7xl w-1/2 text-black justify-center items-center">
            <h2>About Me</h2>
          </div>
          <div className="flex flex-col w-screen sm:w-1/2 py-6 sm:h-96 bg-black sm:rounded-bl-full justify-center items-center">
            <p className="sm:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              unde iste, officia labore recusandae quae explicabo voluptas nemo
              dolore assumenda perspiciatis minima repellendus odio illo quo
              tempora. Nemo, autem consectetur!
            </p>
          </div>
          <div className="flex flex-col w-screen sm:w-1/2 py-6 sm:h-96 bg-black sm:rounded-tr-full justify-center items-center">
            <p className="sm:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              unde iste, officia labore recusandae quae explicabo voluptas nemo
              dolore assumenda perspiciatis minima repellendus odio illo quo
              tempora. Nemo, autem consectetur!
            </p>
          </div>
          <div className="w-10 h-10 bg-red-600 clip-frame" />
        </div>
      </section>
    </main>
  );
}
