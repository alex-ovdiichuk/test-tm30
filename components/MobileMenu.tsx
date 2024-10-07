"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import { header } from "@/data/header";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="bg-black text-white text-xl font-medium py-2 px-[22px] rounded-full flex items-center gap-2 xl:hidden">
        Menu
        <Image
          src="/assets/burger.svg"
          width={24}
          height={24}
          alt="Burger menu"
        />
      </SheetTrigger>
      <SheetContent side="left" className="w-1/2">
        <Link
          href="/"
          className="relative w-[74px] h-[29px] mr-0 xl:mr-[110px] block ml-[14px] mb-[22px]"
        >
          <Image
            src="/assets/logo.svg"
            fill
            alt="Logo"
            className="object-contain object-center"
          />
        </Link>
        <div className="gap-[18px] flex flex-col">
          {header.map((l) => (
            <Link
              href={l.href}
              key={l.title}
              className={cn(
                "text-xl font-medium py-2 px-[22px] hover:bg-black hover:text-white rounded-[26px] transition-all duration-300 flex items-center gap-2 w-fit",
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
      </SheetContent>
    </Sheet>
  );
};
