import { IMAGE_API_LINK } from "~constants/constants";
import { type Ticket, type TicketResponseDto } from "~types/types";

const ticketResponseDtoToTicket = (
  ticketResponse: TicketResponseDto
): Ticket => {
  const imageId = ticketResponse.Image
    ? new URL(ticketResponse.Image).searchParams.get("id")
    : null;

  return {
    city: ticketResponse.City,
    country: ticketResponse.Country,
    date: ticketResponse.Date,
    place: ticketResponse.Place,
    ticketUrl: ticketResponse.TicketURL,
    time: ticketResponse.Time.substring(0, 5),
    imageUrl: imageId ? `${IMAGE_API_LINK}?id=${imageId}` : "",
    title: ticketResponse.Title,
  };
};

export { ticketResponseDtoToTicket };
