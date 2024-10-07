import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

interface ItemProps {
  item: { href: string; bg: string; tag: string; imgSrc: string };
}

export const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 rounded-[32px] bg-black/20"></div>
      <div
        className={`rounded-[32px] border-2 border-black ${item.bg} p-9 relative z-10 group-hover:-translate-y-1.5 transition-all duration-300`}
      >
        <div className="w-[258px] h-[258px] lg:w-[144px] lg:h-[144px] xl:w-[244px] xl:h-[244px] relative mx-auto">
          <Image
            src={item.imgSrc}
            fill
            alt="Image"
            className="object-contain object-center"
          />
        </div>
      </div>
      <Link
        href={item.href}
        className={cn(
          buttonVariants(),
          "absolute w-3/5 left-1/2 -translate-x-1/2 bottom-7 z-20 opacity-0 group-hover:opacity-100 text-lg lg:text-xs xl:text-lg"
        )}
      >
        Read about
        <Image
          src="/assets/arrow-btn.svg"
          width={24}
          height={24}
          alt="Arrow icon"
          className="w-6 h-6 lg:w-4 lg:h-4 xl:w-6 xl:h-6"
        />
      </Link>
    </div>
  );
};
