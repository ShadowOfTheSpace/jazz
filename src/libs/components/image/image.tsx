import { useCallback, useEffect, useState } from "react";
import { Skeleton } from "../components";

type Properties = {
  alt: string;
  className?: string;
  imageUrl: string;
};

const Image: React.FC<Properties> = ({ alt, imageUrl, className }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [image, setImage] = useState<string | undefined>();

  const handleImageDownload = useCallback(async () => {
    const response = await fetch(imageUrl);
    const base64Image = await response.text();
    setImage(`data:image;base64,${base64Image}`);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleImageDownload();
  }, [handleImageDownload]);

  return isLoading ? (
    <Skeleton className={className} />
  ) : (
    <img alt={alt} className={className} src={image} />
  );
};

export { Image };
