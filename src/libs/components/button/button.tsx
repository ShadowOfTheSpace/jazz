import { IconName } from "~/libs/types/types";
import { cn } from "~utils/utils";
import { Icon } from "~components/components";

type Properties = {
  className?: string;
  iconName?: IconName;
  isDisabled?: boolean;
  label?: string;
  onClick?: () => void;
  title?: string;
};

const Button: React.FC<Properties> = ({
  className,
  iconName,
  isDisabled = false,
  label,
  onClick,
  title,
}) => {
  return (
    <button
      className={cn(
        "flex justify-center items-center gap-x-[5px] border-[2px] border-jz-gold bg-jz-gold has-hover:hover:bg-transparent no-hover:active:bg-transparent rounded-[40px] font-inter sm:font-bold text-[16px] text-jz-main sm:text-[18px] xl:text-[20px] has-hover:hover:text-jz-gold no-hover:active:text-jz-gold transition-colors",
        isDisabled &&
          "disabled:text-jz-main/50 disabled:pointer-events-none disabled:opacity-75",
        label && "px-[15px] sm:px-[32px] py-[5px] sm:py-[10px]",
        className
      )}
      disabled={isDisabled}
      onClick={onClick}
      title={title}
    >
      {iconName && (
        <Icon name={iconName} className="shrink-0 size-[20px] sm:size-[24px]" />
      )}
      {label && <span>{label}</span>}
    </button>
  );
};

export { Button };
