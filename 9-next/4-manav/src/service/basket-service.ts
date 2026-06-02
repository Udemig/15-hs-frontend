import type { BasketRes, OrderRes, Product, URLRes } from "./../types/index";

// api adresi // kullanıcı id'si
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const userId = process.env.NEXT_PUBLIC_USER_ID;

// sepete ürün ekle
export const addToBasket = async (groceryId: string, quantity: number): Promise<void> => {
  const res = await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ groceryId, quantity, userId }),
  });

  return res.json();
};

// sepetteki ürünleri al
export const getBasket = async (): BasketRes => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`);

  return res.json();
};

// bir ürünü satın al
export const checkoutSingleItem = async (grocery: Product, quantity: number): URLRes => {
  const body = {
    grocery: grocery._id,
    quantity,
    customerInfo: {
      userId,
      name: "Furkan Evin",
      phone: "555 666 77 88",
      deliveryAddress: "İstanbul, Türkiye, 123sk. no:45 d:7",
      isDelivery: true,
    },
  };

  const res = await fetch(`${BASE_URL}/api/checkout`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};

// siparişlerimi getir
export const getOrders = async (): OrderRes => {
  const res = await fetch(`${BASE_URL}/api/orders?customer_id=${userId}`);

  return res.json();
};
