import { AppLanguage } from "~enums/enums";
import { appLanguageToLocalizationKey } from "~maps/maps";

const LANGUAGES = [
  {
    code: appLanguageToLocalizationKey[AppLanguage.ENG],
    icon: "flagGbr",
    name: AppLanguage.ENG,
  },
  {
    code: appLanguageToLocalizationKey[AppLanguage.UKR],
    icon: "flagUkr",
    name: AppLanguage.UKR,
  },
  {
    code: appLanguageToLocalizationKey[AppLanguage.BLR],
    icon: "flagBlr",
    name: AppLanguage.BLR,
  },
] as const;

export { LANGUAGES };
