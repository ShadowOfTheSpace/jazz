import { type Ticket, type TicketResponseDto } from "~types/types";

const ticketResponseDtoToTicket = (ticketResponse: TicketResponseDto): Ticket => {
  return {
    city: ticketResponse.City,
    country: ticketResponse.Country,
    date: ticketResponse.Date,
    place: ticketResponse.Place,
    ticketUrl: ticketResponse.TicketURL,
    time: ticketResponse.Time.substring(0, 5),
    imageUrl: ticketResponse.Image
      ? `https://script.google.com/macros/s/AKfycbwHZ8s5txFxEfl-e3ixOWQ-0Y9-lTKlrgddMSnLwT4dLYeIp4iMM2TKdIZs8NDL3yaj/exec?id=${new URL(
          ticketResponse.Image
        ).searchParams.get("id")}`
      : "",
    title: ticketResponse.Title,
  };
};

export { ticketResponseDtoToTicket };
