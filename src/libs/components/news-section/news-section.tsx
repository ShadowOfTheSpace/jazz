import { Button } from "~components/components";
import newsImage from "~assets/images/news-image.png";

const NewsSection: React.FC = () => {
  return (
    <section className="flex md:flex-row flex-col justify-between gap-y-[16px] md:gap-x-[50px] md:gap-y-0 px-[16px] sm:px-[32px] w-full max-w-[1400px] self-center">
      <h1 className="md:hidden font-karantina text-[32px] sm:text-[70px] leading-none tracking-[0.05em]">
        News in social networks
      </h1>
      <img
        alt="Pavel plays the saxophone"
        className="1w-[477px] min-w-0 max-h-[330px] sm:max-h-[450px] md:max-h-full aspect-[477/598] object-contain"
        src={newsImage}
      />
      <div className="flex flex-col gap-y-[16px] lg:gap-y-[36px] w-full lg:max-w-[518px] xl:max-w-[740px]">
        <h1 className="md:block hidden font-karantina text-[32px] sm:text-[70px] xl:text-[100px] leading-none tracking-[0.05em]">
          News in social networks
        </h1>
        <h3 className="font-kaushan text-[24px] text-balance text-jz-gold sm:text-[32px] xl:text-[40px] leading-tight">
          Discover the world of jazz with Pavel Arakelian!
        </h3>
        <p className="text-[14px] text-balance sm:text-[18px] xl:text-[20px] tracking-[0.05em]">
          Dear jazz lovers, I am immensely grateful for your continuous support.
          Every day, I work on new melodies to bring you joy and inspiration.
          Follow my social media pages where I share news, photos, and exclusive
          content from my musical journey.
        </p>
        <Button className="max-w-max" label="Review" />
      </div>
    </section>
  );
};

export { NewsSection };
