import { AppLanguage } from "~enums/enums";
import { appLanguageToLocalizationKey } from "~maps/maps";
import { type IconName } from "~types/types";

const appLanguageToIconName: Record<
  (typeof appLanguageToLocalizationKey)[keyof typeof appLanguageToLocalizationKey],
  IconName
> = {
  [appLanguageToLocalizationKey[AppLanguage.BY]]: "flagBY",
  [appLanguageToLocalizationKey[AppLanguage.LT]]: "flagLT",
  [appLanguageToLocalizationKey[AppLanguage.UA]]: "flagUA",
  [appLanguageToLocalizationKey[AppLanguage.EN]]: "flagUS",
};

export { appLanguageToIconName };
