import { useCallback, useEffect, useState } from "react";
import { getMerchandise } from "~modules/merchandise/merchandise";
import { Merchandise } from "~types/types";
import { Placeholder } from "../components";
import { MerchandiseCarousel } from "./libs/components/components";

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
    <section className="flex flex-col px-[16px] sm:px-[32px] max-w-[1400px] md:self-center">
      <div className="flex justify-between items-center gap-x-[50px]">
        <div className="flex flex-col gap-y-[8px]">
          <h1 className="font-karantina text-[32px] text-balance sm:text-[70px] xl:text-[100px] leading-none tracking-[0.05em]">
            Pavel Arakelian's Exclusive Merchandise
          </h1>
          <p className="text-[14px] text-balance sm:text-[18px] xl:text-[20px] tracking-[0.05em]">
            Brace yourself for a symphony of style and sophistication, inspired
            by Pavel's unparalleled talent. Stay tuned for a harmonious blend of
            fashion and music that transcends boundaries. The countdown begins -
            jazz up your wardrobe with a touch of elegance, coming soon!
          </p>
        </div>
        <img
          src={merchandiseImage}
          alt="Pavel Arakelian - jazz"
          className="md:flex hidden w-[300px] xl:w-[410px] h-[245px] xl:h-[336px]"
        />
      </div>
      <div className="mt-[30px] sm:mt-[80px] max-w-[950px] xl:max-w-[1400px] md:self-center w-full">
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
      </div>
    </section>
  );
};

export { MerchandiseSection };
