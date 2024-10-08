import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  href: string;
  imgSrc?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, href, imgSrc }) => {
  return (
    <li>
      <Link href={href} className="text-white text flex items-center gap-3">
        <Image
          src={imgSrc || "/assets/Open.svg"}
          width={24}
          height={24}
          alt="Open icon"
          className="w-6 h-6"
        />
        {title}
      </Link>
    </li>
  );
};
