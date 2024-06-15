import {
  useController,
  type Control,
  type FieldErrors,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { cn } from "~utils/utils";

type Properties<T extends FieldValues> = {
  className?: string;
  control: Control<T, null>;
  errors: FieldErrors<T>;
  hasLabel?: boolean;
  name: FieldPath<T>;
  placeholder?: string;
  rows?: number;
  type?: "email" | "text";
};

const Input = <T extends FieldValues>({
  className,
  control,
  errors,
  hasLabel = false,
  name,
  placeholder = "",
  rows,
  type = "text",
}: Properties<T>): JSX.Element => {
  const { field } = useController({ control, name });

  const error = errors[name]?.message;

  const hasError = Boolean(error);
  const isTextArea = Boolean(rows);

  return (
    <div className="relative flex w-full">
      {isTextArea ? (
        <textarea
          className={cn(
            "border-[2px] border-jz-gold/50 focus:border-jz-gold bg-transparent pt-[7px] px-[10px] md:pt-[15px] md:pb-[5px] lg:px-[20px] rounded-[10px] w-full font-bold placeholder:font-normal text-[14px] text-jz-white lg:text-[16px] focus:placeholder:text-transparent placeholder:text-jz-light-gray tracking-[0.05em] transition-colors outline-none resize-none font-inter peer",
            hasError && "border-jz-red",
            className
          )}
          {...field}
          placeholder={hasLabel ? " " : placeholder}
          rows={rows}
        />
      ) : (
        <input
          className={cn(
            "border-[2px] border-jz-gold/50 focus:border-jz-gold bg-transparent px-[10px] lg:px-[20px] rounded-[40px] w-full font-bold font-inter placeholder:font-normal text-[14px] text-jz-white lg:text-[16px] focus:placeholder:text-transparent placeholder:text-jz-light-gray tracking-[0.05em] transition-colors outline-none peer",
            hasError && "border-jz-red",
            className
          )}
          {...field}
          placeholder={hasLabel ? " " : placeholder}
          type={type}
        />
      )}
      {hasLabel && (
        <label
          className={cn(
            "top-[calc(-1em/2)] md:peer-focus:top-[calc(-1em/2)] peer-focus:top-[calc(-1em/2)] peer-placeholder-shown:top-[calc(50%-1em/2)] left-[calc(10px+2px-4px)] lg:left-[calc(20px+2px-4px)] absolute bg-jz-gray px-[4px] font-bold font-inter peer-focus:font-bold peer-placeholder-shown:font-normal text-[14px] text-jz-gold/50 lg:text-[16px] peer-focus:text-jz-gold peer-placeholder-shown:text-jz-light-gray !leading-none tracking-[0.05em] origin-left transition-all pointer-events-none scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100",
            isTextArea &&
              "md:peer-placeholder-shown:top-[calc(20px)] peer-placeholder-shown:top-[calc(10px+3px)]",
            hasError && "text-jz-red"
          )}
        >
          {placeholder}
        </label>
      )}
      {hasError && (
        <span className="top-full left-[20px] absolute mt-[5px] font-bold font-inter text-[10px] text-jz-red md:text-[12px] leading-3 tracking-[0.05em]">
          {error as string}
        </span>
      )}
    </div>
  );
};

export { Input };
