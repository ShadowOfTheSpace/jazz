import { type CartItem, type OrderInfo } from "../types";

type Order = {
  items: CartItem[];
} & OrderInfo;

export { type Order };
