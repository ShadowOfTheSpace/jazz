import { useCallback, useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { SIZES } from "~/libs/constants/constants";
import defaultImage from "~assets/images/tickets-placeholder.png";
import { Button, Image, Modal } from "~components/components";
import { AppRoute, StorageItemName } from "~enums/enums";
import { checkIfPathMatchingPattern } from "~helpers/helpers";
import { getItemFromStorage, setItemToStorage } from "~modules/storage/storage";
import { type Merchandise } from "~types/types";
import { MerchandiseItemsCount, MerchandiseSizeSelector } from "../components";

type Properties = {
  isLoading?: boolean;
  merchandises: Merchandise[];
};

const MerchandiseModal: React.FC<Properties> = ({
  merchandises,
  isLoading,
}) => {
  const navigate = useNavigate();

  const [urlSearchParams] = useSearchParams();

  const sizeFromQuery = urlSearchParams.get("size") ?? "S";

  const isSizeFromQueryValid = SIZES.some((size) => {
    return size === sizeFromQuery;
  });

  const { pathname } = useLocation();

  const { id } = useParams();

  const [itemsCount, setItemsCount] = useState<number>(1);

  const isProductsUrl = checkIfPathMatchingPattern(
    pathname,
    AppRoute.PRODUCTS_$ID
  );

  const merchandiseById = merchandises.find((merchandise) => {
    return merchandise.id === id;
  });

  const isMerchandiseModalOpen = Boolean(
    isProductsUrl && merchandiseById && !isLoading
  );

  const isAvailable = Boolean(
    merchandiseById?.sizes?.some((size) => {
      return size === sizeFromQuery;
    }) || !merchandiseById?.sizes
  );

  useEffect(() => {
    if (!isSizeFromQueryValid && sizeFromQuery) {
      navigate(pathname, { replace: true });
    }
  }, [isSizeFromQueryValid]);

  useEffect(() => {
    if (isProductsUrl && !merchandiseById && !isLoading) {
      navigate(AppRoute.ROOT, { replace: true });
    }
  }, [isProductsUrl, merchandiseById, isLoading]);

  const handleCloseModal = useCallback(() => {
    navigate(AppRoute.ROOT);
  }, []);

  const handleAddItemToCart = useCallback(() => {
    if (isAvailable && merchandiseById) {
      const itemsInCart =
        getItemFromStorage<Merchandise[]>(StorageItemName.CART) ?? [];

      setItemToStorage(StorageItemName.CART, [...itemsInCart, merchandiseById]);
    }
  }, [isAvailable, merchandiseById]);

  return (
    <Modal isOpen={isMerchandiseModalOpen} onClose={handleCloseModal}>
      <div className="p-[30px] pt-[60px] lg:pt-[30px] w-screen lg:w-[min(1240px,calc(100vw-50px))] h-[100dvh] lg:h-auto lg:max-h-[calc(100dvh-50px)] text-jz-white">
        <div className="flex lg:flex-row flex-col gap-[20px] sm:gap-[30px] -mr-[10px] pr-[10px] h-full max-h-full lg:max-h-[calc(100dvh-120px)] overflow-y-auto">
          {merchandiseById?.imageUrl ? (
            <Image
              alt="Item"
              className="rounded-[6px] w-full lg:w-[50%] lg:h-auto max-h-full lg:max-h-auto aspect-square object-cover shrink-0"
              imageUrl={merchandiseById.imageUrl}
            />
          ) : (
            <img
              alt="Item"
              className="rounded-[6px] w-full lg:w-[50%] lg:h-auto max-h-full lg:max-h-auto aspect-square object-cover shrink-0"
              src={defaultImage}
            />
          )}
          <div className="flex flex-col gap-[20px] lg:gap-y-[50px] grow">
            <h2 className="lg:mt-[50px] lg:mb-auto text-[26px] lg:text-[32px]">
              {merchandiseById?.title}
            </h2>
            {merchandiseById?.sizes && (
              <MerchandiseSizeSelector
                availableSizes={merchandiseById.sizes}
                selectedSize={sizeFromQuery}
              />
            )}
            <MerchandiseItemsCount
              count={itemsCount}
              setCount={setItemsCount}
              min={1}
              max={99}
            />
            <div className="flex flex-col gap-y-[10px] lg:gap-y-[20px] mt-auto sm:mt-0">
              <h3 className="mr-[20px] font-bold text-[22px] text-end sm:text-[28px] self-end">
                €{merchandiseById?.price}
              </h3>
              <Button
                label={isAvailable ? "Add to cart" : "Not available"}
                isDisabled={!isAvailable}
                className="w-full sm:w-[50%] self-end"
                onClick={handleAddItemToCart}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export { MerchandiseModal };
