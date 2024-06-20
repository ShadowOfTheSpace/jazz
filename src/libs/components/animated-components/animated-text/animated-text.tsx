import { motion } from "framer-motion";
import { cn } from "~utils/utils";

type Properties = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

const AnimatedText: React.FC<Properties> = ({
  children,
  className,
  delay = 0,
  duration = 1,
}) => {
  return (
    <motion.div
      initial={{ y: "var(--text-y-offset)", opacity: 0 }}
      transition={{ delay, duration }}
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      whileInView={{ y: 0, opacity: 1 }}
      className={cn(
        className,
        "[--text-y-offset:14px] md:[--text-y-offset:32px]"
      )}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedText };
