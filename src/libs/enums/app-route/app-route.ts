const AppRoute = {
  ANY: "*",
  CHECKOUT: "/checkout",
  ROOT: "/",
  PRODUCTS_$ID: "/products/:id",
} as const;

export { AppRoute };
