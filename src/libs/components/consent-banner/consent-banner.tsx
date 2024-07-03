import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { Button } from "~components/components";
import { useConsentContext, useLanguageContext } from "~hooks/hooks";
import { cn } from "~utils/utils";

const ConsentBanner: React.FC = () => {
  const { appLanguage, translate } = useLanguageContext();

  const { consent, setConsent } = useConsentContext();

  const [isBannerOpen, setIsBannerOpen] = useState<boolean>(consent === null);

  const handleBannerClose = useCallback(() => {
    setIsBannerOpen(false);
  }, []);

  const handleAcceptConsent = useCallback(() => {
    setConsent(true);
    handleBannerClose();
  }, [setConsent, handleBannerClose]);

  const handleRejectConsent = useCallback(() => {
    setConsent(false);
    handleBannerClose();
  }, [setConsent, handleBannerClose]);

  return (
    <AnimatePresence>
      {isBannerOpen && (
        <motion.div
          initial={{
            left: "var(--banner-x-offset)",
            bottom: "var(--banner-y-offset)",
          }}
          animate={{
            left: 0,
            bottom: 0,
            transition: {
              type: "spring",
              stiffness: 50,
              duration: 0.3,
              delay: 3,
            },
          }}
          exit={{
            left: "var(--banner-x-offset)",
            bottom: "var(--banner-y-offset)",
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 0.3,
          }}
          className={cn(
            "bottom-0 z-[5] fixed flex flex-col gap-y-[15px] sm:border-jz-gold/30 bg-jz-gray m-0 sm:m-[16px] p-[16px] sm:border border-t border-t-jz-gold/30 sm:rounded-[10px] w-full sm:w-[calc(100vw-32px)] md:w-[min(800px,calc(100vw-32px))]",
            "[--banner-x-offset:0] sm:[--banner-x-offset:-105vw] [--banner-y-offset:-15dvh] sm:[--banner-y-offset:0]"
          )}
        >
          <Button
            iconName="close"
            className="top-[16px] right-[16px] absolute bg-transparent border-none text-jz-white"
            onClick={handleBannerClose}
          />
          <div className="flex flex-col gap-y-[5px]">
            <h3
              className={cn(
                "text-[26px] lg:text-[32px]",
                appLanguage === "en" && "font-karantina tracking-[0.05em]",
                appLanguage === "ua" && "font-oswald",
                appLanguage === "by" && "font-oswald",
                appLanguage === "lt" && "font-oswald"
              )}
            >
              {translate("Manage Consent")}
            </h3>
            <p
              className={cn(
                "text-[14px] text-jz-light-gray lg:text-[16px]",
                appLanguage === "en" && "font-kameron",
                appLanguage === "ua" && "font-inter",
                appLanguage === "by" && "font-inter",
                appLanguage === "lt" && "font-inter"
              )}
            >
              {translate("Consent text")}
            </p>
          </div>
          <div className="flex justify-end gap-x-[16px]">
            <Button
              label={translate("Reject")}
              className="border-jz-gold/50 has-hover:hover:border-jz-gold bg-transparent px-[15px] sm:px-[30px] py-[5px] sm:py-[10px] w-full sm:w-max text-[14px] text-jz-gold/50 sm:text-[14px] xl:text-[16px] has-hover:hover:text-jz-gold"
              onClick={handleRejectConsent}
            />
            <Button
              label={translate("Accept")}
              className="px-[15px] sm:px-[30px] py-[5px] sm:py-[10px] w-full sm:w-max text-[14px] sm:text-[14px] xl:text-[16px]"
              onClick={handleAcceptConsent}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { ConsentBanner };
