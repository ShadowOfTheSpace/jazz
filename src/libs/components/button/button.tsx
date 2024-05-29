import { IconName } from "~/libs/types/types";
import { cn } from "~utils/utils";
import { Icon } from "~components/components";
import { AnimatePresence, motion } from "framer-motion";

type Properties = {
  className?: string;
  iconName?: IconName;
  isDisabled?: boolean;
  isLoading?: boolean;
  label?: string;
  onClick?: () => void;
  title?: string;
};

const Button: React.FC<Properties> = ({
  className,
  iconName,
  isDisabled = false,
  isLoading = false,
  label,
  onClick,
  title,
}) => {
  return (
    <button
      className={cn(
        "flex justify-center items-center border-[2px] border-jz-gold bg-jz-gold has-hover:hover:bg-transparent no-hover:active:bg-transparent rounded-[40px] font-inter sm:font-bold text-[16px] text-jz-main sm:text-[18px] xl:text-[20px] has-hover:hover:text-jz-gold no-hover:active:text-jz-gold transition-colors",
        isDisabled &&
          "disabled:text-jz-main/50 disabled:pointer-events-none disabled:opacity-75",
        label && "px-[15px] sm:px-[32px] py-[5px] sm:py-[10px]",
        className
      )}
      disabled={isDisabled}
      onClick={onClick}
      title={title}
    >
      <motion.div
        animate={{ opacity: isLoading ? 0 : 1 }}
        className="flex gap-x-[5px]"
        initial={{ opacity: 1 }}
    >
      {iconName && (
          <Icon
            name={iconName}
            className="shrink-0 size-[20px] sm:size-[24px] self-center"
          />
      )}
      {label && <span>{label}</span>}
      </motion.div>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            animate={{ opacity: 1 }}
            className="absolute"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <Icon className="text-jz-gray animate-spin" name="vinyl" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export { Button };
