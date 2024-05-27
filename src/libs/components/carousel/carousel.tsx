import { useCallback, useEffect, useState } from "react";
import {
  CarouselButton,
  CarouselContent,
  CarouselContext,
  CarouselControls,
  CarouselDots,
  CarouselItem,
} from "./libs/components/components";

import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { cn } from "~utils/utils";

type Properties = {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  opts?: Parameters<typeof useEmblaCarousel>[0];
  plugins?: Parameters<typeof useEmblaCarousel>[1];
};

const Carousel: React.FC<Properties> & {
  Button: typeof CarouselButton;
  Controls: typeof CarouselControls;
  Content: typeof CarouselContent;
  Dots: typeof CarouselDots;
  Item: typeof CarouselItem;
} = ({ children, className, isLoading = false, opts, plugins }) => {
  const [carouselReference, api] = useEmblaCarousel(
    {
      ...opts,
      watchDrag: (api) => {
        return api.scrollSnapList().length > 1;
      },
    },
    plugins
  );

  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const handleCarouselChanged = useCallback((api: UseEmblaCarouselType[1]) => {
    if (!api) {
      return;
    }

    setCanScrollPrevious(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrevious = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    handleCarouselChanged(api);
    api.on("reInit", handleCarouselChanged);
    api.on("select", handleCarouselChanged);

    return () => {
      api?.off("select", handleCarouselChanged);
    };
  }, [api, handleCarouselChanged]);

  return (
    <CarouselContext.Provider
      value={{
        api,
        canScrollNext,
        canScrollPrevious,
        carouselReference,
        isLoading,
        scrollNext,
        scrollPrevious,
        scrollTo,
      }}
    >
      <div
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};

Carousel.Button = CarouselButton;
Carousel.Content = CarouselContent;
Carousel.Controls = CarouselControls;
Carousel.Dots = CarouselDots;
Carousel.Item = CarouselItem;

export { Carousel };
