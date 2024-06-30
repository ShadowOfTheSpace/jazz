import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { Button, Icon } from "~components/components";
import { AppLanguage } from "~enums/enums";
import { useHandleEscPress, useLanguageContext } from "~hooks/hooks";
import { appLanguageToLocalizationKey } from "~maps/maps";
import { cn } from "~utils/utils";
import { LANGUAGES } from "../../constants/constants";
import { appLanguageToIconName } from "../../maps/maps";

type Properties = {
  isOpen: boolean;
};

const LanguageSelector: React.FC<Properties> = ({ isOpen }) => {
  const { appLanguage, setAppLanguage, translate } = useLanguageContext();

  const [isLanguageSelectorShown, setIsLanguageSelectorShown] =
    useState<boolean>(false);
  const contentReference = useRef<HTMLDivElement | null>(null);

  const toggleLanguageSelector = useCallback(() => {
    setIsLanguageSelectorShown((isShown) => !isShown);
  }, []);

  useHandleEscPress({ onEscPress: toggleLanguageSelector });

  useEffect(() => {
    if (isLanguageSelectorShown) {
      const handleClickOutside = (event: MouseEvent) => {
        if (!contentReference.current?.contains(event.target as Node)) {
          toggleLanguageSelector();
        }
      };
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isLanguageSelectorShown, contentReference, toggleLanguageSelector]);

  const handleLanguageChange = useCallback(
    ({ target }: FormEvent) => {
      const selectedLanguage = (target as HTMLInputElement).value;

      const isSelectedLanguageValid = Object.values(
        appLanguageToLocalizationKey
      ).some((language) => {
        return language === selectedLanguage;
      });

      setAppLanguage(
        isSelectedLanguageValid
          ? (selectedLanguage as (typeof appLanguageToLocalizationKey)[keyof typeof appLanguageToLocalizationKey])
          : appLanguageToLocalizationKey[AppLanguage.EN]
      );

      toggleLanguageSelector();
    },
    [appLanguage, setAppLanguage, toggleLanguageSelector]
  );

  return (
    <div className="contents" ref={contentReference}>
      <Button
        iconName={appLanguageToIconName[appLanguage]}
        className="lg:flex hidden bg-transparent border-transparent rounded-[2px]"
        onClick={toggleLanguageSelector}
        title={translate("Select language")}
      />
      <AnimatePresence>
        {(isLanguageSelectorShown || isOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="top-[48px] right-0 z-10 absolute lg:flex bg-[#222222] p-[10px] rounded-[10px] contents"
          >
            <form onChange={handleLanguageChange}>
              <ul className="flex flex-col mt-[24px] lg:mt-0">
                {LANGUAGES.map((language) => {
                  return (
                    <li key={language.code}>
                      <input
                        type="radio"
                        name="language-selector"
                        id={language.code}
                        value={language.code}
                        className="hidden"
                      />
                      <label
                        htmlFor={language.code}
                        className={cn(
                          "flex items-center gap-x-[16px] lg:px-[10px] py-[5px] w-full has-hover:hover:text-jz-gold no-hover:active:text-jz-gold cursor-pointer",
                          language.code === appLanguage && "text-jz-light-gray"
                        )}
                      >
                        <Icon
                          name={appLanguageToIconName[language.code]}
                          className="size-[24px]"
                        />
                        <span className="text-[16px] transition-colors">
                          {language.name}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { LanguageSelector };
