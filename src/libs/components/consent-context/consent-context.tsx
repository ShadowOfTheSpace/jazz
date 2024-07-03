import { createContext } from "react";

type Properties = {
  consent: boolean | null;
  setConsent: (consent: boolean) => void;
};

const ConsentContext = createContext<Properties | null>(null);

export { ConsentContext };
