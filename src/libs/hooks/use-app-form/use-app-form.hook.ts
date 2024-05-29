import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  type DefaultValues,
  type FieldValues,
  type UseFormProps,
  type ValidationMode,
} from "react-hook-form";

import { type Schema as ValidationSchema } from "zod";

type Parameters<T extends FieldValues = FieldValues> = {
  defaultValues: DefaultValues<T>;
  mode?: keyof ValidationMode;
  validationSchema?: ValidationSchema;
};

const useAppForm = <T extends FieldValues = FieldValues>({
  defaultValues,
  mode = "onSubmit",
  validationSchema,
}: Parameters<T>) => {
  let parameters: UseFormProps<T> = {
    defaultValues,
    mode,
  };

  if (validationSchema) {
    parameters = {
      ...parameters,
      resolver: zodResolver(validationSchema),
    };
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<T>(parameters);

  return {
    control,
    errors,
    handleSubmit,
    reset,
  };
};

export { useAppForm };
