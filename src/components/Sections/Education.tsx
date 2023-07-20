import { Zen_Dots } from "next/font/google";
// Text font
const zen = Zen_Dots({ subsets: ["latin"], weight: "400" });

export default function Education() {
  return (
    <section className="flex min-h-[60vh] md:min-h-[45vh] border">
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-start items-start absolute ">
          <h1
            className={`${zen.className} text-4xl md:text-5xl bg-primary text-background px-4 pr-12 title-clip`}
          >
            Education
          </h1>
        </div>
        <div className="flex md:px-14 items-center justify-center h-full">
          <p>
            During my time at Holberton School, I immersed myself in a rigorous
            and collaborative learning environment, honing my problem-solving
            skills, and mastering several programming languages and frameworks.
            I took on various challenges, ranging from working with binary trees
            to creating complete applications. As a culmination of our efforts,
            my team and I successfully developed a minimum viable product called
            Smart ABA.
          </p>
        </div>
      </div>
    </section>
  );
}
