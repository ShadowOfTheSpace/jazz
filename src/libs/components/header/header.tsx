import { AnimatePresence, AnimationDefinition, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import Logo from "~assets/images/logo.svg?react";
import { Button, Link, Navigation, Socials } from "~components/components";
import { AppRoute } from "~enums/enums";
import { useLanguageContext, useScrollLock } from "~hooks/hooks";

const Header: React.FC = () => {
  const { translate } = useLanguageContext();

  const { handleScrollLock, handleScrollUnlock, isScrollLock } =
    useScrollLock();

  const [isSidebarShown, setIsSidebarShown] = useState<boolean>(false);

  const handleSidebarOpen = useCallback(() => {
    setIsSidebarShown(true);
    handleScrollLock();
  }, [handleScrollLock]);

  const handleSidebarClose = useCallback(() => {
    setIsSidebarShown(false);
  }, []);

  const handleSidebarAnimationComplete = useCallback(
    (animation: AnimationDefinition) => {
      if (animation === "close") {
        handleScrollUnlock();
      }
    },
    [handleScrollUnlock]
  );

  return (
    <header className="flex justify-center w-full">
      <div className="flex justify-between items-center p-[16px] sm:p-[32px] w-full max-w-[1400px]">
        <Link href={AppRoute.ROOT} className="shrink-0">
          <Logo />
        </Link>
        <Link
          href="#contacts"
          className="inline lg:hidden mr-[50px] ml-auto font-inter text-jz-gold has-hover:hover:text-jz-gold/75 no-hover:active:text-jz-gold/75 transition-colors"
        >
          {translate("Contacts")}
        </Link>
        <RemoveScroll forwardProps enabled={isScrollLock}>
          <motion.div
            variants={{
              open: {
                x: 0,
              },
              close: {
                x: "100%",
              },
            }}
            initial="close"
            animate={isSidebarShown ? "open" : "close"}
            transition={{ bounce: 0 }}
            className="top-0 right-0 z-20 fixed bg-jz-gray w-[min(100vw,250px)] h-[100dvh] overflow-y-auto lg:contents"
            onAnimationComplete={handleSidebarAnimationComplete}
          >
            <Button
              className="top-[36px] sm:top-[50px] right-[16px] sm:right-[32px] absolute flex border-0 lg:hidden bg-transparent text-jz-white size-auto"
              iconName="close"
              onClick={handleSidebarClose}
            />
            <div className="flex lg:flex-row flex-col justify-between gap-[24px] lg:m-0 mt-[120px] mb-[36px] px-[20px] lg:px-0 w-full max-w-[764px] lg-[150px]">
              <Navigation onClick={handleSidebarClose} />
              <Socials />
            </div>
          </motion.div>
        </RemoveScroll>
        <AnimatePresence>
          {isSidebarShown && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-10 fixed inset-0 bg-jz-main/20 backdrop-blur-[3px]"
              onClick={handleSidebarClose}
            />
          )}
        </AnimatePresence>
        <Button
          className="flex border-0 lg:hidden bg-transparent text-jz-white size-auto"
          iconName="burger"
          onClick={handleSidebarOpen}
        />
      </div>
    </header>
  );
};

export { Header };
