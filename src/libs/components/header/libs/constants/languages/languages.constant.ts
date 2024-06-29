import { AppLanguage } from "~enums/enums";
import { appLanguageToLocalizationKey } from "~maps/maps";

const LANGUAGES = [
  {
    code: appLanguageToLocalizationKey[AppLanguage.ENG],
    icon: "flagUK",
    name: AppLanguage.ENG,
  },
  {
    code: appLanguageToLocalizationKey[AppLanguage.UKR],
    icon: "flagUA",
    name: AppLanguage.UKR,
  },
] as const;

export { LANGUAGES };
