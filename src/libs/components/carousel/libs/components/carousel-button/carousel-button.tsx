import { Button } from "~components/components";
import { useCarousel } from "../../hooks/use-carousel/use-carousel";

type Properties = {
  className?: string;
  variant: "next" | "previous";
};

const CarouselButton: React.FC<Properties> = ({ variant, className }) => {
  const { canScrollNext, canScrollPrevious, scrollNext, scrollPrevious } =
    useCarousel();

  return (
    <Button
      className={className}
      iconName={variant === "next" ? "rightArrow" : "leftArrow"}
      isDisabled={variant === "next" ? !canScrollNext : !canScrollPrevious}
      onClick={variant === "next" ? scrollNext : scrollPrevious}
    />
  );
};

export { CarouselButton };
