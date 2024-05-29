import { cn } from "~utils/utils";
import {
  Controller,
  useController,
  type Control,
  type FieldErrors,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import InputMask from "react-input-mask";

type Properties<T extends FieldValues> = {
  className?: string;
  control: Control<T, null>;
  errors: FieldErrors<T>;
  name: FieldPath<T>;
  placeholder?: string;
  rows?: number;
  type?: "email" | "text";
  mask?: string;
  maskChar?: string;
};

const Input = <T extends FieldValues>({
  className,
  control,
  errors,
  name,
  placeholder = "",
  rows,
  type = "text",
  mask,
  maskChar,
}: Properties<T>): JSX.Element => {
  const { field } = useController({ control, name });

  const error = errors[name]?.message;

  const hasError = Boolean(error);
  const isTextArea = Boolean(rows);
  const hasMask = Boolean(mask && maskChar);

  return (
    <div className="relative w-full">
      {isTextArea ? (
        <textarea
          className={cn(
            "border-[2px] border-jz-gold/50 focus:border-jz-gold bg-transparent p-[10px] rounded-[10px] w-full font-bold placeholder:font-normal text-[14px] text-jz-white lg:text-[16px] focus:placeholder:text-transparent placeholder:text-jz-light-gray tracking-[0.05em] transition-colors outline-none resize-none",
            hasError && "border-jz-red",
            className
          )}
          {...field}
          placeholder={placeholder}
          rows={rows}
        />
      ) : (
        <>
          {hasMask ? (
            <Controller
              name={name}
              control={control}
              render={({ field: { ref, ...rest } }) => {
                return (
                  <InputMask
                    mask={mask as string}
                    maskChar={maskChar}
                    placeholder={placeholder}
                    className={cn(
                      "border-[2px] border-jz-gold/50 focus:border-jz-gold bg-transparent px-[10px] sm:px-[20px] rounded-[40px] w-full font-bold font-inter placeholder:font-normal text-[14px] text-jz-white lg:text-[16px] focus:placeholder:text-transparent placeholder:text-jz-light-gray tracking-[0.05em] transition-colors outline-none",
                      hasError && "border-jz-red",
                      className
                    )}
                    {...rest}
                  />
                );
              }}
            />
          ) : (
            <input
              className={cn(
                "border-[2px] border-jz-gold/50 focus:border-jz-gold bg-transparent px-[10px] sm:px-[20px] rounded-[40px] w-full font-bold font-inter placeholder:font-normal text-[14px] text-jz-white lg:text-[16px] focus:placeholder:text-transparent placeholder:text-jz-light-gray tracking-[0.05em] transition-colors outline-none",
                hasError && "border-jz-red",
                className
              )}
              {...field}
              placeholder={placeholder}
              type={type}
            />
          )}
        </>
      )}
      {hasError && (
        <span className="top-full left-[20px] absolute mt-[5px] font-bold font-inter text-[12px] text-jz-red tracking-[0.05em]">
          {error as string}
        </span>
      )}
    </div>
  );
};

export { Input };
