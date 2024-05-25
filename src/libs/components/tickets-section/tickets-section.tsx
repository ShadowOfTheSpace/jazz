import { TicketsCarousel } from "./libs/components/components";

const TicketsSection: React.FC = () => {
  return (
    <section className="px-[16px] sm:px-[32px] w-full max-w-[950px] xl:max-w-[1400px] self-center">
      <TicketsCarousel />
    </section>
  );
};

export { TicketsSection };
