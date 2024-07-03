type Merchandise = {
  id: string;
  imageUrl: string;
  price: number;
  sizes: string[] | null;
  title: { by: string; en: string; lt: string; ua: string };
};

export { type Merchandise };
