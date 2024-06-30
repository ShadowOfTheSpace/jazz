import { useCallback, useState } from "react";
import localization from "~assets/localization/localization.json";
import { AppLanguage, StorageItemName } from "~enums/enums";
import { appLanguageToLocalizationKey } from "~maps/maps";
import { getItemFromStorage, setItemToStorage } from "~modules/storage/storage";

const useTranslate = () => {
  const languageFromStorage = getItemFromStorage<{
    language: (typeof appLanguageToLocalizationKey)[keyof typeof appLanguageToLocalizationKey];
  }>(StorageItemName.LANGUAGE);

  const isLanguageFromStorageValid =
    languageFromStorage &&
    Object.values(appLanguageToLocalizationKey).includes(
      languageFromStorage.language
    );

  if (!isLanguageFromStorageValid) {
    setItemToStorage(StorageItemName.LANGUAGE, {
      language: appLanguageToLocalizationKey.English,
    });
  }

  const [appLanguage, setLanguage] = useState<
    (typeof appLanguageToLocalizationKey)[keyof typeof appLanguageToLocalizationKey]
  >(
    isLanguageFromStorageValid
      ? languageFromStorage.language
      : appLanguageToLocalizationKey[AppLanguage.EN]
  );

  const setAppLanguage = useCallback(
    (
      appLanguage: (typeof appLanguageToLocalizationKey)[keyof typeof appLanguageToLocalizationKey]
    ) => {
      setLanguage(appLanguage);
      setItemToStorage(StorageItemName.LANGUAGE, { language: appLanguage });
    },
    [appLanguage]
  );

  const translate = useCallback(
    (textKey: keyof typeof localization) => {
      const textTranslation = localization[textKey];

      return textTranslation
        ? textTranslation[appLanguage] ??
            textTranslation[appLanguageToLocalizationKey[AppLanguage.EN]] ??
            textKey
        : textKey;
    },
    [appLanguage]
  );

  return { appLanguage, setAppLanguage, translate };
};

export { useTranslate };
