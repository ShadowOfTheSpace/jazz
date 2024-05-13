import { IconName } from "~/libs/types/types";
import { cn } from "~/libs/utils/utils";
import { Icon } from "~components/components";

type Properties = {
  className?: string;
  iconName?: IconName;
  label?: string;
  onClick?: () => void;
  title?: string;
};

const Button: React.FC<Properties> = ({
  className,
  iconName,
  label,
  onClick,
  title,
}) => {
  const hasOnlyIcon = Boolean(iconName && !label);

  return (
    <button
      className={cn(
        "flex gap-x-[5px] border-[3px] border-jz-gold bg-jz-gold has-hover:hover:bg-transparent no-hover:active:bg-transparent  rounded-[40px] font-inter sm:font-bold text-[16px] text-jz-main sm:text-[18px] xl:text-[20px] has-hover:hover:text-jz-gold no-hover:active:text-jz-gold transition-colors justify-center items-center",
        !hasOnlyIcon && "px-[15px] sm:px-[32px] py-[5px] sm:py-[10px]",
        className
      )}
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
