import { AppLanguage } from "~enums/enums";

const appLanguageToLocalizationKey = {
  [AppLanguage.BY]: "by",
  [AppLanguage.EN]: "en",
  [AppLanguage.UA]: "ua",
} as const;

export { appLanguageToLocalizationKey };
