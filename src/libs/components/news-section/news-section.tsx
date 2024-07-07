import { useLanguageContext } from "~hooks/hooks";
import { cn } from "~utils/utils";
import { Animated } from "../components";
import { Feed } from "./libs/components/components";

const NewsSection: React.FC = () => {
  const { appLanguage, translate } = useLanguageContext();

  return (
    <section
      id="news"
      className="flex flex-col px-[16px] sm:px-[32px] w-full max-w-[1400px] self-center"
    >
      <Animated.Title
        className={cn(
          "text-[32px]",
          appLanguage === "en" &&
            "font-karantina sm:text-[70px] xl:text-[80px] tracking-[0.05em]",
          appLanguage === "ua" && "font-oswald sm:text-[60px] xl:text-[75px]",
          appLanguage === "by" && "font-oswald sm:text-[60px] xl:text-[75px]",
          appLanguage === "lt" && "font-oswald sm:text-[60px] xl:text-[75px]"
        )}
      >
        {translate("Life Vibes")}
      </Animated.Title>
      <div className="w-[calc(100%+32px)] [@media(min-width:640px)_and_(max-width:932px)]:aspect-square [@media(min-width:932px)_and_(max-width:1232px)]:aspect-[3/2] [@media(min-width:1232px)]:aspect-[4/2] [@media(min-width:640px)]:block hidden -mb-[32px] -ml-[32px] overflow-hidden">
        <Feed
          feedId="54927234-ba36-4c1c-a0d7-69f248d3b553"
          feedContainerId="curator-feed-desktop"
        />
      </div>
      <div className="[@media(min-width:640px)]:hidden [@media(max-width:336px)]:aspect-[1/2] [@media(min-width:336px)_and_(max-width:496px)]:aspect-square [@media(min-width:496px)_and_(max-width:640px)]:aspect-[3/2] -mb-[16px] -ml-[16px] w-[calc(100%+16px)] overflow-hidden">
        <Feed
          feedId="eae2473f-2fc7-4224-bad5-7b60d0dc6702"
          feedContainerId="curator-feed-mobile"
        />
      </div>
    </section>
  );
};

export { NewsSection };
