import BurgerIcon from "~assets/icons/burger.svg?react";
import BuyMeACoffeeIcon from "~assets/icons/buy-me-a-coffee.svg?react";
import CloseIcon from "~assets/icons/close.svg?react";
import FacebookIcon from "~assets/icons/facebook.svg?react";
import InstagramIcon from "~assets/icons/instagram.svg?react";
import LeftArrowIcon from "~assets/icons/left-arrow.svg?react";
import PatreonIcon from "~assets/icons/patreon.svg?react";
import PauseIcon from "~assets/icons/pause.svg?react";
import PhoneIcon from "~assets/icons/phone.svg?react";
import PlayIcon from "~assets/icons/play.svg?react";
import RightArrowIcon from "~assets/icons/right-arrow.svg?react";
import TinderIcon from "~assets/icons/tinder.svg?react";
import VinylIcon from "~assets/icons/vinyl.svg?react";
import YouTubeIcon from "~assets/icons/youtube.svg?react";

import { IconName } from "~/libs/types/types";

const iconNameToSvg: Record<
  IconName,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  burger: BurgerIcon,
  buyMeACoffee: BuyMeACoffeeIcon,
  close: CloseIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  leftArrow: LeftArrowIcon,
  patreon: PatreonIcon,
  pause: PauseIcon,
  phone: PhoneIcon,
  play: PlayIcon,
  rightArrow: RightArrowIcon,
  tinder: TinderIcon,
  vinyl: VinylIcon,
  youtube: YouTubeIcon,
};

export { iconNameToSvg };
