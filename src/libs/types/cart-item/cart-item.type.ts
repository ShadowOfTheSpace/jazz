type CartItem = {
  id: string;
  imageUrl: string;
  price: number;
  quantity: number;
  selectedSize: string | null;
  title: { by: string; en: string; lt: string; ua: string };
};

export { type CartItem };
