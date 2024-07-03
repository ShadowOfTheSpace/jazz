import { useCallback, useState } from "react";
import { useCookies } from "react-cookie";
import { StorageItemName } from "~enums/enums";
import { removeItemFromStorage } from "~modules/storage/storage";
import { ConsentContext } from "../consent-context/consent-context";
import { CONSENT_MAX_AGE, CONSENT_NAME } from "./libs/constants/constants";

type Properties = {
  children: React.ReactNode;
};

const ConsentProvider: React.FC<Properties> = ({ children }) => {
  const [cookies, setCookies] = useCookies([CONSENT_NAME]);
  const consentFromCookies = cookies[CONSENT_NAME];

  if (!consentFromCookies) {
    removeItemFromStorage(StorageItemName.CART);
    removeItemFromStorage(StorageItemName.LANGUAGE);
  }

  const [consent, setConsent] = useState<boolean | null>(
    consentFromCookies ?? null
  );

  const handleChangeConsent = useCallback(
    (consent: boolean) => {
      setConsent(consent);
      setCookies(CONSENT_NAME, consent, { maxAge: CONSENT_MAX_AGE });
    },
    [setCookies]
  );

  return (
    <ConsentContext.Provider
      value={{ consent, setConsent: handleChangeConsent }}
    >
      {children}
    </ConsentContext.Provider>
  );
};

export { ConsentProvider };
