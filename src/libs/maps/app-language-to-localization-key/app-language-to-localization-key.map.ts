import { AppLanguage } from "~enums/enums";

const appLanguageToLocalizationKey = {
  [AppLanguage.ENG]: "eng",
  [AppLanguage.UKR]: "ukr",
} as const;

export { appLanguageToLocalizationKey };
