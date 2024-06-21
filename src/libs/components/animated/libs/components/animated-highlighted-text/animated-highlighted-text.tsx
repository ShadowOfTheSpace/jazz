import { motion } from "framer-motion";

type Properties = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

const AnimatedHighlightedText: React.FC<Properties> = ({
  children,
  className,
  delay = 0,
  duration = 1,
}) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      transition={{ delay, duration }}
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      whileInView={{ opacity: 1 }}
      className={className}
    >
      {children}
    </motion.span>
  );
};

export { AnimatedHighlightedText };
