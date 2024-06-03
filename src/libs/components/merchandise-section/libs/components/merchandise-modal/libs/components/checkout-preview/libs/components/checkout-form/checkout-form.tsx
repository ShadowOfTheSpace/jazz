import emailjs from "@emailjs/browser";

import { useAppForm } from "~hooks/hooks";
import { type CartItem, type OrderInfo } from "~types/types";
import { Button, Input } from "~components/components";
import { orderInfoValidationSchema } from "~validation-schemas/validation-schemas";
import { useCallback, useState } from "react";

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
      emailjs.init({ publicKey: "WVSs5dr5Y0wU7GGEC" });
      emailjs
        .send("service_76783xa", "template_f1ym6ht", {
          comments,
          email,
          fullName,
          items: cartItems.map(({ price, quantity, selectedSize, title }) => {
            return { price, quantity, selectedSize, title };
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
        placeholder="Full name"
        className="rounded-[8px] h-[35px] md:h-[54px]"
      />
      <Input
        control={control}
        errors={errors}
        name="email"
        placeholder="Email"
        className="rounded-[8px] h-[35px] md:h-[54px]"
      />
      <Input
        control={control}
        errors={errors}
        name="phoneNumber"
        placeholder="Phone"
        className="rounded-[8px] h-[35px] md:h-[54px]"
      />
      <Input
        control={control}
        errors={errors}
        name="shippingAddress"
        placeholder="Shipping address"
        className="rounded-[8px] h-[35px] md:h-[54px]"
      />
      <Input
        control={control}
        errors={errors}
        name="comments"
        placeholder="Additional comments"
        rows={3}
      />
      <div className="flex flex-col gap-y-[10px] w-full self-start">
        <p className="text-[18px] md:text-[22px]">
          Total price:
          <span className="font-bold text-jz-gold">⠀€{totalPrice}</span>
        </p>
        <Button
          label="Order"
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
