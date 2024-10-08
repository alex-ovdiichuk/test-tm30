import Link from "next/link";
import Image from "next/image";
import { SubscribeForm } from "./SubscribeForm";
import { MenuBlock } from "./Footer/MenuBlock";
import { MenuItem } from "./Footer/MenuItem";
import { socialData } from "@/data/social";

export const Footer = () => {
  return (
    <footer className="bg-black rounded-tl-[42px] rounded-tr-[42px] xl:rounded-tl-[72px] xl:rounded-tr-[72px]">
      <div className="container mx-auto px-3 xl:px-[294px] pt-12 pb-6">
        <div className="mb-6 lg:mb-[50px] flex flex-col xl:flex-row lg:gap-6 xl:gap-0">
          <div className="xl:w-1/3 w-full mb-8 lg:mb-0">
            <Link href="/" className="relative w-[74px] h-[29px] mb-6 block">
              <Image
                src="/assets/Logo-white.svg"
                fill
                alt="Logo"
                className="object-contain object-center"
              />
            </Link>
            <p className="text text-white mb-12">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus facere modi possimus dignissimos, aliquam nobis
              eaque? Voluptatem magnam quisquam rem.
            </p>
            <SubscribeForm />
          </div>

          <div className="w-full xl:w-2/3 lg:pl-8 flex flex-col gap-7 lg:gap-0 lg:flex-row justify-between flex-wrap">
            <MenuBlock title="Useful Links">
              <ul className="flex flex-col gap-7">
                <MenuItem title="Google" href="#" />
                <MenuItem title="Dribbble" href="#" />
                <MenuItem title="Linkedin" href="#" />
                <MenuItem title="Wikipedia" href="#" />
              </ul>
            </MenuBlock>
            <MenuBlock title="Resources">
              <ul className="flex flex-col gap-7">
                <MenuItem title="Support" href="#" />
                <MenuItem title="Dashboard" href="#" />
                <MenuItem title="Drivers" href="#" />
                <MenuItem title="Projects" href="#" />
              </ul>
            </MenuBlock>
            <MenuBlock title="Contact Information">
              <ul className="flex flex-col gap-7 mb-[30px]">
                <MenuItem
                  title="example@support.com"
                  href="mailto:example@support.com"
                  imgSrc="/assets/Email.svg"
                />
                <MenuItem
                  title="5 xyz st., adc, vallhalla"
                  href="#"
                  imgSrc="/assets/Map.svg"
                />
                <MenuItem
                  title="+20123456789"
                  href="tel:+20123456789"
                  imgSrc="/assets/Call.svg"
                />
              </ul>
              <div className="flex gap-3 mb-[18px]">
                {socialData.map((i, id) => (
                  <a
                    href={i.href}
                    target="_blank"
                    key={id}
                    className="bg-white h-10 w-10 rounded-full flex justify-center items-center transition-all duration-300 hover:bg-white"
                  >
                    <i.icon className="h-6 w-6 text-black" />
                  </a>
                ))}
              </div>
            </MenuBlock>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <p className="text-white text">&copy; 2024 Created by: Martin</p>
          <div className="text-white text flex gap-8">
            <Link href="#">Terms of Use</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
