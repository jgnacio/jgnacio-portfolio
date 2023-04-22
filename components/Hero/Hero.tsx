import Link from "next/link";
import { Tinos } from "next/font/google";
import Display from "../P5/Display";

const tinosFontBold = Tinos({
  weight: ["700"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <>
      <div className="flex w-full bg-black justify-center">
        <div className="container flex justify-center">
          <div className="flex flex-col w-full h-full absolute justify-center items-center  bg-shadow-black">
            <p className="text-6xl sm:text-7xl tracking-tighter text-center ">
              Welcome to the
            </p>
            <Link className=" text-center underline" href="#about">
              jgnacio portfolio
            </Link>
          </div>
          <Display />
        </div>
      </div>
    </>
  );
}
