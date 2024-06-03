import { useCallback } from "react";
import { Button } from "~components/components";

type Properties = {
  count: number;
  setCount: (count: number) => void;
  min: number;
  max: number;
};

const MerchandiseItemsCount: React.FC<Properties> = ({
  count,
  setCount,
  max,
  min,
}) => {
  const handleIncreaseCount = useCallback(() => {
    if (count + 1 <= max) {
      setCount(count + 1);
    }
  }, [count, max, setCount]);

  const handleDecreaseCount = useCallback(() => {
    if (count - 1 >= min) {
      setCount(count - 1);
    }
  }, [count, min, setCount]);

  const handleInputChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(target.value);
      if (value >= min && value <= max) {
        setCount(value);
      }
    },
    [min, max, setCount]
  );

  return (
    <div className="flex flex-col gap-y-[10px]">
      <h4 className="text-[16px] text-jz-light-gray sm:text-[20px] leading-none">Quantity</h4>
      <div className="flex items-center">
        <Button
          iconName="minus"
          className="rounded-r-none transition-all lg:size-[55px] size-[40px]"
          onClick={handleDecreaseCount}
          isDisabled={count - 1 < min}
        />
        <input
          className="bg-transparent w-[5ch] text-center lg:text-[26px] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
          value={count}
          onChange={handleInputChange}
        />
        <Button
          iconName="plus"
          className="rounded-l-none transition-all lg:size-[55px] size-[40px]"
          onClick={handleIncreaseCount}
          isDisabled={count + 1 > max}
        />
      </div>
    </div>
  );
};

export { MerchandiseItemsCount };
