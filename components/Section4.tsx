import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const data = [
  {
    title: "Latest Technologies",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
  },
  {
    title: "Uniqe Solutions",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
  },
  {
    title: "Powerful Strategies",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.",
  },
];

export const Section4 = () => {
  return (
    <section className="container mx-auto px-0 xl:px-[294px] pb-[57px] flex flex-col lg:flex-row justify-between items-center gap-7 lg:gap-0">
      <div className="w-full lg:w-[400px] xl:w-[536px] px-3 lg:px-0">
        <div className="w-[204px] h-[204px] xl:w-[346px] xl:h-[346px] relative mb-[38px] mx-auto">
          <Image
            src="/assets/s4/s4.svg"
            fill
            alt="Section 4"
            className="object-center object-contain"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-normal uppercase">WHY CHOOSE US</h2>
          <div className="text-5xl font-bold capitalize">
            Why Our Customers Choose{" "}
            <span className="font-extralight underline capitalize italic">
              Working
            </span>{" "}
            With Us
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
      </div>

      <div className="w-full lg:w-[500px] xl:w-[661px] bg-white rounded-[32px] border-2 border-black h-fit py-7 lg:py-12 xl:py-[90px] px-3 lg:px-8 xl:px-16 flex flex-col gap-7">
        {data.map((i, id) => (
          <div key={i.title} className="flex">
            <div className="text-5xl font-bold mr-[17px] pt-2 lg:pt-0">
              {(id + 1).toString().padStart(2, "0")}.
            </div>
            <div>
              <h3 className="text-3xl xl:text-4xl font-bold capitalize mb-6">
                {i.title}
              </h3>
              <p className="text-xl font-normal">{i.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
