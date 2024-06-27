import { createContext } from "react";
import type localization from "~assets/localization/localization.json";
import { type appLanguageToLocalizationKey } from "~maps/maps";

type Properties = {
  appLanguage: (typeof appLanguageToLocalizationKey)[keyof typeof appLanguageToLocalizationKey];
  setAppLanguage: (
    language: (typeof appLanguageToLocalizationKey)[keyof typeof appLanguageToLocalizationKey]
  ) => void;
  translate: (text: keyof typeof localization) => string;
};

const AppLanguageContext = createContext<Properties | null>(null);

export { AppLanguageContext };
