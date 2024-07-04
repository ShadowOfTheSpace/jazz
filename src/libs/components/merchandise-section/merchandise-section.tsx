import { useCallback, useEffect, useState } from "react";
import merchandiseImage from "~assets/images/jazz-merchandise.png";
import { useLanguageContext } from "~hooks/hooks";
import { getMerchandise } from "~modules/merchandise/merchandise";
import { Merchandise } from "~types/types";
import { cn } from "~utils/utils";
import { Animated, Placeholder } from "../components";
import {
  CartButton,
  MerchandiseCarousel,
  MerchandiseModal,
} from "./libs/components/components";

const MerchandiseSection: React.FC = () => {
  const { appLanguage, translate } = useLanguageContext();

  const [areMerchandisesLoading, setAreMerchandisesLoading] =
    useState<boolean>(true);
  const [merchandises, setMerchandises] = useState<Merchandise[]>([]);

  const handleGetMerchandises = useCallback(async () => {
    const merchandises = await getMerchandise();

    setMerchandises(merchandises);
    setAreMerchandisesLoading(false);
  }, []);

  useEffect(() => {
    handleGetMerchandises();
  }, [handleGetMerchandises]);

  const areMerchandisesPresent =
    merchandises.length > 0 || areMerchandisesLoading;

  return (
    <section
      id="merch"
      className="flex flex-col items-center px-[16px] sm:px-[32px] max-w-[1400px] lg:self-center"
    >
      <div className="flex justify-between items-center gap-x-[50px]">
        <div className="flex flex-col gap-y-[16px] lg:gap-y-[36px] md:max-w-[50%]">
          <Animated.Title
            className={cn(
              "text-[32px] text-balance leading-none",
              appLanguage === "en" &&
                "font-karantina sm:text-[70px] xl:text-[80px] tracking-[0.05em]",
              appLanguage === "ua" &&
                "font-oswald sm:text-[60px] xl:text-[75px]",
              appLanguage === "by" &&
                "font-oswald sm:text-[60px] xl:text-[75px]",
              appLanguage === "lt" &&
                "font-oswald sm:text-[60px] xl:text-[75px]"
            )}
          >
            {translate("Exclusive Merch")}
          </Animated.Title>
          <Animated.Text
            className={cn(
              "text-[14px] text-balance sm:text-[18px] xl:text-[20px]",
              appLanguage === "en" && "font-kameron tracking-[0.05em]",
              appLanguage === "ua" && "font-inter",
              appLanguage === "by" && "font-inter",
              appLanguage === "lt" && "font-inter"
            )}
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
        className="mt-[30px] sm:mt-[50px] max-w-[calc(950px-32px-32px)] lg:xl:max-w-[min(calc(100vw-32px-32px),calc(1400px-32px-32px))] md:self-center w-full"
        delay={0.5}
        margin="0px 0px -20% 0px"
      >
        {areMerchandisesPresent ? (
          <MerchandiseCarousel
            merchandises={merchandises}
            isLoading={areMerchandisesLoading}
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
        isLoading={areMerchandisesLoading}
      />
      <CartButton />
    </section>
  );
};

export { MerchandiseSection };
