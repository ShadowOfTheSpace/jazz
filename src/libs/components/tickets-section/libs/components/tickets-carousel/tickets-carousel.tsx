import { Carousel } from "~components/components";
import { cn } from "~utils/utils";

import { Ticket as TTicket } from "~types/types";
import { Ticket, TicketSkeleton } from "../components";

type Properties = {
  isLoading?: boolean;
  tickets: TTicket[];
};

const TicketsCarousel: React.FC<Properties> = ({ tickets, isLoading }) => {
  const isEnoughTickets = tickets.length > 1;

  return (
    <Carousel
      isLoading={isLoading}
      opts={{ active: isEnoughTickets, align: "start" }}
    >
      <Carousel.Content
        className="flex -ml-[30px]"
        skeletonWrapperClassName="pl-[30px] basis-full xl:basis-1/2"
        skeletonItem={TicketSkeleton}
        skeletonItemsCount={2}
      >
        {tickets.map((ticket, index) => {
          return (
            <Carousel.Item
              className={cn(
                "pl-[30px] basis-full xl:basis-1/2",
                !isEnoughTickets && "xl:grow-0"
              )}
              key={index}
            >
              <Ticket ticket={ticket} />
            </Carousel.Item>
          );
        })}
      </Carousel.Content>
      <Carousel.Controls className="flex flex-wrap justify-center sm:justify-between items-center my-[20px]">
        <div className="sm:flex gap-x-[10px] hidden">
          <Carousel.Button variant="previous" className="size-[42px]" />
          <Carousel.Button variant="next" className="size-[42px]" />
        </div>
        <Carousel.Dots
          activeDotClassName="border-jz-gold has-hover:hover:border-jz-gold bg-jz-gold no-hover:active:bg-jz-gold has-hover:hover:bg-jz-gold"
          className="flex gap-x-[10px]"
          dotClassName="border-jz-gold/50 has-hover:hover:border-jz-gold no-hover:active:border-jz-gold bg-transparent size-[14px]"
        />
      </Carousel.Controls>
    </Carousel>
  );
};

export { TicketsCarousel };
