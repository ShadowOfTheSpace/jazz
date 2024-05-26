import {
  AchievementsSection,
  Footer,
  Header,
  HeroSection,
  TicketsSection,
} from "../components";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-y-[30px] sm:gap-y-[80px] lg:gap-y-[150px] w-full">
        <HeroSection />
        <TicketsSection />
        <AchievementsSection />
      </main>
      <Footer />
    </>
  );
};

export { App };
