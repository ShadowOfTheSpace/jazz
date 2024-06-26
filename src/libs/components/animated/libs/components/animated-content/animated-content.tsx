import { motion } from "framer-motion";
import { cn } from "~utils/utils";

type Properties = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  margin?: string;
};

const AnimatedContent: React.FC<Properties> = ({
  children,
  className,
  delay = 0,
  duration = 1,
  margin = "0px",
}) => {
  return (
    <motion.div
      initial={{ y: "var(--content-y-offset)", opacity: 0 }}
      transition={{ delay, duration }}
      viewport={{ once: true, margin }}
      whileInView={{ y: 0, opacity: 1 }}
      className={cn(
        className,
        "[--content-y-offset:10%] md:[--content-y-offset:20%]"
      )}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedContent };
