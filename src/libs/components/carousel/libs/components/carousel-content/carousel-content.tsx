import { Skeleton } from "~components/components";
import { useCarousel } from "../../hooks/use-carousel/use-carousel";
import { CarouselItem } from "../components";
import { cn } from "~/libs/utils/utils";

type Properties = {
  children: React.ReactNode;
  className?: string;
  skeletonItemsCount?: number;
  skeletonWrapperClassName?: string;
  skeletonClassName?: string;
};

const CarouselContent: React.FC<Properties> = ({
  children,
  className,
  skeletonItemsCount,
  skeletonWrapperClassName,
  skeletonClassName,
}) => {
  const { carouselReference, isLoading } = useCarousel();

  return (
    <div ref={carouselReference} className="overflow-hidden">
      <div className={cn("*:active:cursor-grabbing", className)}>
        {isLoading ? (
          <>
            {new Array(skeletonItemsCount).fill(0).map((_, index) => {
              return (
                <CarouselItem className={skeletonWrapperClassName} key={index}>
                  <Skeleton className={skeletonClassName} />
                </CarouselItem>
              );
            })}
          </>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export { CarouselContent };
