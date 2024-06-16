import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { Placeholder } from "~components/components";
import { useCartContext } from "~hooks/hooks";
import { CartItem, CheckoutForm } from "./libs/components/components";

const CheckoutPreview: React.FC = () => {
  const { cartItems, removeItemFromCart, clearCart } = useCartContext();

  const [isOrderCompleted, setIsOrderCompleted] = useState<boolean>(false);

  const totalPrice = cartItems
    .reduce((currentPrice, { price, quantity }) => {
      return currentPrice + price * quantity;
    }, 0)
    .toFixed(2);

  const isCartIsNotEmpty = cartItems.length > 0;

  const handleAfterSubmit = useCallback(() => {
    setIsOrderCompleted(true);
    clearCart();
  }, [clearCart]);

  if (!isCartIsNotEmpty && !isOrderCompleted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-[16px] sm:p-[32px] pt-[60px] lg:pt-[30px] w-screen lg:w-[min(1240px,calc(100vw-50px))] h-[100dvh] lg:h-auto lg:max-h-[calc(100dvh-50px)]"
      >
        <div className="flex items-center w-full h-full lg:h-[590px] *:grow">
          <Placeholder
            description="But you can change it!"
            title="Cart is empty"
          />
        </div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {isOrderCompleted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-[16px] sm:p-[32px] pt-[60px] lg:pt-[30px] w-screen lg:w-[min(1240px,calc(100vw-50px))] h-[100dvh] lg:h-auto lg:max-h-[calc(100dvh-50px)]"
          key="placeholder"
        >
          <div className="flex items-center w-full h-full lg:h-[590px] *:grow">
            <Placeholder
              description="We will contact with you soon"
              title="Order completed"
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          exit={{ opacity: 0 }}
          className="p-[16px] sm:p-[32px] pt-[60px] lg:pt-[30px] w-screen lg:w-[min(1240px,calc(100vw-50px))] h-[100dvh] lg:h-auto lg:max-h-[calc(100dvh-50px)] text-jz-white"
          key="checkout-form"
        >
          <div className="flex lg:flex-row flex-col gap-[20px] sm:gap-[30px] -mr-[10px] lg:-mr-[5px] pr-[10px] lg:pr-[5px] h-full overflow-y-auto">
            <div className="flex flex-col -mr-[10px] pr-[10px] divide-y divide-jz-light-gray lg:w-[50%] max-w-full lg:h-[590px] lg:overflow-y-scroll lg:aspect-square w-[min(600px,100%)] self-center">
              <AnimatePresence>
                {cartItems.map((cartItem, index) => {
                  return (
                    <motion.div exit={{ opacity: 0 }} key={index}>
                      <CartItem
                        cartItem={cartItem}
                        onDeleteItem={removeItemFromCart}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            <CheckoutForm
              afterSubmit={handleAfterSubmit}
              cartItems={cartItems}
              totalPrice={totalPrice}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { CheckoutPreview };
