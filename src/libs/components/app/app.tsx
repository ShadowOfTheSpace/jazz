import { useImageCache } from "~hooks/hooks";
import {
  AppLanguageProvider,
  CartProvider,
  Footer,
  GallerySection,
  Header,
  HeroSection,
  ImageCacheContext,
  MerchandiseSection,
  NewsSection,
  SubscribeSection,
  TicketsSection,
} from "../components";
const App: React.FC = () => {
  const { getImage, addImage } = useImageCache();

  return (
    <AppLanguageProvider>
      <CartProvider>
        <ImageCacheContext.Provider value={{ addImage, getImage }}>
          <Header />
          <main className="flex flex-col gap-y-[50px] sm:gap-y-[100px] lg:gap-y-[150px] w-full grow">
            <HeroSection />
            <TicketsSection />
            <NewsSection />
            <MerchandiseSection />
            <GallerySection />
            <SubscribeSection />
          </main>
          <Footer />
        </ImageCacheContext.Provider>
      </CartProvider>
    </AppLanguageProvider>
  );
};

export { App };
