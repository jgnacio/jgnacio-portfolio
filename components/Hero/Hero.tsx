import Link from "next/link";
import { Tinos } from "next/font/google";

const tinosFontBold = Tinos({
  weight: ["700"],
  subsets: ["latin"]
});

export default function Hero() {
  return (
    <div>
      <div className="h-screen w-screen z-20 absolute bg-shadow-black blur-3xl" />
      <div className="flex h-screen w-screen z-40 absolute justify-center">
        <div className="flex flex-col justify-center font-black">
          <p className={"text-6xl sm:text-8xl"}>Welcome to</p>
          <Link className=" text-center underline" href="#about">
            jgnacio portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
