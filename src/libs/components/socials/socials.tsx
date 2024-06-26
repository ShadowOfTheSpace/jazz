import { useLanguageContext } from "~hooks/hooks";
import { cn } from "~utils/utils";
import { Icon, Link } from "../components";
import { SOCIAL_NETWORKS } from "./libs/constants/constants";

type Properties = {
  className?: string;
  iconClassName?: string;
};

const Socials: React.FC<Properties> = ({ className, iconClassName }) => {
  const { translate } = useLanguageContext();

  return (
    <div className={cn("flex items-center gap-[16px]", className)}>
      {SOCIAL_NETWORKS.map((socialNetwork) => {
        return (
          <Link
            href={socialNetwork.href}
            isOpenInNewPage
            key={socialNetwork.title}
            title={translate(socialNetwork.title)}
          >
            <Icon
              className={cn(
                "has-hover:hover:text-jz-gold no-hover:active:text-jz-gold transition-colors",
                iconClassName
              )}
              name={socialNetwork.icon}
            />
          </Link>
        );
      })}
    </div>
  );
};

export { Socials };
