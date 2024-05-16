import { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";
import { useCarousel } from "../../hooks/use-carousel/use-carousel";
import { Button } from "~components/components";
import { cn } from "~utils/utils";

type Properties = {
  activeDotClassName?: string;
  className?: string;
  dotClassName?: string;
};

const CarouselDots: React.FC<Properties> = ({
  activeDotClassName,
  className,
  dotClassName,
}) => {
  const { api, scrollTo } = useCarousel();
  const [slides, setSlides] = useState<number[]>([]);
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleCarouselInit = useCallback((api: EmblaCarouselType) => {
    setSlides(api.scrollSnapList());
  }, []);

  const handleCarouselChange = useCallback((api: EmblaCarouselType) => {
    setSelectedSlide(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    handleCarouselInit(api);
    handleCarouselChange(api);
    api.on("reInit", handleCarouselInit);
    api.on("reInit", handleCarouselChange);
    api.on("select", handleCarouselChange);
  }, [api, handleCarouselInit, handleCarouselChange]);

  const handleDotClick = useCallback(
    (index: number) => {
      return () => {
        scrollTo(index);
      };
    },
    [scrollTo]
  );

  if (slides.length <= 1) {
    return null;
  }

  return (
    <div className={cn("flex", className)}>
      {slides.map((_, index) => {
        const isActive = selectedSlide === index;
        return (
          <Button
            className={cn(dotClassName, isActive && activeDotClassName)}
            onClick={handleDotClick(index)}
            title={`Slide ${index + 1}`}
          />
        );
      })}
    </div>
  );
};

export { CarouselDots };
