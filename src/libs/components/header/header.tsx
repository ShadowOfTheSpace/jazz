import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { Button, Link, Socials } from "~/libs/components/components";
import logo from "~assets/images/logo.png";
import { Navigation } from "./libs/components/components";

const Header: React.FC = () => {
  const [isSidebarShown, setIsSidebarShown] = useState<boolean>(false);
  const [isScrollLock, setIsScrollLock] = useState<boolean>(false);

  const handleSidebarOpen = useCallback(() => {
    setIsSidebarShown(true);
    setIsScrollLock(true);
  }, []);

  const handleSidebarClose = useCallback(() => {
    setIsSidebarShown(false);
  }, []);

  const handleScrollUnlock = useCallback(() => {
    setIsScrollLock(isSidebarShown);
  }, [isSidebarShown]);

  return (
    <header className="flex justify-center w-full">
      <div className="flex justify-between items-center p-[16px] sm:p-[32px] w-full max-w-[1400px]">
        <Link href="" className="shrink-0">
          <img alt="logo" className="w-[75px] lg:w-[100px]" src={logo} />
        </Link>
        <RemoveScroll enabled={isScrollLock} forwardProps>
          <motion.div
            initial={{ x: "100%" }}
            animate={isSidebarShown ? { x: 0 } : {}}
            transition={{ bounce: 0 }}
            className="top-0 right-0 z-20 fixed bg-jz-gray w-[min(100vw,250px)] h-[100dvh] overflow-y-auto lg:contents"
            onAnimationComplete={handleScrollUnlock}
          >
            <Button
              className="top-[36px] sm:top-[50px] right-[16px] sm:right-[32px] absolute flex border-0 lg:hidden bg-transparent text-jz-white size-auto"
              iconName="close"
              onClick={handleSidebarClose}
            />
            <div className="flex lg:flex-row flex-col justify-between gap-[24px] lg:m-0 mt-[120px] px-[20px] w-full max-w-[764px] lg-[150px]">
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
              className="z-10 fixed inset-0 bg-jz-main/20 backdrop-blur-[2px]"
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
