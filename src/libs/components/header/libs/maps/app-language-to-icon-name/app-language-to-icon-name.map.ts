import { AppLanguage } from "~enums/enums";
import { appLanguageToLocalizationKey } from "~maps/maps";
import { type IconName } from "~types/types";

const appLanguageToIconName: Record<
  (typeof appLanguageToLocalizationKey)[keyof typeof appLanguageToLocalizationKey],
  IconName
> = {
  [appLanguageToLocalizationKey[AppLanguage.BLR]]: "flagBlr",
  [appLanguageToLocalizationKey[AppLanguage.ENG]]: "flagGbr",
  [appLanguageToLocalizationKey[AppLanguage.UKR]]: "flagUkr",
};

export { appLanguageToIconName };