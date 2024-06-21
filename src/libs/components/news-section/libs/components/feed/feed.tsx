import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Icon } from "~components/components";

type Properties = {
  feedId: string;
};

const Feed: React.FC<Properties> = ({ feedId }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://cdn.curator.io/published/${feedId}.js`;
    document.body.appendChild(script);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      document.body.removeChild(script);
    };
  }, [feedId]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            animate={{ opacity: 1 }}
            className="flex justify-center items-center w-full h-full"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <Icon
              className="text-jz-gold/50 animate-spin size-[100px]"
              name="vinyl"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "0px 0px -20% 0px" }}
        whileInView={{ opacity: isLoading ? 0 : 1 }}
        data-crt-feed-id={feedId}
        id="curator-feed-default-feed-layout"
      />
    </>
  );
};

export { Feed };
