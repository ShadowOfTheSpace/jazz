import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal, Placeholder } from "~components/components";
import { AppRoute } from "~enums/enums";
import { checkIfPathMatchingPattern } from "~helpers/helpers";
import { useLanguageContext } from "~hooks/hooks";
import { cn } from "~utils/utils";
import { ContactForm } from "./libs/components/components";

const ContactModal: React.FC = () => {
  const { appLanguage, translate } = useLanguageContext();

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
            className="p-[16px] sm:p-[32px] pt-[60px] w-screen lg:w-max h-[100dvh] lg:h-auto lg:max-h-[calc(100dvh-50px)]"
            key="placeholder"
          >
            <div className="flex items-center px-[20px] sm:px-[24px] lg:h-[min(513px,calc(100vh-64px-50px))] w-full lg:w-[598px] h-full overflow-y-scroll *:grow">
              <Placeholder
                description={translate("We will contact with you soon")}
                title={translate("Contact sent")}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="flex justify-center w-screen lg:w-max h-[100dvh] lg:h-max lg:max-h-[calc(100dvh-50px)]"
            exit={{ opacity: 0 }}
            key="contact-form"
          >
            <div className="flex flex-col gap-y-[25px] m-[16px] sm:m-[32px] mt-[60px] sm:mt-[60px] mr-[20px] sm:mr-[20px] lg:mr-[30px] pr-[10px] sm:pr-[25px] lg:pr-[30px] w-full lg:w-[600px] overflow-y-auto">
              <h3
                className={cn(
                  "font-bold text-[26px] text-jz-white lg:text-[32px]",
                  appLanguage === "eng" && "font-karantina tracking-[0.05em]",
                  appLanguage === "ukr" && "font-oswald"
                )}
              >
                {translate("We will be in touch soon")}
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
