import { AppLanguage } from "~enums/enums";

const appLanguageToLocalizationKey = {
  [AppLanguage.BY]: "by",
  [AppLanguage.EN]: "en",
  [AppLanguage.LT]: "lt",
  [AppLanguage.UA]: "ua",
} as const;

export { appLanguageToLocalizationKey };
