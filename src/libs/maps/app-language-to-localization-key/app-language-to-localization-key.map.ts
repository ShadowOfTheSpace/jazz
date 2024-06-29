import { AppLanguage } from "~enums/enums";

const appLanguageToLocalizationKey = {
  [AppLanguage.BLR]: "blr",
  [AppLanguage.ENG]: "eng",
  [AppLanguage.UKR]: "ukr",
} as const;

export { appLanguageToLocalizationKey };
