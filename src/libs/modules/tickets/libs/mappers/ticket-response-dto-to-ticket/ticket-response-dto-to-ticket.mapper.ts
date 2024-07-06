import { IMAGE_API_LINK } from "~constants/constants";
import { type Ticket, type TicketResponseDto } from "~types/types";

const ticketResponseDtoToTicket = (
  ticketResponse: TicketResponseDto
): Ticket => {
  const imageId = ticketResponse.Image
    ? new URL(ticketResponse.Image).searchParams.get("id")
    : null;

  let eventTime: string = "";
  const dayPeriodMatch = ticketResponse.Time.match(/(AM|PM)/gm);
  const timeMatch = ticketResponse.Time.match(/\d{1,2}:\d{2}/gm);

  if (dayPeriodMatch && timeMatch) {
    const [dayPeriod] = dayPeriodMatch;
    const [time] = timeMatch;
    eventTime = `${time} ${dayPeriod}`;
  } else if (timeMatch) {
    const [time] = timeMatch;
    eventTime = time;
  } else {
    eventTime = ticketResponse.Time;
  }

  return {
    city: {
      by: ticketResponse.CityBY,
      en: ticketResponse.CityEN,
      lt: ticketResponse.CityLT,
      ua: ticketResponse.CityUA,
    },
    country: {
      by: ticketResponse.CountryBY,
      en: ticketResponse.CountryEN,
      lt: ticketResponse.CountryLT,
      ua: ticketResponse.CountryUA,
    },
    date: ticketResponse.Date,
    place: {
      by: ticketResponse.PlaceBY,
      en: ticketResponse.PlaceEN,
      lt: ticketResponse.PlaceLT,
      ua: ticketResponse.PlaceUA,
    },
    ticketUrl: ticketResponse.TicketURL,
    time: eventTime,
    imageUrl: imageId ? `${IMAGE_API_LINK}?id=${imageId}` : "",
    title: {
      by: ticketResponse.TitleBY,
      en: ticketResponse.TitleEN,
      lt: ticketResponse.TitleLT,
      ua: ticketResponse.TitleUA,
    },
  };
};

export { ticketResponseDtoToTicket };
