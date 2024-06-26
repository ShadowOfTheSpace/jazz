import { Skeleton } from "~components/components";

const MerchandiseSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-[15px] bg-jz-gray p-[20px] rounded-[10px] shrink-0">
      <Skeleton className="rounded-[6px] w-full aspect-square" />
      <Skeleton className="line-clamp-2 rounded-[6px] h-[calc(1.25*1em*2)] text-[26px] sm:text-[32px]" />
      <Skeleton className="rounded-[6px] w-[40%] h-[1.5em] text-[20px] sm:text-[26px] self-end" />
      <Skeleton className="mt-[16px] sm:mt-[32px] py-[8px] rounded-[40px] h-[44px] sm:h-[50px] text-[16px] sm:text-[20px]" />
    </div>
  );
};

export { MerchandiseSkeleton };
