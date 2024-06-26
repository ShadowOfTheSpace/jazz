import { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";
import { Button, Skeleton } from "~components/components";
import { useLanguageContext } from "~hooks/hooks";
import { cn } from "~utils/utils";
import { useCarousel } from "../../hooks/use-carousel/use-carousel";

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
  const { translate } = useLanguageContext();

  const { api, isLoading, scrollTo } = useCarousel();
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

  if (slides.length <= 1 && !isLoading) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <Skeleton className="rounded-[10px] w-[200px] h-[16px]" />
      ) : (
        <div className={cn("flex", className)}>
          {slides.map((_, index) => {
            const isActive = selectedSlide === index;
            return (
              <Button
                className={cn(dotClassName, isActive && activeDotClassName)}
                key={index}
                onClick={handleDotClick(index)}
                title={`${translate("Slide")} ${index + 1}`}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export { CarouselDots };
