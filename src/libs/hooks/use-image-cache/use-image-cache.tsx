import { useCallback } from "react";

const map = new Map<string, string>();

const useImageCache = () => {
  const handleSetImage = useCallback(
    (url: string, image: string) => {
      map.set(url, image);
    },
    [map]
  );

  const handleGetImage = useCallback(
    (url: string) => {
      return map.get(url) ?? null;
    },
    [map]
  );

  return {
    getImage: handleGetImage,
    addImage: handleSetImage,
  };
};

export { useImageCache };
