import { useCarousel } from "../../hooks/use-carousel/use-carousel";

type Properties = {
  children: React.ReactNode;
  className?: string;
};

const CarouselContent: React.FC<Properties> = ({ children, className }) => {
  const { carouselReference } = useCarousel();

  return (
    <div ref={carouselReference} className="overflow-hidden">
      <div className={className}>{children}</div>
    </div>
  );
};

export { CarouselContent };
