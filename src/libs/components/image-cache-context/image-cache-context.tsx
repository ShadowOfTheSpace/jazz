import { createContext } from "react";

type Properties = {
  getImage: (url: string) => string | null;
  addImage: (url: string, image: string) => void;
};

const ImageCacheContext = createContext<Properties | null>(null);

export { ImageCacheContext };
