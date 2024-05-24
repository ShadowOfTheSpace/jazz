import { Skeleton } from "~components/components";
import { useCarousel } from "../../hooks/use-carousel/use-carousel";
import { CarouselItem } from "../components";

type Properties = {
  children: React.ReactNode;
  className?: string;
  skeletonClassName?: string;
};

const CarouselContent: React.FC<Properties> = ({
  children,
  className,
  skeletonClassName,
}) => {
  const { carouselReference, isLoading } = useCarousel();

  return (
    <div
      ref={carouselReference}
      className="cursor-grab active:cursor-grabbing overflow-hidden"
    >
      <div className={className}>
        {isLoading ? (
          <>
            <CarouselItem className="pl-[30px] basis-full xl:basis-1/2">
              <Skeleton className={skeletonClassName} />
            </CarouselItem>
            <CarouselItem className="pl-[30px] basis-full xl:basis-1/2">
              <Skeleton className={skeletonClassName} />
            </CarouselItem>
          </>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export { CarouselContent };
