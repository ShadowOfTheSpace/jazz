import { AppLanguage } from "~enums/enums";
import { appLanguageToLocalizationKey } from "~maps/maps";

const LANGUAGES = [
  {
    code: appLanguageToLocalizationKey[AppLanguage.EN],
    icon: "flagGB",
    name: AppLanguage.EN,
  },
  {
    code: appLanguageToLocalizationKey[AppLanguage.UA],
    icon: "flagUA",
    name: AppLanguage.UA,
  },
  {
    code: appLanguageToLocalizationKey[AppLanguage.BY],
    icon: "flagBY",
    name: AppLanguage.BY,
  },
] as const;

export { LANGUAGES };
