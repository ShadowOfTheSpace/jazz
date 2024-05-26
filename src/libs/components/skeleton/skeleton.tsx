import { cn } from "~utils/utils";

type Properties = {
  className?: string;
};

const Skeleton: React.FC<Properties> = ({ className }) => {
  return (
    <div
      className={cn("bg-skeleton animate-skeleton bg-[length:500%]", className)}
    />
  );
};

export { Skeleton };
