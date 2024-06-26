import { cn } from "~utils/utils";
import { useCarousel } from "../../hooks/use-carousel/use-carousel";
import { CarouselItem } from "../components";

type Properties = {
  children: React.ReactNode;
  className?: string;
  skeletonItem?: React.FC;
  skeletonItemsCount?: number;
  skeletonWrapperClassName?: string;
};

const CarouselContent: React.FC<Properties> = ({
  children,
  className,
  skeletonItem: SkeletonItem,
  skeletonItemsCount,
  skeletonWrapperClassName,
}) => {
  const { carouselReference, isLoading } = useCarousel();

  return (
    <div ref={carouselReference} className="overflow-hidden">
      <div className={cn("*:active:cursor-grabbing", className)}>
        {isLoading && SkeletonItem ? (
          <>
            {new Array(skeletonItemsCount).fill(0).map((_, index) => {
              return (
                <CarouselItem className={skeletonWrapperClassName} key={index}>
                  <SkeletonItem />
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
