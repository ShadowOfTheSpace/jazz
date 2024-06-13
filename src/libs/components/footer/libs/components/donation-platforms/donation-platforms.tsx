import { Icon, Link } from "~components/components";
import { DONATION_PLATFORMS } from "./libs/constants/constants";

const DonationPlatforms: React.FC = () => {
  return (
    <ul className="flex flex-col gap-y-[10px]">
      {DONATION_PLATFORMS.map((platform) => {
        return (
          <li key={platform.title}>
            <Link
              className="flex items-center gap-[10px] max-w-max text-[16px] text-jz-light-gray lg:text-[20px] hover:text-jz-gold transition-colors"
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
