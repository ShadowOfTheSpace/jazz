import { AchievementsSection, Header, HeroSection } from "../components";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <HeroSection />
        <AchievementsSection />
      </main>
    </>
  );
};

export { App };
