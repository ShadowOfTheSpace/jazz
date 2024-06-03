import { Button, Image } from "~components/components";
import { type CartItem as TCartItem } from "~types/types";
import defaultImage from "~assets/images/tickets-placeholder.png";
import { useCallback } from "react";

type Properties = {
  cartItem: TCartItem;
  onDeleteItem: (cartItem: TCartItem) => void;
};

const CartItem: React.FC<Properties> = ({ cartItem, onDeleteItem }) => {
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
          className="font-bold font-kaushan text-[18px] text-jz-gold md:text-[20px] truncate"
          title={title}
        >
          {title}
        </h3>
        <p className="text-jz-light-gray">
          Size:⠀<span className="font-bold text-jz-gold">{selectedSize}</span>
        </p>
        <p className="text-jz-light-gray">
          Quantity:⠀<span className="font-bold text-jz-gold">{quantity}</span>
        </p>
        <p className="text-jz-light-gray">
          Price:⠀<span className="font-bold text-jz-gold">€{price}</span>
        </p>
      </div>
      <Button
        iconName="trash"
        className="border-0 bg-transparent ml-auto h-max text-jz-light-gray self-center"
        title="Remove"
        onClick={handleDeleteItem}
      />
    </div>
  );
};

export { CartItem };
