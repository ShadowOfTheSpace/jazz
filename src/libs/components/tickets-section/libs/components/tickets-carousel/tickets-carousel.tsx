import { Carousel } from "~components/components";
type Properties = {};

const TicketsCarousel: React.FC<Properties> = ({}) => {
  return (
    <Carousel opts={{ align: "start", active: true }}>
      <Carousel.Content className="flex -ml-[30px]">
        <Carousel.Item className="pl-[30px] sm:basis-1/2 basis-full">
          <div className="bg-black h-[100px]"></div>
        </Carousel.Item>
        <Carousel.Item className="pl-[30px] sm:basis-1/2 basis-full">
          <div className="bg-black h-[100px]"></div>
        </Carousel.Item>
        <Carousel.Item className="pl-[30px] sm:basis-1/2 basis-full">
          <div className="bg-black h-[100px]"></div>
        </Carousel.Item>
        <Carousel.Item className="pl-[30px] sm:basis-1/2 basis-full">
          <div className="bg-black h-[100px]"></div>
        </Carousel.Item>
        <Carousel.Item className="pl-[30px] sm:basis-1/2 basis-full">
          <div className="bg-black h-[100px]"></div>
        </Carousel.Item>
        <Carousel.Item className="pl-[30px] sm:basis-1/2 basis-full">
          <div className="bg-black h-[100px]"></div>
        </Carousel.Item>
      </Carousel.Content>
      <Carousel.Controls className="flex justify-between items-center">
        <div className="flex">
          <Carousel.Button variant="previous" />
          <Carousel.Button variant="next" />
        </div>
        <Carousel.Dots
          activeDotClassName="border-jz-gold has-hover:hover:border-jz-gold bg-jz-gold no-hover:active:bg-jz-gold has-hover:hover:bg-jz-gold"
          className="flex gap-x-[10px]"
          dotClassName="border-jz-gold/50 has-hover:hover:border-jz-gold no-hover:active:border-jz-gold bg-transparent size-[14px]"
        />
      </Carousel.Controls>
    </Carousel>
  );
};

export { TicketsCarousel };
