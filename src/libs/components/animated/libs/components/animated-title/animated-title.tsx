import { motion } from "framer-motion";
import { cn } from "~utils/utils";

type Properties = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

const AnimatedTitle: React.FC<Properties> = ({
  children,
  className,
  delay = 0,
  duration = 1,
}) => {
  return (
    <motion.h1
      initial={{ x: "var(--title-x-offset)", opacity: 0 }}
      transition={{ delay, duration }}
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      whileInView={{ x: 0, opacity: 1 }}
      className={cn(
        className,
        "[--title-x-offset:-10px] md:[--title-x-offset:-50px]"
      )}
    >
      {children}
    </motion.h1>
  );
};

export { AnimatedTitle };
