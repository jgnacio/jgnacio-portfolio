import Navbar from "@/components/Navbar/Navbar";
import { Cutive_Mono } from "next/font/google";
import Hero from "@/components/Hero/Hero";
import Sections from "@/components/Sections/Sections";

const cutive_font = Cutive_Mono({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${cutive_font.className} bg-black`}>
      <Navbar />
      <Hero />
      <Sections />
    </main>
  );
}
