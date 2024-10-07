import { ImageCard } from "./ImageCard";

export const CardsMobile = () => {
  return (
    <div className="min-w-[500px] w-[500px] lg:hidden flex items-start flex-wrap gap-3 h-fit">
      <ImageCard imgSrc="/assets/s1/r-1.svg" bg="bg-accent" />
      <ImageCard imgSrc="/assets/s1/l-2.svg" bg="bg-lightPurple" />
      <ImageCard imgSrc="/assets/s1/r-4.svg" bg="bg-accent2" />

      <ImageCard
        imgSrc="/assets/s1/r-2.svg"
        bg="bg-lightGreen"
        text="Digital Marketing"
        roundedFull
      />
      <ImageCard imgSrc="/assets/s1/r-1.svg" bg="bg-lightRed" />
      {/* <ImageCard imgSrc="/assets/s1/l-1.svg" bg="bg-gray1" />

      <ImageCard imgSrc="/assets/s1/r-3.svg" bg="bg-gray1" />
      <ImageCard
        imgSrc="/assets/s1/r-2.svg"
        bg="bg-lightRed2"
        roundedFull
        text="SEO Services"
      />

      <ImageCard
        imgSrc="/assets/s1/r-5.svg"
        bg="bg-lightRed"
        roundedFull
        text="Apps Development"
      />
      <ImageCard imgSrc="/assets/s1/r-6.svg" bg="bg-lightBlue2" />
      <ImageCard imgSrc="/assets/s1/r-7.svg" bg="bg-lightPurple" roundedFull />
      <ImageCard imgSrc="/assets/s1/r-8.svg" bg="bg-white" /> */}
    </div>
  );
};
