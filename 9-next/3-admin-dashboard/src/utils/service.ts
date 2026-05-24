import { Order, Product } from "@/types";

// api url
const BASE_URL = "http://localhost:4500";

// bütün siparişleri getir
export const getOrders = async (): Promise<Order[]> => {
  const res = await fetch(`${BASE_URL}/orders`);

  return res.json();
};

// bütün ürünleri getir
export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products`);

  return res.json();
};
