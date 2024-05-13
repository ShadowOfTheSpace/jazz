import BurgerIcon from "~assets/icons/burger.svg?react";
import CloseIcon from "~assets/icons/close.svg?react";
import FacebookIcon from "~assets/icons/facebook.svg?react";
import InstagramIcon from "~assets/icons/instagram.svg?react";
import PauseIcon from "~assets/icons/pause.svg?react";
import PlayIcon from "~assets/icons/play.svg?react";
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
  pause: PauseIcon,
  play: PlayIcon,
  youtube: YouTubeIcon,
};

export { iconNameToSvg };
