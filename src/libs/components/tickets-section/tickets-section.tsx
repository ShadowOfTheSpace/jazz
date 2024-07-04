import { useCallback, useEffect, useState } from "react";
import { useLanguageContext } from "~hooks/hooks";
import { getTickets } from "~modules/tickets/tickets";
import { Ticket } from "~types/types";
import { cn } from "~utils/utils";
import { Animated, Placeholder } from "../components";
import { TicketsCarousel } from "./libs/components/components";

const TicketsSection: React.FC = () => {
  const { appLanguage, translate } = useLanguageContext();

  const [areTicketsLoading, setAreTicketsLoading] = useState<boolean>(true);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const handleGetTickets = useCallback(async () => {
    const tickets = await getTickets();

    setTickets(tickets);
    setAreTicketsLoading(false);
  }, []);

  useEffect(() => {
    handleGetTickets();
  }, [handleGetTickets]);

  const areTicketsPresent = tickets.length > 0 || areTicketsLoading;

  return (
    <section
      id="events"
      className="flex flex-col lg:items-center gap-y-[16px] lg:gap-y-[36px] px-[16px] sm:px-[32px] w-full xl:max-w-[1400px] self-center"
    >
      <Animated.Title
        className={cn(
          "text-[32px] text-balance leading-none self-start",
          appLanguage === "en" &&
            "font-karantina sm:text-[70px] xl:text-[80px] tracking-[0.05em]",
          appLanguage === "ua" && "font-oswald sm:text-[60px] xl:text-[75px]",
          appLanguage === "by" && "font-oswald sm:text-[60px] xl:text-[75px]",
          appLanguage === "lt" && "font-oswald sm:text-[60px] xl:text-[75px]"
        )}
      >
        {translate("Upcoming Events")}
      </Animated.Title>
      <Animated.Content margin="0px 0px -20% 0px">
        {areTicketsPresent ? (
          <TicketsCarousel tickets={tickets} isLoading={areTicketsLoading} />
        ) : (
          <Placeholder
            description={translate("Tickets placeholder text")}
            title={translate("Tickets not available")}
          />
        )}
      </Animated.Content>
    </section>
  );
};

export { TicketsSection };
