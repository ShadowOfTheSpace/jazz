import { useCallback, useEffect, useState } from "react";
import { getTickets } from "~modules/tickets/tickets";
import { Ticket } from "~types/types";
import { TicketsCarousel } from "./libs/components/components";
import { Placeholder } from "../components";

const TicketsSection: React.FC = () => {
  const [isTicketsLoading, setIsTicketsLoading] = useState<boolean>(true);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const handleGetTickets = useCallback(async () => {
    const tickets = await getTickets();

    setTickets(tickets);
    setIsTicketsLoading(false);
  }, []);

  useEffect(() => {
    handleGetTickets();
  }, [handleGetTickets]);

  const isTicketsPresent = tickets.length > 0 || isTicketsLoading;

  return (
    <section className="px-[16px] sm:px-[32px] w-full max-w-[950px] xl:max-w-[1400px] self-center">
      {isTicketsPresent ? (
        <TicketsCarousel tickets={tickets} isLoading={isTicketsLoading} />
      ) : (
        <Placeholder
          description="We apologize, but there are currently no tickets available for
          purchase. Please check back later for updates or subscribe to our
          newsletter to be the first to know when tickets go on sale."
          title="Tickets not available"
        />
      )}
    </section>
  );
};

export { TicketsSection };
