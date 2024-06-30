import { AppLanguage } from "~enums/enums";
import { appLanguageToLocalizationKey } from "~maps/maps";
import { type IconName } from "~types/types";

const appLanguageToIconName: Record<
  (typeof appLanguageToLocalizationKey)[keyof typeof appLanguageToLocalizationKey],
  IconName
> = {
  [appLanguageToLocalizationKey[AppLanguage.BY]]: "flagBY",
  [appLanguageToLocalizationKey[AppLanguage.EN]]: "flagGB",
  [appLanguageToLocalizationKey[AppLanguage.UA]]: "flagUA",
};

export { appLanguageToIconName };
