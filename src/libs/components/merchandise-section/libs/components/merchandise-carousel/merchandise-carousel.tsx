import { Carousel } from "~components/components";
import { Merchandise as TMerchandise } from "~types/types";
import { cn } from "~utils/utils";
import { Merchandise, MerchandiseSkeleton } from "../components";
import autoPlay from "embla-carousel-autoplay";

type Properties = {
  isLoading?: boolean;
  merchandises: TMerchandise[];
};

const MerchandiseCarousel: React.FC<Properties> = ({
  merchandises,
  isLoading,
}) => {
  const isEnoughMerchandises = merchandises.length > 4;

  return (
    <Carousel
      isLoading={isLoading}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        autoPlay({
          delay: 3500,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          stopOnFocusIn: true,
        }),
      ]}
    >
      <Carousel.Content
        className="flex -ml-[30px]"
        skeletonWrapperClassName="pl-[30px] basis-full md:basis-1/2 xl:basis-1/3"
        skeletonItemsCount={3}
        skeletonItem={MerchandiseSkeleton}
      >
        {merchandises.map((merchandise, index) => {
          return (
            <Carousel.Item
              className={cn(
                "pl-[30px] basis-full md:basis-1/2 xl:basis-1/3",
                !isEnoughMerchandises && "xl:grow-0"
              )}
              key={index}
            >
              <Merchandise merchandise={merchandise} />
            </Carousel.Item>
          );
        })}
      </Carousel.Content>
      <Carousel.Controls className="flex flex-wrap justify-center sm:justify-between items-center my-[20px]">
        <div className="sm:flex gap-x-[10px] hidden">
          <Carousel.Button variant="previous" className="size-[42px]" />
          <Carousel.Button variant="next" className="size-[42px]" />
        </div>
        <Carousel.Dots
          activeDotClassName="border-jz-gold has-hover:hover:border-jz-gold bg-jz-gold no-hover:active:bg-jz-gold has-hover:hover:bg-jz-gold"
          className="flex gap-x-[10px]"
          dotClassName="border-jz-gold/50 has-hover:hover:border-jz-gold no-hover:active:border-jz-gold bg-transparent size-[14px]"
        />
      </Carousel.Controls>
    </Carousel>
  );
};

export { MerchandiseCarousel };
