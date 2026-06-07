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
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`, {
    cache: "no-store",
  });

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

// sepeti temizle
export const clearBasket = async (): Promise<void> => {
  const res = await fetch(`${BASE_URL}/api/cart?userId=${userId}`, { method: "DELETE" });

  return res.json();
};

// sepetteki ürün miktarını güncelle
export const updateQuantity = async (groceryId: string, newQuantity: number): Promise<void> => {
  const res = await fetch(`${BASE_URL}/api/cart/item`, {
    method: "PUT",
    body: JSON.stringify({ userId, groceryId, quantity: newQuantity }),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};

// ürünü sepetten kaldır
export const removeFromBasket = async (groceryId: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/api/cart/item?userId=${userId}&groceryId=${groceryId}`, { method: "DELETE" });

  return res.json();
};

// sepeti satın almak için ödeme oturumu oluştur
export const checkoutBasket = async (): URLRes => {
  const body = {
    userId,
    customerInfo: {
      userId,
      name: "Furkan Evin",
      phone: "555 666 77 88",
      deliveryAddress: "İstanbul Türkiye 123sk no:45",
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
