import { useContext } from "react";
import { ConsentContext } from "~components/components";

const useConsentContext = () => {
  const context = useContext(ConsentContext);

  if (!context) {
    throw Error();
  }

  return { ...context };
};

export { useConsentContext };
