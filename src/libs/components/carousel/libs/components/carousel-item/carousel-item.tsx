import { cn } from "~utils/utils";

type Properties = {
  children?: React.ReactNode;
  className?: string;
};

const CarouselItem: React.FC<Properties> = ({ children, className }) => {
  return (
    <div
      aria-roledescription="slide"
      className={cn("min-w-0 shrink-0 grow", className)}
      role="group"
    >
      {children}
    </div>
  );
};

export { CarouselItem };
