import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import galleryImage1 from "~assets/images/gallery-image-1.webp";
import galleryImage2 from "~assets/images/gallery-image-2.webp";
import galleryImage3 from "~assets/images/gallery-image-3.webp";
import galleryImage4 from "~assets/images/gallery-image-4.webp";
import galleryImage5 from "~assets/images/gallery-image-5.webp";
import { AnimatedTitle } from "~components/components";
import { GalleryImage } from "./libs/components/components";

const GallerySection: React.FC = () => {
  const imageContainerReference = useRef<HTMLDivElement | null>(null);

  const isContainerInView = useInView(imageContainerReference, { once: true });

  const [order, setOrder] = useState<number[]>([]);

  useEffect(() => {
    const updateOrder = () => {
      const isMobile = window.innerWidth < 768;
      const newOrder = isMobile ? [2, 1, 3, 5, 4] : [1, 2, 3, 5, 4];
      setOrder(newOrder);
    };

    updateOrder();
    window.addEventListener("resize", updateOrder);

    return () => {
      window.removeEventListener("resize", updateOrder);
    };
  }, []);

  return (
    <section
      id="gallery"
      className="flex flex-col gap-y-[8px] sm:gap-y-[16px] xl:gap-y-[32px] px-[16px] sm:px-[32px] w-full max-w-[1400px] self-center"
    >
      <AnimatedTitle className="font-karantina text-[32px] sm:text-[70px] xl:text-[80px] leading-none tracking-[0.05em]">
        Welcome to Jazz Brilliance
      </AnimatedTitle>
      <div
        className="gap-[16px] xl:gap-[32px] grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2"
        ref={imageContainerReference}
      >
        <GalleryImage
          alt="Saxophone"
          className="order-2 md:order-1 rounded-[10px] w-full h-full aspect-square object-cover"
          src={galleryImage1}
          orderIndex={order[0]}
          isVisible={isContainerInView}
        />
        <GalleryImage
          alt="Pavel plays the saxophone"
          className="order-1 md:order-2 col-span-2 rounded-[10px] w-full h-full md:max-h-[310px] aspect-[652/310] object-cover"
          src={galleryImage2}
          orderIndex={order[1]}
          isVisible={isContainerInView}
        />
        <GalleryImage
          alt="Pavel and saxophone"
          className="order-3 row-span-2 rounded-[10px] w-full md:max-w-[310px] h-full max-h-full md:aspect-[310/652] object-cover"
          src={galleryImage5}
          orderIndex={order[2]}
          isVisible={isContainerInView}
        />
        <GalleryImage
          alt="Pavel plays the trumpet"
          className="order-5 md:order-4 col-span-2 rounded-[10px] w-full h-full md:max-h-[310px] aspect-[652/310] object-cover"
          src={galleryImage3}
          orderIndex={order[3]}
          isVisible={isContainerInView}
        />
        <GalleryImage
          alt="Pavel and saxophone"
          className="order-4 md:order-5 rounded-[10px] w-full h-full aspect-square object-cover"
          src={galleryImage4}
          orderIndex={order[4]}
          isVisible={isContainerInView}
        />
      </div>
    </section>
  );
};

export { GallerySection };
