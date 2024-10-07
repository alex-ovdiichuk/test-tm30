import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { MainNav } from "./MainNav";

export const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between xl:justify-start px-[26px] xl:px-[294px] py-[14px] xl:py-[30px] relative z-50">
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
        <MainNav />
      </div>
      <MobileMenu />
    </header>
  );
};
