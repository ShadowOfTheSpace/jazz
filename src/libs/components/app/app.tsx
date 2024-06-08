import { useCart, useImageCache } from "~hooks/hooks";
import {
  CartContext,
  Footer,
  GallerySection,
  Header,
  HeroSection,
  ImageCacheContext,
  MerchandiseSection,
  NewsSection,
  SubscribeSection,
  TicketsSection
} from "../components";

const App: React.FC = () => {
  const { getImage, addImage } = useImageCache();
  const { addItemToCart, cartItems, removeItemFromCart, clearCart } = useCart();

  return (
    <ImageCacheContext.Provider value={{ addImage, getImage }}>
      <CartContext.Provider
        value={{ addItemToCart, cartItems, removeItemFromCart, clearCart }}
      >
        <Header />
        <main className="flex flex-col gap-y-[50px] sm:gap-y-[100px] lg:gap-y-[150px] w-full">
          <HeroSection />
          <TicketsSection />
          <NewsSection />
          <MerchandiseSection />
          <GallerySection />
          <SubscribeSection />
        </main>
        <Footer />
      </CartContext.Provider>
    </ImageCacheContext.Provider>
  );
};

export { App };
