import { motion, type Variants } from "framer-motion";

import { GALLERY_IMAGE_DELAY } from "./libs/constants/constants";

type Properties = {
  alt?: string;
  className?: string;
  isVisible?: boolean;
  orderIndex: number;
  src: string;
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "5%",
  },
  visible: {
    opacity: 1,
    y: "0%",
  },
};

const GalleryImage: React.FC<Properties> = ({
  alt,
  className,
  isVisible = false,
  orderIndex,
  src,
}) => {
  return (
    <motion.img
      alt={alt}
      animate={isVisible ? "visible" : "hidden"}
      className={className}
      initial={"hidden"}
      src={src}
      transition={{ delay: orderIndex * GALLERY_IMAGE_DELAY, duration: 1 }}
      variants={imageVariants}
    />
  );
};

export { GalleryImage };
