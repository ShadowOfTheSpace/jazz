import { useCart } from "~hooks/hooks";
import { CartContext } from "../cart-context/cart-context";

type Properties = {
  children: React.ReactNode;
};

const CartProvider: React.FC<Properties> = ({ children }) => {
  const { addItemToCart, cartItems, clearCart, removeItemFromCart } = useCart();

  return (
    <CartContext.Provider
      value={{ addItemToCart, cartItems, clearCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
