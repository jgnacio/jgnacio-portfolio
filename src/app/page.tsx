"use client";
import About from "@/components/Sections/About";
import Education from "@/components/Sections/Education";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import Technologies from "@/components/Sections/Technologies";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Hero />
      <div className="p-4 md:px-48 mt-[1px]">
        <About />
        <Education />
      </div>
      <Technologies />
      <Projects />
    </main>
  );
}
