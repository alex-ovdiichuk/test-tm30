"use client";

import { header } from "@/data/header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MainNav = () => {
  const pathname = usePathname();

  return (
    <>
      {header.map((l) => (
        <Link
          href={l.href}
          key={l.title}
          className={cn(
            "text-xl font-medium py-2 px-[22px] border border-transparent hover:bg-black/10 hover:border-black rounded-[26px] transition-all duration-300 flex items-center gap-2 w-fit",
            {
              "bg-black text-white hover:bg-black/50 hover:border-black/50":
                l.href === pathname,
            }
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
    </>
  );
};
