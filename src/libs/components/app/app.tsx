import { useImageCache } from "~hooks/hooks";
import {
  AchievementsSection,
  Footer,
  GallerySection,
  Header,
  HeroSection,
  ImageCacheContext,
  MerchandiseSection,
  SubscribeSection,
  TicketsSection,
} from "../components";

const App: React.FC = () => {
  const { getImage, addImage } = useImageCache();
  return (
    <ImageCacheContext.Provider
      value={{
        addImage,
        getImage,
      }}
    >
      <Header />
      <main className="flex flex-col gap-y-[30px] sm:gap-y-[80px] lg:gap-y-[150px] w-full">
        <HeroSection />
        <TicketsSection />
        <AchievementsSection />
        <MerchandiseSection />
        <GallerySection />
        <SubscribeSection />
      </main>
      <Footer />
    </ImageCacheContext.Provider>
  );
};

export { App };
