import Footer from "@/components/Footer";
import About from "@/components/Sections/About";
import Education from "@/components/Sections/Education";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import Technologies from "@/components/Sections/Technologies";

export default function Home() {
  return (
    <main className="flex flex-col text-sm md:text-base">
      <Hero />
      <div className="p-4 md:px-48">
        <About />
        <Education />
      </div>
      <Technologies />
      <Projects />
      <Footer />
    </main>
  );
}
