import useEmblaCarousel from "embla-carousel-react";
import { createContext } from "react";

type Properties = {
  api: ReturnType<typeof useEmblaCarousel>[1];
  carouselReference: ReturnType<typeof useEmblaCarousel>[0];
  canScrollPrevious: boolean;
  canScrollNext: boolean;
  isLoading: boolean;
  scrollPrevious: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  setApi?: (api: ReturnType<typeof useEmblaCarousel>[1]) => void;
};

const CarouselContext = createContext<Properties | null>(null);

export { CarouselContext };
