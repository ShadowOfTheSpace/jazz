import { useCallback, useEffect, useState } from "react";
import { useLanguageContext } from "~hooks/hooks";
import { getTickets } from "~modules/tickets/tickets";
import { Ticket } from "~types/types";
import { cn } from "~utils/utils";
import { Animated, Placeholder } from "../components";
import { TicketsCarousel } from "./libs/components/components";

const TicketsSection: React.FC = () => {
  const { appLanguage, translate } = useLanguageContext();

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
    <section
      id="events"
      className="flex flex-col gap-y-[16px] lg:gap-y-[36px] px-[16px] sm:px-[32px] w-full max-w-[950px] xl:max-w-[1400px] self-center"
    >
      <Animated.Title
        className={cn(
          "text-[32px] text-balance leading-none",
          appLanguage === "eng" &&
            "font-karantina sm:text-[70px] xl:text-[80px] tracking-[0.05em]",
          appLanguage === "ukr" && "font-oswald sm:text-[60px] xl:text-[75px]",
          appLanguage === "blr" && "font-oswald sm:text-[60px] xl:text-[75px]"
        )}
      >
        {translate("Upcoming Events")}
      </Animated.Title>
      <Animated.Content margin="0px 0px -20% 0px">
        {isTicketsPresent ? (
          <TicketsCarousel tickets={tickets} isLoading={isTicketsLoading} />
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
