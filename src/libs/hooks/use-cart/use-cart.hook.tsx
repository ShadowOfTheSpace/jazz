import { useCallback, useState } from "react";
import { StorageItemName } from "~enums/enums";
import { getItemFromStorage, setItemToStorage } from "~modules/storage/storage";
import { CartItem } from "~types/types";

const useCart = () => {
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

      setItemToStorage<CartItem[]>(StorageItemName.CART, updatedItemsInCart);
      setCartItems(updatedItemsInCart);
    },
    [cartItems]
  );

  const removeItemFromCart = useCallback(
    ({ id, selectedSize }: CartItem) => {
      const updatedCartItems = cartItems.filter((cartItem) => {
        return !(cartItem.id === id && cartItem.selectedSize === selectedSize);
      });

      setItemToStorage(StorageItemName.CART, updatedCartItems);
      setCartItems(updatedCartItems);
    },
    [cartItems]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
    setItemToStorage(StorageItemName.CART, []);
  }, []);

  return { addItemToCart, cartItems, removeItemFromCart, clearCart };
};

export { useCart };
