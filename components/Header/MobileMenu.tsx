import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { MainNav } from "./MainNav";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-black text-white text-xl font-medium py-2 px-[22px] rounded-full flex items-center gap-2 xl:hidden">
        Menu
        <Image
          src="/assets/burger.svg"
          width={24}
          height={24}
          alt="Burger menu"
          className="w-6 h-6"
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
          <MainNav />
        </div>
      </SheetContent>
    </Sheet>
  );
};
