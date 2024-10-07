import { cn } from "@/lib/utils";

interface CardProps {
  roundedFull?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  className,
  roundedFull,
  children,
}) => {
  return (
    <div
      className={cn(
        "py-1 xl:py-5 px-5 xl:px-[42px] w-fit flex items-center justify-center rounded-xl xl:rounded-[28px] border-2 border-black",
        { "rounded-full": roundedFull },
        className
      )}
    >
      {children}
    </div>
  );
};
