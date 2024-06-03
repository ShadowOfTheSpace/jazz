import { useCart, useImageCache } from "~hooks/hooks";
import {
  AchievementsSection,
  CartContext,
  Footer,
  Header,
  HeroSection,
  ImageCacheContext,
  MerchandiseSection,
  SubscribeSection,
  TicketsSection,
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
        <main className="flex flex-col gap-y-[30px] sm:gap-y-[80px] lg:gap-y-[150px] w-full">
          <HeroSection />
          <TicketsSection />
          <AchievementsSection />
          <MerchandiseSection />
          <SubscribeSection />
        </main>
        <Footer />
      </CartContext.Provider>
    </ImageCacheContext.Provider>
  );
};

export { App };
