import galleryImage1 from "~assets/images/gallery-image-1.webp";
import galleryImage2 from "~assets/images/gallery-image-2.webp";
import galleryImage3 from "~assets/images/gallery-image-3.webp";
import galleryImage4 from "~assets/images/gallery-image-4.webp";
import galleryImage5 from "~assets/images/gallery-image-5.webp";

const GallerySection: React.FC = () => {
  return (
    <section
      id="gallery"
      className="flex flex-col gap-y-[8px] sm:gap-y-[16px] xl:gap-y-[32px] px-[16px] sm:px-[32px] w-full max-w-[1400px] self-center"
    >
      <h1 className="font-karantina text-[32px] sm:text-[70px] xl:text-[100px] leading-none tracking-[0.05em]">
        Welcome to Jazz Brilliance
      </h1>
      <div className="gap-[16px] xl:gap-[32px] grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2">
        <img
          alt="Saxophone"
          className="order-2 md:order-1 rounded-[10px] w-full h-full aspect-square object-cover"
          src={galleryImage1}
        />
        <img
          alt="Pavel plays the saxophone"
          className="order-1 md:order-2 col-span-2 rounded-[10px] w-full h-full md:max-h-[310px] aspect-[652/310] object-cover"
          src={galleryImage2}
        />
        <img
          alt="Pavel and saxophone"
          className="order-3 row-span-2 rounded-[10px] w-full md:max-w-[310px] h-full max-h-full md:aspect-[310/652] object-cover"
          src={galleryImage5}
        />
        <img
          alt="Pavel plays the trumpet"
          className="order-5 md:order-4 col-span-2 rounded-[10px] w-full h-full md:max-h-[310px] aspect-[652/310] object-cover"
          src={galleryImage3}
        />
        <img
          alt="Pavel and saxophone"
          className="order-4 md:order-5 rounded-[10px] w-full h-full aspect-square object-cover"
          src={galleryImage4}
        />
      </div>
    </section>
  );
};

export { GallerySection };
