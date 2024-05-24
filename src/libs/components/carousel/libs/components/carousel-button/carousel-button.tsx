import { Button, Skeleton } from "~components/components";
import { useCarousel } from "../../hooks/use-carousel/use-carousel";

type Properties = {
  className?: string;
  variant: "next" | "previous";
};

const CarouselButton: React.FC<Properties> = ({ variant, className }) => {
  const {
    canScrollNext,
    canScrollPrevious,
    isLoading,
    scrollNext,
    scrollPrevious,
  } = useCarousel();

  return (
    <>
      {isLoading ? (
        <Skeleton className="rounded-full size-[42px]" />
      ) : (
        <Button
          className={className}
          iconName={variant === "next" ? "rightArrow" : "leftArrow"}
          isDisabled={variant === "next" ? !canScrollNext : !canScrollPrevious}
          onClick={variant === "next" ? scrollNext : scrollPrevious}
        />
      )}
    </>
  );
};

export { CarouselButton };
