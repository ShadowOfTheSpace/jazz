import { Ticket } from "~types/types";
import { convertCsvToJson } from "~utils/utils";
import { TICKETS_URL } from "../../constants/constants";

const getTickets = async () => {
  try {
    const ticketsCsv = await fetch(TICKETS_URL).then((tickets) => {
      return tickets.text();
    });

    return convertCsvToJson<Ticket>(ticketsCsv);
  } catch (error) {
    console.log(error);
  }
};

export { getTickets };
