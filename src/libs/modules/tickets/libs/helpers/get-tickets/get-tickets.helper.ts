import { TicketResponseDto } from "~types/types";
import { convertCsvToJson } from "~utils/utils";
import { TICKETS_URL } from "../../constants/constants";
import { ticketResponseDtoToTicket } from "../../mappers/mappers";

const getTickets = async () => {
  try {
    const response = await fetch(TICKETS_URL);

    const ticketsCsv = await response.text();

    return convertCsvToJson<TicketResponseDto>(ticketsCsv).map(
      ticketResponseDtoToTicket
    );
  } catch (error) {
    return [];
  }
};

export { getTickets };
