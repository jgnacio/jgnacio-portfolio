import { Zen_Dots } from "next/font/google";
import Image from "next/image";
// Text font
const zen = Zen_Dots({ subsets: ["latin"], weight: "400" });

export default function Projects() {
  return (
    <section className="flex min-h-screen border">
      <div className="flex justify-center w-full">
        <div className="flex justify-start items-start absolute">
          <h1
            className={`${zen.className} text-4xl md:text-5xl bg-primary text-background px-12 title-clip-center`}
          >
            Projects
          </h1>
        </div>

        <div className="flex justify-center items-center px-4">
          <p className=" p-4">Projects</p>
        </div>
      </div>
    </section>
  );
}
