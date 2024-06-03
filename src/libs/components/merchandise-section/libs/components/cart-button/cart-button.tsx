import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Icon, Link } from "~components/components";
import { AppRoute } from "~enums/enums";
import { checkIfPathMatchingPattern } from "~helpers/helpers";
import { useCartContext } from "~hooks/hooks";

const CartButton: React.FC = () => {
  const { cartItems } = useCartContext();

  const { pathname } = useLocation();

  const isProductsUrl = checkIfPathMatchingPattern(
    pathname,
    AppRoute.PRODUCTS_$ID
  );

  const isCheckoutUrl = checkIfPathMatchingPattern(pathname, AppRoute.CHECKOUT);

  const isCartButtonShown =
    !(isProductsUrl || isCheckoutUrl) && cartItems.length > 0;

  return (
    <AnimatePresence>
      {isCartButtonShown && (
        <motion.div
          initial={{ left: "105vw", opacity: 0 }}
          animate={{
            left: "var(--cart-button-position)",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 150,
              duration: 0.3,
              delay: 0.5,
            },
          }}
          exit={{ left: "105vw", opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            duration: 0.3,
          }}
          className="bottom-[20px] sm:bottom-[50px] z-10 fixed [--cart-button-position:calc(100vw-60px)] sm:[--cart-button-position:calc(100vw-150px)]"
        >
          <Link
            className="flex justify-center items-center border-[2px] border-jz-gold bg-jz-gold has-hover:hover:bg-jz-main no-hover:active:bg-jz-main p-[5px] sm:p-[10px] rounded-full text-jz-main has-hover:hover:text-jz-gold no-hover:active:text-jz-gold transition-colors 1size-[40px] size-[50px] sm:[--cart-button-position]"
            href={AppRoute.CHECKOUT}
            title="Open Cart"
          >
            <Icon name="cart" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { CartButton };
