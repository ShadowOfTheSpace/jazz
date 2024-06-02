import { cn } from "~utils/utils";
import {
  useController,
  type Control,
  type FieldErrors,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";


type Properties<T extends FieldValues> = {
  className?: string;
  control: Control<T, null>;
  errors: FieldErrors<T>;
  name: FieldPath<T>;
  placeholder?: string;
  rows?: number;
  type?: "email" | "text";
};

const Input = <T extends FieldValues>({
  className,
  control,
  errors,
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
            "border-[2px] border-jz-gold/50 focus:border-jz-gold bg-transparent p-[10px] rounded-[10px] w-full font-bold placeholder:font-normal text-[14px] text-jz-white lg:text-[16px] focus:placeholder:text-transparent placeholder:text-jz-light-gray tracking-[0.05em] transition-colors outline-none resize-none font-inter",
            hasError && "border-jz-red",
            className
          )}
          {...field}
          placeholder={placeholder}
          rows={rows}
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
      {hasError && (
        <span className="top-full left-[20px] absolute mt-[5px] font-bold font-inter text-[10px] text-jz-red md:text-[12px] leading-3 tracking-[0.05em]">
          {error as string}
        </span>
      )}
    </div>
  );
};

export { Input };
