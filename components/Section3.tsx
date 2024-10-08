"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { section3Data } from "@/data/section3";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Section3 = () => {
  const [activeItem, setActiveItem] = useState(section3Data[0]);

  return (
    <section className="container mx-auto xl:px-[160px] mb-[56px] xl:mb-[96px]">
      <div className="xl:p-[75px] pb-[58px] bg-lightBlue rounded-[42px] xl:rounded-[72px] flex flex-col xl:flex-row gap-[114px] items-center">
        <div className="px-3 py-7 xl:p-[60px] w-full xl:w-[636px] bg-white rounded-[32px] border-2 border-black">
          <div className="lg:w-[346px] lg:h-[346px] w-[204px] h-[204px] relative mx-auto mb-[38px]">
            <Image
              src="/assets/s3/s3.svg"
              fill
              alt="Section 3 image"
              className="object-contain object-center"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="title">SERVICES</h2>
            <div className="text-big">Services We Offer</div>
            <p className="text">
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis Id
              Atque Dignissimos Repellat Quae Ullam.
            </p>
            <Link className={buttonVariants()} href="#">
              See all services
              <Image
                src="/assets/arrow-btn.svg"
                width={24}
                height={24}
                alt="Arrow icon"
                className="w-6 h-6"
              />
            </Link>
          </div>
        </div>

        <div className="flex-1 px-0 lg:px-12 xl:px-0">
          <div className="w-full lg:w-fit relative lg:mx-auto xl:ml-0">
            <div className="w-[100vw] lg:w-[calc(100%+56px)] h-full bg-black absolute -bottom-7 left-0 lg:-left-7 z-0 rounded-[39px]"></div>
            <div className="bg-white rounded-[32px] border-2 border-black w-[calc(100vw-24px)] lg:w-[484px] p-12 mb-[100px] flex gap-6 flex-col hover:-translate-y-2 transition-all duration-300 ml-3 lg:ml-0 relative z-10">
              <h3 className="text-4xl font-bold capitalize">
                {activeItem.title}
              </h3>
              <p className="text">{activeItem.text}</p>
              <Link
                href={activeItem.href}
                className={buttonVariants({ variant: "inverted" })}
              >
                Read More
                <Image
                  src="/assets/arrow-forward.svg"
                  width={24}
                  height={24}
                  alt="Forward"
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 px-3 lg:px-0">
            {section3Data.map((i) => (
              <Button
                key={i.title}
                variant="outline"
                onClick={() => setActiveItem(i)}
                className={cn({
                  "bg-black text-white hover:bg-black/50":
                    activeItem.title === i.title,
                })}
              >
                {i.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
