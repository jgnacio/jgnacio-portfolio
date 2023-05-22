import AnimatedText from "@/components/P5/AnimatedText";
import RandonChar from "@/components/P5/RandomChar";

export default function About() {
  const string = "IGNACIO GOMEZ";
  const leters = string.split("");

  function getRandom(leters: String[]) {
    return leters[Math.floor(Math.random() * leters.length)];
  }
  return (
    <section className="bg-white" id="#about">
      <div className="flex flex-col sm:flex-row h-max sm:flex-wrap">
        <div className="flex text-7xl w-full text-black bg-white justify-center items-center">
          <h3>About Me</h3>
        </div>
        <div className="flex flex-col sm:w-full py-2 sm:h-96 bg-black justify-center items-center ">
          <p className=" max-w-lg text-center">
            I am Ignacio, Currently a student at{" "}
            <span className="text-electric-red">Holberton School</span>. With a
            strong passion for continuous learning and growth. My focus
            primarily revolves around both low-level languages like C and
            high-level languages such as Python or JavaScript. By diligently
            following industry best practices, I strive to ensure the
            development of robust and efficient code.
          </p>
          <AnimatedText />
        </div>
        <div className="group flex">
          <div className="flex text-7xl w-1/2 text-black justify-center items-center">
            <h4>Focus on</h4>
          </div>
          <div className="flex flex-col sm:w-1/2 py-6 sm:h-96 bg-black  justify-center items-center">
            <p className="sm:w-1/2 ">
              Currently, my primary focus lies on the execution of the final
              project for the third quarter at Holberton School. This project
              entails a comprehensive overhaul of a company's logistics system,
              transitioning it from manual,{" "}
              <span className="group-hover:bg-white group-hover:text-black transition-all">
                paper-based
              </span>{" "}
              operations to a{" "}
              <span className="group-hover:bg-white group-hover:text-electric-red transition-all">
                digitized
              </span>{" "}
              environment.
            </p>
          </div>
        </div>
        <div className="group flex bg-black">
          <div className="flex flex-col sm:w-1/2 py-6 sm:h-96 bg-black justify-center items-center">
            <p className="sm:w-1/2">
              With a proven track record of working effectively in team
              environments, I have contributed to various projects, including
              building our own Unix shell and writing our own printf, as well as
              taking on leadership roles when needed.
            </p>
          </div>
          <div className="flex text-4xl w-1/2 z-20 justify-center items-center text-green-500 shadow-green-700 shadow-2xl">
            <h4 className="w-max">Shell unix<RandonChar></RandonChar></h4>
          </div>
        </div>

        <div className="flex flex-col sm:w-1/2 py-6 sm:h-96 bg-black justify-center items-center">
          <p className="sm:w-1/2">
            I possess a strong attention to detail and a proactive
            problem-solving mindset, and am always eager to take on new
            challenges and learn from my experiences. Driven by my passion for
            using technology to create innovative and impactful solutions, I am
            excited to contribute my skills to a dynamic and innovative team.
          </p>
        </div>
        <div className="hidden sm:block w-10 h-10 bg-electric-red clip-frame" />
      </div>
    </section>
  );
}
