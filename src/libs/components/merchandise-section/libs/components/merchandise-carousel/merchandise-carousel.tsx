import autoPlay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Carousel } from "~components/components";
import { Merchandise as TMerchandise } from "~types/types";
import { cn } from "~utils/utils";
import { Merchandise, MerchandiseSkeleton } from "../components";

type Properties = {
  isLoading?: boolean;
  merchandises: TMerchandise[];
};

const MerchandiseCarousel: React.FC<Properties> = ({
  merchandises,
  isLoading,
}) => {
  const isEnoughMerchandises = merchandises.length > 4;
  const [carouselApi, setCarouselApi] =
    useState<ReturnType<typeof useEmblaCarousel>[1]>();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isCarouselInView = useInView(containerRef, {
    once: true,
    amount: "all",
  });

  useEffect(() => {
    if (carouselApi && isCarouselInView) {
      const plugin = carouselApi.plugins().autoplay;
      if (plugin && "play" in plugin && typeof plugin.play === "function") {
        plugin.play();
      }
    }
  }, [carouselApi, isCarouselInView]);

  return (
    <div ref={containerRef} className="lg:flex lg:justify-center">
      <Carousel
        isLoading={isLoading}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          autoPlay({
            delay: 3500,
            playOnInit: false,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
            stopOnFocusIn: true,
          }),
        ]}
        className="w-full max-w-[950px] xl:max-w-max self-center"
        setApi={setCarouselApi}
      >
        <Carousel.Content
          className="flex -ml-[30px]"
          skeletonWrapperClassName="pl-[30px] basis-full md:basis-1/2 xl:basis-1/3 w-[calc(100vw-32px-32px)]"
          skeletonItemsCount={3}
          skeletonItem={MerchandiseSkeleton}
        >
          {merchandises.map((merchandise, index) => {
            return (
              <Carousel.Item
                className={cn(
                  "pl-[30px] basis-full md:basis-1/2 xl:basis-1/3",
                  !isEnoughMerchandises && "md:grow-0"
                )}
                key={index}
              >
                <Merchandise merchandise={merchandise} />
              </Carousel.Item>
            );
          })}
        </Carousel.Content>
        <Carousel.Controls className="flex flex-wrap justify-center sm:justify-between items-center gap-[10px] mt-[20px] min-h-[14px] sm:min-h-[42px]">
          <div className="sm:flex gap-x-[10px] hidden">
            <Carousel.Button variant="previous" className="size-[42px]" />
            <Carousel.Button variant="next" className="size-[42px]" />
          </div>
          <Carousel.Dots
            activeDotClassName="border-jz-gold has-hover:hover:border-jz-gold bg-jz-gold no-hover:active:bg-jz-gold has-hover:hover:bg-jz-gold"
            className="flex flex-wrap justify-center gap-[10px]"
            dotClassName="border-jz-gold/50 has-hover:hover:border-jz-gold no-hover:active:border-jz-gold bg-transparent size-[14px]"
          />
        </Carousel.Controls>
      </Carousel>
    </div>
  );
};

export { MerchandiseCarousel };
