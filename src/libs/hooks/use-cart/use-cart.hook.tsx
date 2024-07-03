import { useCallback, useState } from "react";
import { StorageItemName } from "~enums/enums";
import { useConsentContext } from "~hooks/hooks";
import { getItemFromStorage, setItemToStorage } from "~modules/storage/storage";
import { CartItem } from "~types/types";

const useCart = () => {
  const { consent } = useConsentContext();
  const [cartItems, setCartItems] = useState<CartItem[]>(
    getItemFromStorage(StorageItemName.CART) ?? []
  );

  const addItemToCart = useCallback(
    (cartItem: CartItem) => {
      const existingItemAdded = cartItems.some(({ id, selectedSize }) => {
        return id === cartItem.id && selectedSize === cartItem.selectedSize;
      });

      const updatedItemsInCart: CartItem[] = existingItemAdded
        ? cartItems.map((existingItem) => {
            return existingItem.id === cartItem.id &&
              existingItem.selectedSize === cartItem.selectedSize
              ? {
                  ...existingItem,
                  quantity: existingItem.quantity + cartItem.quantity,
                }
              : existingItem;
          })
        : [...cartItems, cartItem];

      consent &&
        setItemToStorage<CartItem[]>(StorageItemName.CART, updatedItemsInCart);
      setCartItems(updatedItemsInCart);
    },
    [cartItems, consent]
  );

  const removeItemFromCart = useCallback(
    ({ id, selectedSize }: CartItem) => {
      const updatedCartItems = cartItems.filter((cartItem) => {
        return !(cartItem.id === id && cartItem.selectedSize === selectedSize);
      });

      consent && setItemToStorage(StorageItemName.CART, updatedCartItems);
      setCartItems(updatedCartItems);
    },
    [cartItems, consent]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
    consent && setItemToStorage(StorageItemName.CART, []);
  }, [consent]);

  return { addItemToCart, cartItems, removeItemFromCart, clearCart };
};

export { useCart };
