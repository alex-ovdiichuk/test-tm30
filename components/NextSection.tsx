import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface NextSectionProps {
  id: string;
  className?: string;
}

export const NextSection: React.FC<NextSectionProps> = ({ id, className }) => {
  return (
    <Link
      href={id}
      className={cn(
        "w-[52px] h-[52px] xl:w-[78px] xl:h-[78px] rounded-full bg-black flex items-center justify-center absolute -bottom-[26px] xl:-bottom-[39px] left-1/2 -translate-x-1/2 hover:bg-black/60 transition-all duration-300",
        className
      )}
    >
      <Image
        src="/assets/Down.svg"
        width={26}
        height={28}
        alt="Arrow down"
        className="w-[15px] xl:w-[26px] h-4 xl:h-7"
      />
    </Link>
  );
};
