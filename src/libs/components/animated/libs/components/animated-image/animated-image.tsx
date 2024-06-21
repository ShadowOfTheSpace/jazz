import { motion } from "framer-motion";
import { RefObject } from "react";

type Properties = {
  alt: string;
  className?: string;
  delay?: number;
  duration?: number;
  margin?: string;
  src: string;
  root?: RefObject<Element>;
};

const AnimatedImage: React.FC<Properties> = ({
  alt,
  className,
  delay = 0,
  duration = 1,
  margin = "0px",
  src,
  root,
}) => {
  return (
    <motion.img
      alt={alt}
      src={src}
      className={className}
      initial={{ opacity: 0 }}
      transition={{ delay, duration }}
      viewport={{ once: true, margin, root }}
      whileInView={{ x: 0, opacity: 1 }}
    />
  );
};

export { AnimatedImage };
