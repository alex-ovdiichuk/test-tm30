import Image from "next/image";
import { Fragment } from "react";
import { NextSection } from "./NextSection";

const data = [
  {
    text: "ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.",
    author: "Yusuf Amin",
    position: "Founder",
    avatar: "",
  },
  {
    text: "ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.",
    author: "Fouad Osman",
    position: "Officer",
    avatar: "",
  },
  {
    text: "ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.",
    author: "Fairouz Mhmd",
    position: "Manager",
    avatar: "",
  },
];

export const Section9 = () => {
  return (
    <section
      className="container mx-auto px-3 xl:px-[294px] py-[48px] xl:py-[96px]"
      id="section9"
    >
      <h2 className="title mb-6">Testimonials</h2>
      <div className="text-big mb-[38px]">Customers Testmonials</div>
      <div className="flex flex-col lg:flex-row justify-between items-center rounded-[22px] xl:rounded-[72px] border-2 border-black p-6 xl:p-[50px] gap-4 lg:gap-0 relative">
        <NextSection id="#section10" />
        {data.slice(0, 3).map((t, idx) => (
          <Fragment key={t.author}>
            <div className="w-full lg:w-[30%]">
              <div className="flex gap-2.5 mb-6">
                <div className="text-9xl lg:text-8xl xl:text-9xl font-normal leading-[128px]">
                  “
                </div>
                <p className="text leading-tight pt-[58px]">{t.text}</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src={t.avatar || "/assets/User.svg"}
                    fill
                    alt="User avatar"
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <div className="text leading-tight">{t.author}</div>
                  <div className="text-xl font-extralight leading-tight italic">
                    {t.position}
                  </div>
                </div>
              </div>
            </div>
            {idx !== 2 && (
              <div className="h-[2px] lg:h-[231px] w-4/5 lg:w-[2px] bg-black"></div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};
