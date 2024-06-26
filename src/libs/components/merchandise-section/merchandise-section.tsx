import { useCallback, useEffect, useState } from "react";
import merchandiseImage from "~assets/images/jazz-merchandise.png";
import { useLanguageContext } from "~hooks/hooks";
import { getMerchandise } from "~modules/merchandise/merchandise";
import { Merchandise } from "~types/types";
import { Animated, Placeholder } from "../components";
import {
  CartButton,
  MerchandiseCarousel,
  MerchandiseModal,
} from "./libs/components/components";

const MerchandiseSection: React.FC = () => {
  const { translate } = useLanguageContext();

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
          <Animated.Title className="font-karantina text-[32px] text-balance sm:text-[70px] xl:text-[80px] leading-none tracking-[0.05em]">
            {translate("Exclusive Merch")}
          </Animated.Title>
          <Animated.Text
            className="text-[14px] text-balance sm:text-[18px] xl:text-[20px] tracking-[0.05em]"
            delay={0.3}
          >
            {translate("Merch text")}
          </Animated.Text>
        </div>
        <Animated.Image
          src={merchandiseImage}
          alt="Pavel Arakelian - jazz"
          className="md:flex hidden w-[300px] h-[245px] shrink-0"
          delay={0.3}
          margin="0px 0px -20% 0px"
        />
      </div>
      <Animated.Content
        className="mt-[30px] sm:mt-[50px] max-w-[950px] xl:max-w-[1400px] md:self-center w-full"
        delay={0.5}
        margin="0px 0px -20% 0px"
      >
        {isMerchandisesPresent ? (
          <MerchandiseCarousel
            merchandises={merchandises}
            isLoading={isMerchandisesLoading}
          />
        ) : (
          <Placeholder
            description={translate("Merch placeholder text")}
            title={translate("Merchandise not available")}
          />
        )}
      </Animated.Content>
      <MerchandiseModal
        merchandises={merchandises}
        isLoading={isMerchandisesLoading}
      />
      <CartButton />
    </section>
  );
};

export { MerchandiseSection };
