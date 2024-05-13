import { motion } from "framer-motion";
import { useState } from "react";
import { Link, Socials } from "~/libs/components/components";
import logo from "~assets/images/logo.png";
import { Navigation } from "./libs/components/components";

const Header: React.FC = () => {
  const [isSidebarShown, setIsSidebarShown] = useState<boolean>(false);

  return (
    <header className="flex justify-center w-full">
      <div className="flex justify-between items-center p-[32px] w-full max-w-[1400px]">
        <Link href="" className="shrink-0">
          <img alt="logo" src={logo} />
        </Link>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isSidebarShown ? 0 : "100%" }}
          transition={{ bounce: 0 }}
          className="top-0 right-0 z-10 fixed bg-[#171717] w-[min(100vw,250px)] h-[100dvh] overflow-auto lg:contents"
        >
          <div className="flex md:flex-row flex-col justify-between gap-[24px] lg:m-0 mx-[20px] w-full max-w-[764px] lg-[150px]">
            <Navigation />
            <Socials />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export { Header };
