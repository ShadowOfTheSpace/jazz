import { useCallback, useEffect, useState } from "react";
import { cn } from "~utils/utils";
import { Carousel } from "~components/components";
import { getTickets } from "~modules/tickets/tickets";
import { Ticket as TTicket } from "~types/types";
import { Ticket } from "../components";

const TicketsCarousel: React.FC = () => {
  const [isTicketsLoading, setIsTicketsLoading] = useState<boolean>(true);
  const [tickets, setTickets] = useState<TTicket[]>([]);

  const handleGetTickets = useCallback(async () => {
    const tickets = await getTickets();

    setTickets(tickets);
    setIsTicketsLoading(false);
  }, []);

  useEffect(() => {
    handleGetTickets();
  }, [handleGetTickets]);

  const isEnoughTickets = tickets.length > 1;
  const isTicketsPresent = tickets.length > 0 || isTicketsLoading;

  return (
    <>
      {isTicketsPresent ? (
        <Carousel
          isLoading={isTicketsLoading}
          opts={{ active: isEnoughTickets, align: "start" }}
        >
          <Carousel.Content
            className="flex -ml-[30px]"
            skeletonClassName="h-[491px] sm:h-[290px] rounded-[20px]"
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
      ) : (
        <div className="flex flex-col justify-center items-center border-jz-gold py-[50px] border-t border-b sm:h-[372px]">
          <h1 className="font-karantina text-[32px] text-jz-gold sm:text-[60px] capitalize tracking-widest">
            Tickets not available
          </h1>
          <p className="text-[14px] text-balance text-center text-jz-light-gray sm:text-[24px]">
            We apologize, but there are currently no tickets available for
            purchase. Please check back later for updates or subscribe to our
            newsletter to be the first to know when tickets go on sale.
          </p>
        </div>
      )}
    </>
  );
};

export { TicketsCarousel };
