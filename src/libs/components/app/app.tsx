import { Header, HeroSection } from "../components";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <HeroSection />
      </main>
    </>
  );
};

export { App };
