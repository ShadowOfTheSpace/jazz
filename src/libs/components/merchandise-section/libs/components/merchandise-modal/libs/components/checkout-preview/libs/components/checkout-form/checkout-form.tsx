import emailjs from "@emailjs/browser";
import { useCallback, useState } from "react";
import { Button, Input } from "~components/components";
import { EmailJs } from "~enums/enums";
import { useAppForm, useLanguageContext } from "~hooks/hooks";
import { type CartItem, type OrderInfo } from "~types/types";
import { cn } from "~utils/utils";
import { orderInfoValidationSchema } from "~validation-schemas/validation-schemas";

type Properties = {
  afterSubmit: () => void;
  cartItems: CartItem[];
  totalPrice: string;
};

const CheckoutForm: React.FC<Properties> = ({
  afterSubmit,
  cartItems,
  totalPrice,
}) => {
  const { appLanguage, translate } = useLanguageContext();

  const { control, errors, handleSubmit } = useAppForm<OrderInfo>({
    defaultValues: {
      comments: "",
      email: "",
      fullName: "",
      phoneNumber: "",
      shippingAddress: "",
    },
    validationSchema: orderInfoValidationSchema,
  });

  const [isOrderSending, setIsOrderIsSending] = useState<boolean>(false);

  const handleFormSubmit = useCallback(
    ({
      comments,
      email,
      fullName,
      phoneNumber,
      shippingAddress,
    }: OrderInfo) => {
      setIsOrderIsSending(true);
      emailjs.init({ publicKey: EmailJs.PUBLIC_KEY });
      emailjs
        .send(EmailJs.SERVICE, EmailJs.CHECKOUT_TEMPLATE, {
          comments,
          email,
          fullName,
          items: cartItems.map(({ price, quantity, selectedSize, title }) => {
            return {
              price,
              quantity,
              selectedSize: selectedSize ?? "–",
              title: title.en,
            };
          }),
          phoneNumber,
          shippingAddress,
          totalPrice,
        })
        .then(() => {
          setIsOrderIsSending(false);
          afterSubmit();
        });
    },
    [afterSubmit, cartItems, totalPrice]
  );

  return (
    <form
      className="flex flex-col items-center gap-y-[25px] w-[min(600px,100%)] lg:w-[calc(50%-60px)] self-center"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Input
        control={control}
        errors={errors}
        name="fullName"
        placeholder={translate("Full name")}
        className="rounded-[8px] h-[35px] md:h-[54px]"
        hasLabel
      />
      <Input
        control={control}
        errors={errors}
        name="email"
        placeholder="Email"
        className="rounded-[8px] h-[35px] md:h-[54px]"
        hasLabel
      />
      <Input
        autocomplete="tel"
        control={control}
        errors={errors}
        name="phoneNumber"
        placeholder={translate("Phone")}
        className="rounded-[8px] h-[35px] md:h-[54px]"
        hasLabel
      />
      <Input
        control={control}
        errors={errors}
        name="shippingAddress"
        placeholder={translate("Shipping address")}
        className="rounded-[8px] h-[35px] md:h-[54px]"
        hasLabel
      />
      <Input
        control={control}
        errors={errors}
        name="comments"
        placeholder={translate("Additional comments")}
        rows={3}
        hasLabel
      />
      <div className="flex flex-col gap-y-[10px] w-full self-start">
        <p
          className={cn(
            "text-[18px] md:text-[22px]",
            appLanguage === "en" && "font-kameron",
            appLanguage === "ua" && "font-inter",
            appLanguage === "by" && "font-inter",
            appLanguage === "lt" && "font-inter"
          )}
        >
          {translate("Total price")}:
          <span className="font-bold text-jz-gold">⠀€{totalPrice}</span>
        </p>
        <Button
          label={translate("Order")}
          className="mt-auto"
          type="submit"
          isLoading={isOrderSending}
          isDisabled={isOrderSending}
        />
      </div>
    </form>
  );
};

export { CheckoutForm };
