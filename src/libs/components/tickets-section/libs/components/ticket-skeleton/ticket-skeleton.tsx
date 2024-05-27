import { Skeleton } from "~/libs/components/components";

const TicketSkeleton: React.FC = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-x-[50px] gap-y-[20px] bg-jz-gray p-[20px] rounded-[20px] sm:h-auto">
      <Skeleton className="rounded-[6px] sm:w-[250px] h-[270px] sm:h-auto sm:aspect-square" />
      <div className="flex flex-col grow">
        <Skeleton className="mb-[4px] rounded-[6px] w-full h-[calc(1.5em_-_4px)] text-[26px] sm:text-[32px]" />
        <Skeleton className="rounded-[6px] w-full h-[calc(1.5em_*_4)] text-[16px] sm:text-[20px]" />
        <Skeleton className="mt-[20px] sm:mt-auto rounded-[40px] w-[120px] sm:w-[126px] h-[45px] sm:h-[48px]" />
      </div>
    </div>
  );
};

export { TicketSkeleton };
