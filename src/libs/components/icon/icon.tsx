import { IconName } from "~types/types";
import { iconNameToSvg } from "./libs/maps/maps";

type Properties = {
  className?: string;
  name: IconName;
};

const Icon: React.FC<Properties> = ({ className, name }) => {
  const IconComponent = iconNameToSvg[name];

  return <IconComponent className={className} />;
};

export { Icon };
