import { useCallback, useEffect, useState } from "react";
import { getMerchandise } from "~modules/merchandise/merchandise";
import { Merchandise } from "~types/types";
import {
  AnimatedContent,
  AnimatedImage,
  AnimatedText,
  AnimatedTitle,
  Placeholder,
} from "../components";
import {
  CartButton,
  MerchandiseCarousel,
  MerchandiseModal,
} from "./libs/components/components";

import merchandiseImage from "~assets/images/jazz-merchandise.png";

const MerchandiseSection: React.FC = () => {
  const [isMerchandisesLoading, setIsMerchandisesLoading] =
    useState<boolean>(true);
  const [merchandises, setMerchandises] = useState<Merchandise[]>([]);

  const handleGetMerchandises = useCallback(async () => {
    const merchandises = await getMerchandise();

    setMerchandises(merchandises);
    setIsMerchandisesLoading(false);
  }, []);

  useEffect(() => {
    handleGetMerchandises();
  }, [handleGetMerchandises]);

  const isMerchandisesPresent =
    merchandises.length > 0 || isMerchandisesLoading;

  return (
    <section
      id="merch"
      className="flex flex-col px-[16px] sm:px-[32px] max-w-[1400px] md:self-center"
    >
      <div className="flex justify-between items-center gap-x-[50px]">
        <div className="flex flex-col gap-y-[16px] lg:gap-y-[36px] md:max-w-[50%]">
          <AnimatedTitle className="font-karantina text-[32px] text-balance sm:text-[70px] xl:text-[80px] leading-none tracking-[0.05em]">
            Exclusive Merch
          </AnimatedTitle>
          <AnimatedText
            className="text-[14px] text-balance sm:text-[18px] xl:text-[20px] tracking-[0.05em]"
            delay={0.5}
          >
            Long-awaited exquisite fashion brand line inspired and designed by
            Pavel Arakelian. Flavored with unique music vibes. Jack Daniels
            edition. For real fans and jazz connoisseurs only!
          </AnimatedText>
        </div>
        <AnimatedImage
          src={merchandiseImage}
          alt="Pavel Arakelian - jazz"
          className="md:flex hidden w-[300px] h-[245px] shrink-0"
          delay={0.5}
          margin="0px 0px -20% 0px"
        />
      </div>
      <AnimatedContent
        className="mt-[30px] sm:mt-[50px] max-w-[950px] xl:max-w-[1400px] md:self-center w-full"
        margin="0px 0px -20% 0px"
      >
        {isMerchandisesPresent ? (
          <MerchandiseCarousel
            merchandises={merchandises}
            isLoading={isMerchandisesLoading}
          />
        ) : (
          <Placeholder
            description="We apologize, but there are currently no merchandise available for purchase. Please check back later for updates or subscribe to our newsletter to be the first to know when merchandise go on sale."
            title="Merchandise not available"
          />
        )}
      </AnimatedContent>
      <MerchandiseModal
        merchandises={merchandises}
        isLoading={isMerchandisesLoading}
      />
      <CartButton />
    </section>
  );
};

export { MerchandiseSection };
