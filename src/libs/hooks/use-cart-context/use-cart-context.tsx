import { useContext } from "react";
import { CartContext } from "~components/components";

const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw Error();
  }

  return { ...context };
};

export { useCartContext };
