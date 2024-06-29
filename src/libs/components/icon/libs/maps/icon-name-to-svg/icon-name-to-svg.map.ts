import TrashIcon from "~/assets/icons/trash.svg?react";
import BurgerIcon from "~assets/icons/burger.svg?react";
import BuyMeACoffeeIcon from "~assets/icons/buy-me-a-coffee.svg?react";
import CartIcon from "~assets/icons/cart.svg?react";
import CloseIcon from "~assets/icons/close.svg?react";
import DonationAlertsIcon from "~assets/icons/donation-alerts.svg?react";
import FacebookIcon from "~assets/icons/facebook.svg?react";
import flagUAIcon from "~assets/icons/flag-ua.svg?react";
import flagUKIcon from "~assets/icons/flag-uk.svg?react";
import InstagramIcon from "~assets/icons/instagram.svg?react";
import LeftArrowIcon from "~assets/icons/left-arrow.svg?react";
import MinusIcon from "~assets/icons/minus.svg?react";
import PatreonIcon from "~assets/icons/patreon.svg?react";
import PauseIcon from "~assets/icons/pause.svg?react";
import PayPalIcon from "~assets/icons/paypal.svg?react";
import PlayIcon from "~assets/icons/play.svg?react";
import PlusIcon from "~assets/icons/plus.svg?react";
import RightArrowIcon from "~assets/icons/right-arrow.svg?react";
import TinderIcon from "~assets/icons/tinder.svg?react";
import VinylIcon from "~assets/icons/vinyl.svg?react";
import YouTubeIcon from "~assets/icons/youtube.svg?react";

import { IconName } from "~types/types";

const iconNameToSvg: Record<
  IconName,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  burger: BurgerIcon,
  buyMeACoffee: BuyMeACoffeeIcon,
  cart: CartIcon,
  close: CloseIcon,
  donationAlerts: DonationAlertsIcon,
  facebook: FacebookIcon,
  flagUA: flagUAIcon,
  flagUK: flagUKIcon,
  instagram: InstagramIcon,
  leftArrow: LeftArrowIcon,
  minus: MinusIcon,
  patreon: PatreonIcon,
  pause: PauseIcon,
  paypal: PayPalIcon,
  play: PlayIcon,
  plus: PlusIcon,
  rightArrow: RightArrowIcon,
  tinder: TinderIcon,
  trash: TrashIcon,
  vinyl: VinylIcon,
  youtube: YouTubeIcon,
};

export { iconNameToSvg };
