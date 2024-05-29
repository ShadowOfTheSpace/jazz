import BurgerIcon from "~assets/icons/burger.svg?react";
import CloseIcon from "~assets/icons/close.svg?react";
import FacebookIcon from "~assets/icons/facebook.svg?react";
import InstagramIcon from "~assets/icons/instagram.svg?react";
import LeftArrowIcon from "~assets/icons/left-arrow.svg?react";
import MinusIcon from "~assets/icons/minus.svg?react";
import PauseIcon from "~assets/icons/pause.svg?react";
import PlayIcon from "~assets/icons/play.svg?react";
import PlusIcon from "~assets/icons/plus.svg?react";
import RightArrowIcon from "~assets/icons/right-arrow.svg?react";
import YouTubeIcon from "~assets/icons/youtube.svg?react";

import { IconName } from "~/libs/types/types";

const iconNameToSvg: Record<
  IconName,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  burger: BurgerIcon,
  close: CloseIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  leftArrow: LeftArrowIcon,
  minus: MinusIcon,
  pause: PauseIcon,
  play: PlayIcon,
  plus: PlusIcon,
  rightArrow: RightArrowIcon,
  youtube: YouTubeIcon,
};

export { iconNameToSvg };
