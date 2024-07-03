import { useTranslate } from "~hooks/hooks";
import { AppLanguageContext } from "../app-language-context/app-language-context";

type Properties = {
  children: React.ReactNode;
};

const AppLanguageProvider: React.FC<Properties> = ({ children }) => {
  const { appLanguage, setAppLanguage, translate } = useTranslate();

  return (
    <AppLanguageContext.Provider
      value={{ appLanguage, setAppLanguage, translate }}
    >
      {children}
    </AppLanguageContext.Provider>
  );
};

export { AppLanguageProvider };
