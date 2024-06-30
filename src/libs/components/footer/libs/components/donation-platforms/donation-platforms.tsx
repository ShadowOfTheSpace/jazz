import { Icon, Link } from "~components/components";
import { useLanguageContext } from "~hooks/hooks";
import { cn } from "~utils/utils";
import { DONATION_PLATFORMS } from "./libs/constants/constants";

const DonationPlatforms: React.FC = () => {
  const { appLanguage } = useLanguageContext();

  return (
    <ul className="flex flex-col gap-y-[10px]">
      {DONATION_PLATFORMS.map((platform) => {
        return (
          <li key={platform.title}>
            <Link
              className={cn(
                "flex items-center gap-[10px] max-w-max text-[16px] text-jz-light-gray lg:text-[20px] has-hover:hover:text-jz-gold no-hover:active:text-jz-gold transition-colors",
                appLanguage === "en" && "font-kameron",
                appLanguage === "ua" && "font-inter",
                appLanguage === "by" && "font-inter"
              )}
              href={platform.href}
              isOpenInNewPage
            >
              <Icon className="shrink-0" name={platform.icon} />
              <p>{platform.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { DonationPlatforms };
