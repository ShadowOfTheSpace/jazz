import { AnimatePresence, motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";
import { useHandleEscPress } from "~hooks/hooks";
import { Button } from "~components/components";

type Properties = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<Properties> = ({ children, isOpen, onClose }) => {
  useHandleEscPress({ onEscPress: onClose });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <RemoveScroll forwardProps>
            <motion.dialog
              aria-modal
              open={isOpen}
              className="top-[50%] z-30 fixed bg-jz-gray lg:rounded-[10px] translate-y-[-50%] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Button
                iconName="close"
                className="top-[20px] lg:top-[30px] right-[20px] lg:right-[30px] z-10 absolute flex border-0 bg-transparent text-jz-white size-auto"
                onClick={onClose}
              />
              <>{children}</>
            </motion.dialog>
          </RemoveScroll>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-10 fixed inset-0 bg-jz-main/20 backdrop-blur-[2px]"
            onClick={onClose}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export { Modal };