import Image from "next/image";
import { NextSection } from "./NextSection";

const items = [
  {
    imgSrc: "",
  },
  {
    imgSrc: "",
  },
  {
    imgSrc: "",
  },
  {
    imgSrc: "",
  },
  {
    imgSrc: "",
  },
];

export const Section7 = () => {
  return (
    <section
      className="container mx-auto px-3 lg:px-0 xl:px-[294px] py-[56px] lg:py-[96px] overflow-hidden relative"
      id="section7"
    >
      <NextSection
        id="#section8"
        className="xl:bottom-7 lg:bottom-12 bottom-7"
      />
      <p className="text-big mb-12">
        Trusted By Over <span className="text-big-italic">500</span> Clients
        Around The World
      </p>
      <div className="grid grid-cols-5 gap-3 lg:gap-5 mb-12 min-w-[800px]">
        {items.map((i, id) => (
          <div
            key={id}
            className="rounded-[32px] border-2 border-black h-[104px] xl:h-[173px] relative flex justify-center items-center"
          >
            {i.imgSrc ? (
              <Image
                src={i.imgSrc}
                fill
                alt="Logo"
                className="object-contain object-center"
              />
            ) : (
              <span className="text-2xl xl:text-5xl font-extralight italic capitalize">
                Logo
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
