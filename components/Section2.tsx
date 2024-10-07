import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { section2Data } from "@/data/section2";

export const Section2 = () => {
  return (
    <section className="container mx-auto px-1 xl:px-[234px] py-[56px] xl:py-[96px]">
      <div className="rounded-[22px] xl:rounded-[72px] border-2 border-black px-2 py-6 lg:p-[60px] flex flex-col xl:flex-row items-center gap-[28px]">
        <div className="w-full xl:w-[516px] flex flex-col gap-8 lg:gap-6">
          <h2 className="text-xl font-normal uppercase">ABOUT US</h2>
          <div className="text-5xl font-bold capitalize">
            Trusted By Worldwide Clients Since{" "}
            <span className="font-extralight italic underline capitalize">
              1980
            </span>
          </div>
          <p className="text-xl font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia
            molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora
            reiciendis libero voluptate!
          </p>
          <Link href="#" className={buttonVariants()}>
            Get in touch
            <Image
              src="/assets/arrow-btn.svg"
              width={24}
              height={24}
              alt="Arrow icon"
            />
          </Link>
        </div>
        <div className="flex-1 flex gap-6 flex-wrap">
          {section2Data.map((i) => (
            <div key={i.title} className="flex gap-[14px]">
              <div className="w-12 h-12 relative">
                <Image
                  src={i.imgSrc}
                  fill
                  alt={i.title}
                  className="object-contain object-center"
                />
              </div>
              <div className="w-full lg:w-[295px]">
                <h3 className="text-4xl font-bold capitalize mb-6">
                  {i.title}
                </h3>
                <p className="text-xl font-normal">{i.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
