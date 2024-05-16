import { useCarousel } from "../../hooks/hooks";

type Properties = {
  children: React.ReactNode;
  className?: string;
};

const CarouselControls: React.FC<Properties> = ({ children, className }) => {
  const { api } = useCarousel();
  const hasEnoughSlides = api && api.scrollSnapList().length > 1;

  return <div className={className}>{hasEnoughSlides && children}</div>;
};

export { CarouselControls };
