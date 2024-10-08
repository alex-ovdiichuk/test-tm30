import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";

const data = [
  {
    imgSrc: "/assets/blog-img.svg",
    date: Date.now(),
    tags: ["Hosting"],
    title: "How Litespeed Technology Works To Speed Up Your Site",
    preview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem, voluptates molestiae",
    href: "#",
    author: {
      name: "Yusuf Amin",
      avatar: "",
    },
  },
  {
    imgSrc: "/assets/blog-img.svg",
    date: Date.now(),
    tags: ["Hosting"],
    title: "How Litespeed Technology Works To Speed Up Your Site",
    preview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem, voluptates molestiae",
    href: "#",
    author: {
      name: "Yusuf Amin",
      avatar: "",
    },
  },
  {
    imgSrc: "/assets/blog-img.svg",
    date: Date.now(),
    tags: ["Hosting"],
    title: "How Litespeed Technology Works To Speed Up Your Site",
    preview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Iure nulla dolorem, voluptates molestiae",
    href: "#",
    author: {
      name: "Yusuf Amin",
      avatar: "",
    },
  },
];

export const Section10 = () => {
  return (
    <section
      className="container mx-auto px-0 xl:px-[160px] mb-12"
      id="section10"
    >
      <div className="rounded-[42px] xl:rounded-[72px] bg-lightBlue py-7 xl:py-[38px] px-3 xl:px-[135px]">
        <div className="mb-[38px] flex flex-col lg:flex-row items-start lg:items-end justify-between">
          <div>
            <h2 className="title mb-6">Blog</h2>
            <div className="text-big mb-6 lg:mb-0">Latest News</div>
          </div>
          <Link className={buttonVariants()} href="#">
            See all posts
            <Image
              src="/assets/arrow-btn.svg"
              width={24}
              height={24}
              alt="Arrow icon"
              className="w-6 h-6"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-[57px]">
          {data.slice(0, 3).map((i, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-black/20 rounded-[32px]"></div>
              <div className="border-2 border-black rounded-[32px] overflow-hidden relative z-10 group-hover:-translate-y-1.5 transition-all duration-300">
                <div className="p-10 bg-lightRed2 border-b-2 border-black">
                  <div className="w-full h-[150px] relative">
                    <Image
                      src={i.imgSrc}
                      fill
                      alt={i.title}
                      className="object-center object-contain"
                    />
                  </div>
                </div>
                <div className="px-6 py-[18px] bg-white">
                  <div className="flex flex-wrap gap-3 mb-[18px]">
                    <div className="bg-black text-sm font-medium text-white flex gap-2 py-1.5 px-[14px] rounded-full">
                      {new Date(i.date)
                        .toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                        .replace(",", "")}
                      <Image
                        src="/assets/Date.svg"
                        width={16}
                        height={16}
                        alt="Calendar icon"
                        className="w-4 h-4"
                      />
                    </div>
                    {i.tags.map((t, idx) => (
                      <div
                        key={idx}
                        className="bg-black text-sm font-medium text-white py-1.5 px-[14px] hover:bg-black/50 rounded-full"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold capitalize mb-6">
                    {i.title}
                  </h3>
                  <p className="text mb-6">{i.preview}</p>
                  <div className="flex justify-between items-center lg:items-start gap-0 lg:gap-2 xl:gap-0 xl:items-center lg:flex-col xl:flex-row">
                    <div className="flex items-center gap-2">
                      <Image
                        src={i.author.avatar || "/assets/User.svg"}
                        width={26}
                        height={26}
                        alt="User Avatar"
                        className="w-[26px] h-[26px]"
                      />
                      <div className="text leading-tight">{i.author.name}</div>
                    </div>
                    <Link className={buttonVariants()} href={i.href}>
                      Read more
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
