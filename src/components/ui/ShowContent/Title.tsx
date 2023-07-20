import { Zen_Dots } from "next/font/google";
import { ReactNode } from "react";
// Text font
const zen = Zen_Dots({ subsets: ["latin"], weight: "400" });


export default function Title({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex min-h-[60vh] md:min-h-[45vh] border">
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-start items-start absolute ">
          <h2
            className={`${zen.className} text-4xl md:text-5xl bg-primary text-background px-4 pr-12 title-clip`}
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}