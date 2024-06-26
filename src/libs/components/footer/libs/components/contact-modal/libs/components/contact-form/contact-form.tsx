import emailjs from "@emailjs/browser";
import { useCallback, useState } from "react";
import { Button, Input } from "~components/components";
import { useAppForm, useLanguageContext } from "~hooks/hooks";
import { Contact } from "~types/types";
import { contactValidationSchema } from "~validation-schemas/validation-schemas";

type Properties = {
  afterSubmit: () => void;
};

const ContactForm: React.FC<Properties> = ({ afterSubmit }) => {
  const { translate } = useLanguageContext();

  const { control, errors, handleSubmit } = useAppForm<Contact>({
    defaultValues: { comments: "", email: "", fullName: "", phoneNumber: "" },
    validationSchema: contactValidationSchema,
  });

  const [isContactSending, setIsContactSending] = useState<boolean>(false);

  const handleFormSubmit = useCallback(
    ({ comments, email, fullName, phoneNumber }: Contact) => {
      setIsContactSending(true);
      emailjs.init({ publicKey: "WVSs5dr5Y0wU7GGEC" });
      emailjs
        .send("service_76783xa", "template_pbq0rak", {
          comments,
          email,
          fullName,
          phoneNumber,
        })
        .then(() => {
          setIsContactSending(false);
          afterSubmit();
        });
    },
    [afterSubmit]
  );

  return (
    <form
      className="flex flex-col items-center gap-y-[25px] w-full self-center"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Input
        control={control}
        errors={errors}
        name="fullName"
        placeholder={translate("Name")}
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
        name="comments"
        placeholder={translate("Additional comments")}
        rows={3}
        hasLabel
      />
      <Button
        className="w-full sm:w-max"
        label={translate("Send")}
        type="submit"
        isLoading={isContactSending}
        isDisabled={isContactSending}
      />
    </form>
  );
};

export { ContactForm };
