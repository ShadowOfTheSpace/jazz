import { Link } from "~components/components";
import { cn } from "~utils/utils";
import { SIZES } from "~constants/constants";
import { useLocation } from "react-router-dom";

type Properties = {
  selectedSize: string;
  availableSizes: string[];
};

const MerchandiseSizeSelector: React.FC<Properties> = ({
  selectedSize,
  availableSizes,
}) => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col gap-y-[10px]">
      <h4 className="text-[16px] text-jz-light-gray sm:text-[20px] leading-none">Sizes</h4>
      <div className="flex flex-wrap -ml-[10px]">
        {SIZES.map((size, index) => {
          const isAvailable = availableSizes.includes(size);
          const isSelected = size === selectedSize;

          return (
            <Link
              key={index}
              href={`${pathname}?size=${size}`}
              className={cn(
                "px-[5px] uppercase w-[35px] text-center box-content has-hover:hover:text-jz-gold/75 no-hover:active:text-jz-gold/75 transition-colors font-inter",
                !isAvailable &&
                  "pointer-events-none line-through text-jz-light-gray",
                isSelected &&
                  "text-jz-gold font-bold has-hover:hover:text-jz-gold no-hover:active:text-jz-gold",
                isSelected && !isAvailable && "opacity-75 "
              )}
            >
              {size}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export { MerchandiseSizeSelector };
