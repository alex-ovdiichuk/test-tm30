import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const data = [
  {
    name: "Free",
    price: 0,
    href: "#",
    bestOffer: false,
    features: [
      "150 Lorem, Ipsum Dolor.",
      "20 Lorem Ipsum Dolor Sit.",
      "Lorem Ipsum Dolor Sit.",
      "Free Lorem Ipsum Dolor.",
      "Added Lorem Ipsum Dolor.",
    ],
  },
  {
    name: "Standard",
    price: 85,
    href: "#",
    bestOffer: false,
    features: [
      "150 Lorem, Ipsum Dolor.",
      "20 Lorem Ipsum Dolor Sit.",
      "Lorem Ipsum Dolor Sit.",
      "Free Lorem Ipsum Dolor.",
      "Added Lorem Ipsum Dolor.",
    ],
  },
  {
    name: "Pro",
    price: 150,
    href: "#",
    bestOffer: true,
    features: [
      "150 Lorem, Ipsum Dolor.",
      "20 Lorem Ipsum Dolor Sit.",
      "Lorem Ipsum Dolor Sit.",
      "Free Lorem Ipsum Dolor.",
      "Added Lorem Ipsum Dolor.",
    ],
  },
  {
    name: "Ultimate",
    price: 210,
    href: "#",
    bestOffer: false,
    features: [
      "150 Lorem, Ipsum Dolor.",
      "20 Lorem Ipsum Dolor Sit.",
      "Lorem Ipsum Dolor Sit.",
      "Free Lorem Ipsum Dolor.",
      "Added Lorem Ipsum Dolor.",
    ],
  },
];

export const Section8 = () => {
  return (
    <section className="container mx-auto px-0 xl:px-[160px]">
      <div className="rounded-[42px] lg:rounded-[72px] bg-lightBlue py-7 lg:py-[38px] px-3 lg:px-8 xl:px-[135px]">
        <div className="mb-[38px] flex flex-col xl:flex-row justify-between items-start xl:items-center">
          <div className="flex flex-col gap-6 mb-6 xl:mb-0">
            <h2 className="title">PRICING PLANS</h2>
            <div className="text-big">Affordable Pricing Plans</div>
            <p className="text max-w-[516px]">
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis Id
              Atque Dignissimos Repellat Quae Ullam.
            </p>
          </div>
          <Link className={buttonVariants()} href="#">
            See all plans
            <Image
              src="/assets/arrow-btn.svg"
              width={24}
              height={24}
              alt="Arrow icon"
              className="w-6 h-6"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {data.map((i) => (
            <div key={i.name} className="relative group">
              <div className="absolute inset-0 bg-black/20 rounded-[32px]"></div>
              <div
                className={`${
                  i.bestOffer ? "bg-lightBlue2" : "bg-white"
                } rounded-[32px] border-2 border-black px-6 py-9 relative z-10 group-hover:-translate-y-1.5 transition-all duration-300`}
              >
                <div className="flex justify-between items-center h-[45px]">
                  <h3 className="text-xl font-normal uppercase">{i.name}</h3>
                  {i.bestOffer && (
                    <div className="flex items-center gap-2 bg-black text-white py-[10px] px-[22px] rounded-[26px]">
                      Best offer
                      <Image
                        src="/assets/Star.svg"
                        width={24}
                        height={24}
                        alt="Star icon"
                        className="w-6 h-6"
                      />
                    </div>
                  )}
                </div>
                <div className="text-[64px] font-extrabold capitalize">
                  ${i.price.toString().padStart(2, "0")}
                  <span className="text-xl font-normal">/Per Project</span>
                </div>
                <div className="w-full h-[2px] bg-black mb-[14px]"></div>
                <div className="text mb-[14px]">Feateures</div>
                <ul className="mb-6">
                  {i.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-3 text-xl font-normal leading-[50px]"
                    >
                      <Image
                        src="/assets/Check.svg"
                        width={20}
                        height={20}
                        alt="Check icon"
                        className="w-5 h-5"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={i.href} className={cn(buttonVariants(), "mx-auto")}>
                  Select plan
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
