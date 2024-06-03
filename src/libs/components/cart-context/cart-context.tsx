import { createContext } from "react";
import { CartItem } from "~types/types";

type Properties = {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (item: CartItem) => void;
  clearCart: () => void;
};

const CartContext = createContext<Properties | null>(null);

export { CartContext };
