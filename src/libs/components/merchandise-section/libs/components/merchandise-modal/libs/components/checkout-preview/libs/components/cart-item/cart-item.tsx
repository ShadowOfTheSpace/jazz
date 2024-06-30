import { useCallback } from "react";
import defaultImage from "~assets/images/default-item-image.png";
import { Button, Image } from "~components/components";
import { useLanguageContext } from "~hooks/hooks";
import { type CartItem as TCartItem } from "~types/types";
import { cn } from "~utils/utils";

type Properties = {
  cartItem: TCartItem;
  onDeleteItem: (cartItem: TCartItem) => void;
};

const CartItem: React.FC<Properties> = ({ cartItem, onDeleteItem }) => {
  const { appLanguage, translate } = useLanguageContext();

  const { imageUrl, price, quantity, selectedSize, title } = cartItem;

  const handleDeleteItem = useCallback(() => {
    onDeleteItem(cartItem);
  }, [cartItem, onDeleteItem]);

  return (
    <div className="flex gap-x-[20px] border-jz-light-gray py-[10px] md:py-[15px]">
      {imageUrl ? (
        <Image
          alt="Item"
          className="rounded-[6px] w-[100px] md:w-[120px] aspect-square object-cover"
          imageUrl={imageUrl}
        />
      ) : (
        <img
          alt="Item"
          className="rounded-[6px] w-[100px] md:w-[120px] aspect-square object-cover"
          src={defaultImage}
        />
      )}
      <div className="flex flex-col justify-between text-[14px] md:text-[16px] leading-4 overflow-hidden">
        <h3
          className={cn(
            "font-bold text-[18px] text-jz-gold md:text-[20px] truncate",
            appLanguage === "en" && "font-kaushan",
            appLanguage === "ua" && "font-marck",
            appLanguage === "by" && "font-marck",
            appLanguage === "lt" && "font-marck"
          )}
          title={title}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-jz-light-gray",
            !selectedSize && "opacity-0",
            appLanguage === "en" && "font-kameron",
            appLanguage === "ua" && "font-inter",
            appLanguage === "by" && "font-inter",
            appLanguage === "lt" && "font-inter"
          )}
        >
          {translate("Size")}:⠀
          <span className="font-bold text-jz-gold">{selectedSize}</span>
        </p>
        <p
          className={cn(
            "text-jz-light-gray",
            appLanguage === "en" && "font-kameron",
            appLanguage === "ua" && "font-inter",
            appLanguage === "by" && "font-inter",
            appLanguage === "lt" && "font-inter"
          )}
        >
          {translate("Quantity")}:⠀
          <span className="font-bold text-jz-gold">{quantity}</span>
        </p>
        <p
          className={cn(
            "text-jz-light-gray",
            appLanguage === "en" && "font-kameron",
            appLanguage === "ua" && "font-inter",
            appLanguage === "by" && "font-inter",
            appLanguage === "lt" && "font-inter"
          )}
        >
          {translate("Price")}:⠀
          <span className="font-bold text-jz-gold">€{price}</span>
        </p>
      </div>
      <Button
        iconName="trash"
        className="border-0 bg-transparent ml-auto h-max text-jz-light-gray self-center"
        title={translate("Remove")}
        onClick={handleDeleteItem}
      />
    </div>
  );
};

export { CartItem };
