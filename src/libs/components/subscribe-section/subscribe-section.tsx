import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { Button, Input } from "~components/components";
import { useAppForm, useLanguageContext } from "~hooks/hooks";
import { cn } from "~utils/utils";
import { emailValidationSchema } from "~validation-schemas/validation-schemas";
import { SUBSCRIPTION_URL } from "./libs/constants/constants";

const SubscribeSection: React.FC = () => {
  const { appLanguage, translate } = useLanguageContext();

  const [subscriptionInProgress, setSubscriptionInProgress] =
    useState<boolean>(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const { control, errors, handleSubmit, reset } = useAppForm<{
    email: string;
  }>({
    defaultValues: { email: "" },
    validationSchema: emailValidationSchema,
  });

  const handleSubscribe = useCallback(
    async ({ email }: { email: string }) => {
      setSubscriptionInProgress(true);
      await fetch(`${SUBSCRIPTION_URL}${email}`, { method: "POST" });
      setSubscriptionInProgress(false);
      setIsSubscribed(true);
      reset();
    },
    [reset]
  );

  return (
    <section id="subscription" className="flex justify-center">
      <AnimatePresence mode="popLayout">
        {!isSubscribed && (
          <motion.div
            className="flex md:flex-row flex-col justify-end md:items-center gap-y-[10px] md:gap-x-[26px] lg:gap-x-[50px] px-[16px] sm:px-[32px] w-full max-w-[1400px] self-center"
            exit={{ opacity: 0 }}
            initial={{ opacity: 1 }}
          >
            <motion.h3
              className={cn(
                "font-bold",
                "[--subtitle-x-offset:-10px] md:[--subtitle-x-offset:-20px]",
                appLanguage === "eng" &&
                  "font-karantina text-[26px] lg:text-[32px] tracking-[0.05em]",
                appLanguage === "ukr" &&
                  "font-oswald text-[24px] lg:text-[28px]",
                appLanguage === "blr" &&
                  "font-oswald text-[24px] lg:text-[28px]"
              )}
              initial={{ x: "var(--subtitle-x-offset)", opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              {translate("Subscribe to secret updates")}
            </motion.h3>
            <motion.form
              className={cn(
                "flex md:w-[400px] lg:w-[500px]",
                "[--form-x-offset:0] md:[--form-x-offset:20px] [--form-y-offset:16px] md:[--form-y-offset:0]"
              )}
              onSubmit={handleSubmit(handleSubscribe)}
              initial={{
                x: "var(--form-x-offset)",
                y: "var(--form-y-offset)",
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
            >
              <Input
                className="sm:px-[20px] border-r-0 rounded-r-none h-full"
                control={control}
                errors={errors}
                name="email"
                type="email"
                placeholder="jazz.lover@email.com"
              />
              <Button
                className="rounded-l-none text-[14px] sm:text-[14px] lg:text-[16px]"
                isDisabled={subscriptionInProgress}
                isLoading={subscriptionInProgress}
                label={translate("Subscribe")}
                type="submit"
              />
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
      {isSubscribed && (
        <motion.div
          animate={{ opacity: 1 }}
          className="flex justify-center items-center px-[16px] sm:px-[32px] h-[84px] sm:h-[94px] md:h-[45px] lg:h-[48px] xl:h-[54px]"
          initial={{ opacity: 0 }}
        >
          <h3
            className={cn(
              "font-bold text-balance text-center",
              appLanguage === "eng" &&
                "font-karantina text-[26px] lg:text-[32px] tracking-[0.05em]",
              appLanguage === "ukr" && "font-oswald text-[24px] lg:text-[28px]",
              appLanguage === "blr" && "font-oswald text-[24px] lg:text-[28px]"
            )}
          >
            {translate("Thank you for subscribing")}{" "}
            <span className="text-jz-gold">❤</span>
          </h3>
        </motion.div>
      )}
    </section>
  );
};

export { SubscribeSection };
