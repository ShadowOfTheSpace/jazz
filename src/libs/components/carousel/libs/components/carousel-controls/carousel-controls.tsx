import { useCarousel } from "../../hooks/hooks";

type Properties = {
  children: React.ReactNode;
  className?: string;
};

const CarouselControls: React.FC<Properties> = ({ children, className }) => {
  const { api, isLoading } = useCarousel();
  const hasEnoughSlides = api && api.scrollSnapList().length > 1;

  return (
    <div className={className}>
      {(hasEnoughSlides || isLoading) && children}
    </div>
  );
};

export { CarouselControls };
