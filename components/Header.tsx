"use client";

import { header } from "@/data/header";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const pathname = usePathname();

  return (
    <div className="container mx-auto flex items-center justify-between xl:justify-start px-[26px] xl:px-[294px] py-[14px] xl:py-[30px]">
      <Link
        href="/"
        className="relative w-[74px] h-[29px] mr-0 xl:mr-[110px] block"
      >
        <Image
          src="/assets/logo.svg"
          fill
          alt="Logo"
          className="object-contain object-center"
        />
      </Link>
      <div className="gap-10 hidden xl:flex">
        {header.map((l) => (
          <Link
            href={l.href}
            key={l.title}
            className={cn(
              "text-xl font-medium py-2 px-[22px] hover:bg-black hover:text-white rounded-[26px] transition-all duration-300 flex items-center gap-2",
              { "bg-black text-white": l.href === pathname }
            )}
          >
            {l.title}
            {l.href === pathname && (
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
            )}
          </Link>
        ))}
      </div>
      <MobileMenu />
    </div>
  );
};
