"use client";

import Image from "next/image";
import { Fragment } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { NextSection } from "./NextSection";

const data = [
  {
    bg: "bg-lightGreen",
    num: 758,
    text: "Finished Projects",
    imgSrc: "/assets/s5/s5-1.svg",
    plus: true,
  },
  {
    bg: "bg-lightRed",
    num: 23,
    text: "Created Jobs",
    imgSrc: "/assets/s5/s5-2.svg",
    plus: false,
  },
  {
    bg: "bg-lightPurple",
    num: 200,
    text: "Happy customers",
    imgSrc: "/assets/s5/s5-3.svg",
    plus: true,
  },
  {
    bg: "bg-lightBlue2",
    num: 28,
    text: "Years of experience",
    imgSrc: "/assets/s5/s5-4.svg",
    plus: true,
  },
];

export const Section5 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      className="container mx-auto px-7 lg:px-0 xl:px-[306px] pb-[96px]"
      ref={ref}
      id="section5"
    >
      <div className="rounded-[22px] xl:rounded-[72px] border-2 border-black p-7 xl:p-[60px] flex justify-between flex-col lg:flex-row gap-8 lg:gap-0 relative">
        <NextSection id="#section6" />
        {data.map((i, idx) => (
          <Fragment key={i.text}>
            <div className="relative">
              <div className="absolute inset-0 bg-black/20 rounded-[32px]"></div>
              <div
                className={`w-full lg:w-[168px] xl:w-[248px] rounded-[22px] xl:rounded-[32px] border-2 border-black p-7 lg:p-3 xl:p-7 flex flex-col items-center gap-6 lg:gap-2 xl:gap-6 relative z-10 hover:-translate-y-1.5 transition-all duration-300 ${i.bg}`}
              >
                <Image
                  src={i.imgSrc}
                  width={48}
                  height={48}
                  alt={i.text}
                  className="w-12 lg:w-6 h-12 lg:h-6 xl:w-12 xl:h-12"
                />
                <div className="text-5xl lg:text-2xl xl:text-5xl font-bold">
                  {/* {i.num} */}
                  {inView && <CountUp end={i.num} duration={3} delay={0} />}
                  {i.plus && "+"}
                </div>
                <div className="text-base xl:text-xl font-normal">{i.text}</div>
              </div>
            </div>
            {idx + 1 !== data.length && (
              <div className="w-full lg:w-[2px] h-[2px] lg:h-auto bg-black "></div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};
