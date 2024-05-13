import BurgerIcon from "~assets/icons/burger.svg?react";
import FacebookIcon from "~assets/icons/facebook.svg?react";
import InstagramIcon from "~assets/icons/instagram.svg?react";
import YouTubeIcon from "~assets/icons/youtube.svg?react";

import { IconName } from "~/libs/types/types";

const iconNameToSvg: Record<
  IconName,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  burger: BurgerIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
};

export { iconNameToSvg };
