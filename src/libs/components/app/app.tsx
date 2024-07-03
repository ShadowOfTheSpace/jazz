import { CookiesProvider } from "react-cookie";
import { useImageCache } from "~hooks/hooks";
import {
  AppLanguageProvider,
  CartProvider,
  ConsentBanner,
  ConsentProvider,
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
    <CookiesProvider>
      <ConsentProvider>
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
                <ConsentBanner />
              </main>
              <Footer />
            </ImageCacheContext.Provider>
          </CartProvider>
        </AppLanguageProvider>
      </ConsentProvider>
    </CookiesProvider>
  );
};

export { App };
