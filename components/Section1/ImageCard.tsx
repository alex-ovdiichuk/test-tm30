import { Card } from "../Card";
import Image from "next/image";

interface ImageCardProps {
  imgSrc: string;
  bg: string;
  text?: string;
  roundedFull?: boolean;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  imgSrc,
  bg,
  text,
  roundedFull,
}) => {
  return (
    <Card roundedFull={roundedFull} className={`${bg} gap-2 xl:gap-6`}>
      <div className="w-[82px] h-[82px] xl:w-24 xl:h-24 relative">
        <Image
          src={imgSrc}
          fill
          alt="Image 1"
          className="object-center object-contain"
        />
      </div>
      {text && (
        <span className="text-black text-xl xl:text-[40px] font-bold">
          {text}
        </span>
      )}
    </Card>
  );
};
