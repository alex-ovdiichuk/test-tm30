import Image from "next/image";
import { socialData } from "@/data/social";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ImageCard } from "./Section1/ImageCard";
import { CardsDesktop } from "./Section1/CardsDesktop";
import { CardsMobile } from "./Section1/CardsMobile";
import { NextSection } from "./NextSection";

export const Section1 = () => {
  return (
    <div className="relative">
      <NextSection id="#section2" />
      <div className="bg-lightBlue rounded-bl-[42px] rounded-br-[42px] xl:rounded-bl-[72px] xl:rounded-br-[72px] -mt-[72px] xl:-mt-[104px] max-w-[100vw] overflow-hidden">
        <section className="container mx-auto px-3 xl:px-[54px] pt-[97px] pb-[54px] xl:py-[228px] flex flex-col xl:flex-row items-start xl:items-center gap-6 xl:gap-[60px]">
          <div className="flex xl:flex-col gap-[18px]">
            <ImageCard imgSrc="/assets/s1/l-1.svg" bg="bg-gray1" />
            <ImageCard
              imgSrc="/assets/s1/l-2.svg"
              bg="bg-lightRed2"
              roundedFull
            />
            <ImageCard imgSrc="/assets/s1/l-3.svg" bg="bg-white" />
          </div>

          <div className="w-full xl:w-[516px] max-w-[516px] xl:min-w-[516px]">
            <div className="flex gap-3 mb-[18px]">
              {socialData.map((i, id) => (
                <a
                  href={i.href}
                  target="_blank"
                  key={id}
                  className="bg-black h-10 w-10 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-black/50"
                >
                  <i.icon className="h-6 w-6 text-white" />
                </a>
              ))}
            </div>
            <h2 className="title mb-6">IT SOLUTIONS</h2>
            <div className="text-big mb-6">
              Providing The Best Services & IT{" "}
              <span className="text-big-italic">Solutions</span>
            </div>
            <p className="text mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              architecto dolorum inventore totam adipisci
            </p>
            <Link className={buttonVariants()} href="#">
              Start now
              <Image
                src="/assets/arrow-btn.svg"
                width={24}
                height={24}
                alt="Arrow icon"
                className="w-6 h-6"
              />
            </Link>
          </div>

          <CardsDesktop />
          <CardsMobile />
        </section>
      </div>
    </div>
  );
};
