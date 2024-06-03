import { useAppForm } from "~hooks/hooks";
import { emailValidationSchema } from "~validation-schemas/validation-schemas";
import { Button, Input } from "~components/components";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";
import { SUBSCRIPTION_URL } from "./libs/constants/constants";

const SubscribeSection: React.FC = () => {
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
    <>
      <AnimatePresence mode="popLayout">
        {!isSubscribed && (
          <motion.section
            className="flex md:flex-row flex-col justify-end md:items-center gap-y-[10px] md:gap-x-[26px] lg:gap-x-[50px] px-[16px] sm:px-[32px] w-full max-w-[1400px] self-center"
            exit={{ opacity: 0 }}
            initial={{ opacity: 1 }}
          >
            <h3 className="font-bold font-karantina text-[26px] lg:text-[32px] tracking-[0.05em]">
              Subscribe to our newsletters
            </h3>
            <form
              className="flex md:w-[400px] lg:w-[500px]"
              onSubmit={handleSubmit(handleSubscribe)}
            >
              <Input
                className="border-r-0 rounded-r-none h-full"
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
                label="Subscribe"
                type="submit"
              />
            </form>
          </motion.section>
        )}
      </AnimatePresence>
      {isSubscribed && (
        <motion.section
          animate={{ opacity: 1 }}
          className="flex justify-center items-center px-[16px] sm:px-[32px] h-[84px] sm:h-[94px] md:h-[45px] lg:h-[48px] xl:h-[54px]"
          initial={{ opacity: 0 }}
        >
          <h3 className="font-bold font-karantina text-[26px] text-balance text-center lg:text-[32px] tracking-[0.05em]">
            Thank you for subscribing to our newsletters{" "}
            <span className="text-jz-gold">❤</span>
          </h3>
        </motion.section>
      )}
    </>
  );
};

export { SubscribeSection };
