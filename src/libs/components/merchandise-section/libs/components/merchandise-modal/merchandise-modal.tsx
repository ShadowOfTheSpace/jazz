import { AnimatePresence, motion } from "framer-motion";
import { useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Modal } from "~components/components";
import { AppRoute } from "~enums/enums";
import { checkIfPathMatchingPattern } from "~helpers/helpers";
import { type Merchandise } from "~types/types";
import { CheckoutPreview, ItemPreview } from "./libs/components/components";

type Properties = {
  isLoading?: boolean;
  merchandises: Merchandise[];
};

const MerchandiseModal: React.FC<Properties> = ({
  merchandises,
  isLoading,
}) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { id } = useParams();

  const isProductsUrl = checkIfPathMatchingPattern(
    pathname,
    AppRoute.PRODUCTS_$ID
  );

  const isCheckoutUrl = checkIfPathMatchingPattern(pathname, AppRoute.CHECKOUT);

  const isMerchandiseModalOpen = (isProductsUrl || isCheckoutUrl) && !isLoading;

  const handleCloseModal = useCallback(() => {
    navigate(AppRoute.ROOT);
  }, [navigate]);

  return (
    <Modal isOpen={isMerchandiseModalOpen} onClose={handleCloseModal}>
      <AnimatePresence mode="popLayout">
        {isProductsUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            <ItemPreview
              merchandises={merchandises}
              isLoading={isLoading}
              merchandiseId={id}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {isCheckoutUrl && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <CheckoutPreview />
        </motion.div>
      )}
    </Modal>
  );
};

export { MerchandiseModal };
