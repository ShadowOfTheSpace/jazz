type Ticket = {
  city: { by: string; en: string; lt: string; ua: string };
  country: { by: string; en: string; lt: string; ua: string };
  date: string;
  imageUrl?: string;
  place: { by: string; en: string; lt: string; ua: string };
  ticketUrl: string;
  time: string;
  title: { by: string; en: string; lt: string; ua: string };
};

export { type Ticket };
