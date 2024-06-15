import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal, Placeholder } from "~components/components";
import { AppRoute } from "~enums/enums";
import { checkIfPathMatchingPattern } from "~helpers/helpers";
import { AnimatePresence, motion } from "framer-motion";
import { ContactForm } from "./libs/components/components";

const ContactModal: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isContactUrl = checkIfPathMatchingPattern(pathname, AppRoute.CONTACT);
  const [isContactSent, setIsContactSent] = useState<boolean>(false);

  const handleModalClose = useCallback(() => {
    navigate(AppRoute.ROOT);
  }, [navigate]);

  const handleAfterSubmit = useCallback(() => {
    setIsContactSent(true);
  }, []);

  return (
    <Modal isOpen={isContactUrl} onClose={handleModalClose}>
      <AnimatePresence mode="wait">
        {isContactSent ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-[16px] sm:p-[32px] w-screen lg:w-max h-[100dvh] lg:h-auto"
            key="placeholder"
          >
            <div className="flex items-center w-full lg:w-[600px] h-full lg:h-[492px] *:grow">
              <Placeholder
                description="We will contact with you soon"
                title="Contact sent"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="flex justify-center w-screen lg:w-max h-[100dvh] lg:h-max"
            exit={{ opacity: 0 }}
            key="contact-form"
          >
            <div className="flex flex-col gap-y-[32px] m-[32px] w-[600px]">
              <h3 className="font-bold font-karantina text-[26px] text-jz-white lg:text-[32px] tracking-[0.05em]">
                We will be in touch soon!
              </h3>
              <ContactForm afterSubmit={handleAfterSubmit} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export { ContactModal };
