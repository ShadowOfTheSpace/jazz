import { useContext } from "react";
import { AppLanguageContext } from "~components/components";

const useLanguageContext = () => {
  const context = useContext(AppLanguageContext);

  if (!context) {
    throw Error();
  }

  return { ...context };
};

export { useLanguageContext };
