import { type Merchandise as TMerchandise } from "~types/types";
import defaultImage from "~assets/images/tickets-placeholder.png";
import { Image, Link } from "~components/components";

type Properties = {
  merchandise: TMerchandise;
};

const Merchandise: React.FC<Properties> = ({ merchandise }) => {
  const { id, imageUrl, price, title } = merchandise;

  return (
    <div className="flex flex-col gap-y-[15px] bg-jz-gray p-[20px] rounded-[10px]">
      {imageUrl ? (
        <Image
          alt="Item"
          className="rounded-[6px] w-full aspect-square object-cover shrink-0"
          imageUrl={imageUrl}
        />
      ) : (
        <img
          alt="Item"
          className="rounded-[6px] w-full aspect-square object-cover shrink-0"
          src={defaultImage}
        />
      )}
      <h2 className="text-[26px] sm:text-[32px] truncate" title={title}>
        {title}
      </h2>
      <h3 className="font-bold text-[20px] text-end text-jz-light-gray sm:text-[26px]">
        €{price}
      </h3>
      <Link
        className="border-[2px] border-jz-gold bg-jz-gold has-hover:hover:bg-transparent no-hover:active:bg-transparent mt-[16px] sm:mt-[32px] py-[8px] rounded-[40px] font-bold font-inter text-[16px] text-center text-jz-main sm:text-[20px] xl:text-[20px] has-hover:hover:text-jz-gold no-hover:active:text-jz-gold transition-colors grow"
        href={`/products/${id}`}
      >
        Order now
      </Link>
    </div>
  );
};

export { Merchandise };
