import { useLanguageContext } from "~hooks/hooks";
import { cn } from "~utils/utils";

type Properties = {
  description: string;
  title: string;
};

const Placeholder: React.FC<Properties> = ({ description, title }) => {
  const { appLanguage } = useLanguageContext();

  return (
    <div className="flex flex-col justify-center items-center border-jz-gold py-[50px] border-t border-b sm:h-full sm:max-h-[min(372px,100%)]">
      <h1
        className={cn(
          "text-[32px] text-jz-gold sm:text-[60px]",
          appLanguage === "en" && "font-karantina capitalize tracking-[0.05em]",
          appLanguage === "ua" && "font-oswald",
          appLanguage === "by" && "font-oswald",
          appLanguage === "lt" && "font-oswald"
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          "text-[14px] text-balance text-center text-jz-light-gray sm:text-[24px]",
          appLanguage === "en" && "font-kameron",
          appLanguage === "ua" && "font-inter",
          appLanguage === "by" && "font-inter",
          appLanguage === "lt" && "font-inter"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export { Placeholder };
