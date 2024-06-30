import defaultImage from "~assets/images/default-item-image.png";
import { Image, Link } from "~components/components";
import { useLanguageContext } from "~hooks/hooks";
import { type Ticket as TTicket } from "~types/types";
import { cn } from "~utils/utils";

type Properties = {
  ticket: TTicket;
};

const Ticket: React.FC<Properties> = ({ ticket }) => {
  const { appLanguage, translate } = useLanguageContext();

  const { city, country, date, place, ticketUrl, time, title, imageUrl } =
    ticket;

  return (
    <div className="flex sm:flex-row flex-col gap-x-[50px] gap-y-[20px] bg-jz-gray p-[20px] rounded-[10px] sm:h-auto">
      {imageUrl ? (
        <Image
          imageUrl={imageUrl as string}
          alt="ticket"
          className="rounded-[6px] sm:w-[250px] h-[270px] sm:h-auto sm:aspect-square aspect-video object-cover shrink-0"
        />
      ) : (
        <img
          alt={"ticket"}
          className="rounded-[6px] sm:w-[250px] h-[270px] sm:h-auto sm:aspect-square aspect-video object-cover shrink-0"
          src={defaultImage}
        />
      )}
      <div className="flex flex-col overflow-hidden select-none grow">
        <h3
          className={cn(
            "mb-2 line-clamp-2 h-[calc(1.25*1em*2)] font-bold text-[26px] text-jz-gold sm:text-[32px] leading-tight",
            appLanguage === "en" && "font-kaushan",
            appLanguage === "ua" && "font-marck",
            appLanguage === "by" && "font-marck"
          )}
          title={title}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-[16px] sm:text-[20px]",
            appLanguage === "en" && "font-kameron",
            appLanguage === "ua" && "font-inter",
            appLanguage === "by" && "font-inter"
          )}
          title={`${city}, ${country}`}
        >
          {city}, {country}
        </p>
        <p
          className={cn(
            "text-[16px] sm:text-[20px] truncate",
            appLanguage === "en" && "font-kameron",
            appLanguage === "ua" && "font-inter",
            appLanguage === "by" && "font-inter"
          )}
          title={place}
        >
          {place}
        </p>
        <p
          className={cn(
            "text-[16px] sm:text-[20px]",
            appLanguage === "en" && "font-kameron",
            appLanguage === "ua" && "font-inter",
            appLanguage === "by" && "font-inter"
          )}
          title={`${date}⠀–⠀${time}`}
        >
          {date}⠀–⠀{time}
        </p>
        <Link
          href={ticketUrl}
          className="border-[2px] border-jz-gold bg-jz-gold has-hover:hover:bg-transparent no-hover:active:bg-transparent mt-[20px] sm:mt-auto px-[30px] py-[8px] rounded-[40px] w-full sm:w-max font-bold font-inter text-[16px] text-center text-jz-gray sm:text-[18px] has-hover:hover:text-jz-gold no-hover:active:text-jz-gold transition-colors"
          isOpenInNewPage
        >
          {translate("Tickets")}
        </Link>
      </div>
    </div>
  );
};

export { Ticket };
