"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Item } from "./Section6/Item";

const tags = ["Mobile Apps", "Cloud", "Data Analysis", "Hosting"];

const data = [
  {
    href: "#",
    bg: "bg-lightPurple",
    tag: "Mobile Apps",
    imgSrc: "/assets/s6/s6.svg",
  },
  {
    href: "#",
    bg: "bg-lightBlue2",
    tag: "Mobile Apps",
    imgSrc: "/assets/s6/s6.svg",
  },
  {
    href: "#",
    bg: "bg-lightGreen",
    tag: "Cloud",
    imgSrc: "/assets/s6/s6.svg",
  },
  {
    href: "#",
    bg: "bg-lightRed2",
    tag: "Data Analysis",
    imgSrc: "/assets/s6/s6.svg",
  },
  {
    href: "#",
    bg: "bg-lightPurple",
    tag: "Mobile Apps",
    imgSrc: "/assets/s6/s6.svg",
  },
  {
    href: "#",
    bg: "bg-lightBlue2",
    tag: "Hosting",
    imgSrc: "/assets/s6/s6.svg",
  },
  {
    href: "#",
    bg: "bg-lightGreen",
    tag: "Hosting",
    imgSrc: "/assets/s6/s6.svg",
  },
  {
    href: "#",
    bg: "bg-lightRed2",
    tag: "Mobile Apps",
    imgSrc: "/assets/s6/s6.svg",
  },
];

export const Section6 = () => {
  const [tag, setTag] = useState("All");

  return (
    <section className="bg-lightBlue rounded-[42px] xl:rounded-[72px]">
      <div className="container mx-auto px-3 lg:px-0 xl:px-[294px] pt-[38px] pb-16">
        <div className="title mb-6">Portfolio</div>
        <h2 className="text-big mb-[38px]">Awesome Portfolio</h2>
        <div className="flex gap-4 mb-[38px] flex-wrap">
          {["All", ...tags].map((t) => (
            <Button
              key={t}
              variant="outline"
              className={cn(
                {
                  "bg-black text-white hover:bg-black/50": tag === t,
                },
                "text-sm lg:text-xl"
              )}
              onClick={() => setTag(t)}
            >
              {t}
            </Button>
          ))}
        </div>
        <div className="grid-cols-4 gap-5 hidden lg:grid">
          {data
            .filter((i) => (tag === "All" ? true : i.tag === tag))
            .slice(0, 8)
            .map((i, id) => (
              <Item item={i} key={id} />
            ))}
        </div>
        <div className="grid lg:hidden grid-cols-1 gap-5">
          {data
            .filter((i) => (tag === "All" ? true : i.tag === tag))
            .slice(0, 6)
            .map((i, id) => (
              <Item item={i} key={id} />
            ))}
        </div>
      </div>
    </section>
  );
};
