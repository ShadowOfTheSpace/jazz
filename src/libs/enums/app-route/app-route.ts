const AppRoute = {
  ANY: "*",
  CHECKOUT: "/checkout",
  SOCIAL_NEWS: "/social-news",
  ROOT: "/",
  PRODUCTS_$ID: "/products/:id",
} as const;

export { AppRoute };
