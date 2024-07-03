import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import defaultImage from "~assets/images/default-merch-image.png";
import { Button, Image } from "~components/components";
import { SIZES } from "~constants/constants";
import { AppRoute } from "~enums/enums";
import { useCartContext, useLanguageContext } from "~hooks/hooks";
import { Merchandise } from "~types/types";
import { cn } from "~utils/utils";
import { MerchandiseItemsCount, MerchandiseSizeSelector } from "../components";

type Properties = {
  isLoading?: boolean;
  merchandiseId?: string;
  merchandises: Merchandise[];
};

const ItemPreview: React.FC<Properties> = ({
  merchandises,
  isLoading,
  merchandiseId,
}) => {
  const { appLanguage, translate } = useLanguageContext();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { addItemToCart } = useCartContext();

  const [quantity, setQuantity] = useState<number>(1);

  const [urlSearchParams] = useSearchParams();

  const sizeFromQuery = urlSearchParams.get("size") ?? "S";

  const isSizeFromQueryValid = SIZES.some((size) => {
    return size === sizeFromQuery;
  });

  const merchandiseById = merchandises.find((merchandise) => {
    return merchandise.id === merchandiseId;
  });

  const isAvailable = Boolean(
    merchandiseById?.sizes?.some((size) => {
      return size === sizeFromQuery;
    }) || !merchandiseById?.sizes
  );

  const titleByLanguage =
    merchandiseById &&
    (merchandiseById.title[appLanguage] ?? merchandiseById.title.en);

  useEffect(() => {
    if (!isSizeFromQueryValid && sizeFromQuery) {
      navigate(pathname, { replace: true });
    }
  }, [isSizeFromQueryValid, sizeFromQuery, pathname, navigate]);

  useEffect(() => {
    if (!merchandiseById && !isLoading) {
      navigate(AppRoute.ROOT, { replace: true });
    }
  }, [merchandiseById, isLoading, navigate]);

  const handleAddItemToCart = useCallback(() => {
    if (isAvailable && merchandiseById) {
      const selectedSize = merchandiseById.sizes
        ? isSizeFromQueryValid
          ? sizeFromQuery
          : "S"
        : null;

      addItemToCart({
        id: merchandiseById.id,
        imageUrl: merchandiseById.imageUrl,
        price: merchandiseById.price,
        quantity: quantity,
        selectedSize,
        title: merchandiseById.title,
      });

      navigate(AppRoute.CHECKOUT);
    }
  }, [
    isAvailable,
    merchandiseById,
    quantity,
    sizeFromQuery,
    isSizeFromQueryValid,
    addItemToCart,
    navigate,
  ]);

  return (
    <div className="p-[16px] sm:p-[32px] pt-[60px] sm:pt-[60px] lg:pt-[30px] w-screen lg:w-[min(1240px,calc(100vw-50px))] h-[100dvh] lg:h-auto lg:max-h-[calc(100dvh-50px)] text-jz-white">
      <div className="flex lg:flex-row flex-col gap-[20px] sm:gap-[30px] -mr-[10px] pr-[10px] h-full max-h-full lg:max-h-[calc(100dvh-120px)] overflow-y-auto">
        {merchandiseById?.imageUrl ? (
          <Image
            alt="Item"
            className="rounded-[6px] w-full lg:w-[50%] lg:min-w-[590px] lg:h-auto max-h-full lg:max-h-auto aspect-square object-cover shrink-0"
            imageUrl={merchandiseById.imageUrl}
          />
        ) : (
          <img
            alt="Item"
            className="rounded-[6px] w-full lg:w-[50%] lg:min-w-[590px] lg:h-auto max-h-full lg:max-h-auto aspect-square object-cover shrink-0"
            src={defaultImage}
          />
        )}
        <div className="flex flex-col gap-[20px] lg:gap-y-[50px] grow">
          <h2
            className={cn(
              "lg:mt-[50px] lg:mb-auto font-bold text-[26px] text-jz-gold lg:text-[32px]",
              appLanguage === "en" && "font-kaushan",
              appLanguage === "ua" && "font-marck",
              appLanguage === "by" && "font-marck",
              appLanguage === "lt" && "font-marck"
            )}
          >
            {titleByLanguage}
          </h2>
          {merchandiseById?.sizes && (
            <MerchandiseSizeSelector
              availableSizes={merchandiseById.sizes}
              selectedSize={sizeFromQuery}
            />
          )}
          <MerchandiseItemsCount
            count={quantity}
            setCount={setQuantity}
            min={1}
            max={99}
          />
          <div className="flex flex-col gap-y-[10px] lg:gap-y-[20px] mt-auto sm:mt-0">
            <h3
              className={cn(
                "mr-[20px] font-bold text-[22px] text-end sm:text-[28px] self-end",
                appLanguage === "en" && "font-kameron",
                appLanguage === "ua" && "font-inter",
                appLanguage === "by" && "font-inter",
                appLanguage === "lt" && "font-inter"
              )}
            >
              €{merchandiseById?.price}
            </h3>
            <Button
              label={
                isAvailable
                  ? translate("Add to cart")
                  : translate("Not available")
              }
              isDisabled={!isAvailable}
              className={cn(
                "w-full text-nowrap self-end",
                appLanguage === "en" && "sm:w-[max(170px,50%)]",
                appLanguage === "ua" && "sm:w-[max(240px,50%)]",
                appLanguage === "by" && "sm:w-[max(230px,50%)]",
                appLanguage === "lt" && "sm:w-[max(170px,50%)]"
              )}
              onClick={handleAddItemToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ItemPreview };
