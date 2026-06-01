import { Order, Product, User } from "@/types";

// api url
const BASE_URL = "http://localhost:4500";

// bütün siparişleri getir
export const getOrders = async (): Promise<Order[]> => {
  const res = await fetch(`${BASE_URL}/orders`);

  return res.json();
};

// bütün ürünleri getir
export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "no-store",
  });

  return res.json();
};

// bütün ürünleri getir
export const getOneProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`);

  return res.json();
};

// bir ürünü kaldır
export const deleteProduct = async (id: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/products/${id}`, { method: "DELETE" });

  return res.json();
};

// yeni bir ürün oluştur
export const createProduct = async (productData: Omit<Product, "id">): Promise<void> => {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    body: JSON.stringify(productData),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};

// bir ürünü düzenle
export const updateProduct = async (id: string, productData: Omit<Product, "id">): Promise<void> => {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(productData),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};

// bütün kullanıcları getir
export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${BASE_URL}/users`);

  return res.json();
};

// bütün kullanıcları getir
export const getOneUser = async (id: string): Promise<User> => {
  const res = await fetch(`${BASE_URL}/users/${id}`);

  return res.json();
};

// kullanıcıyı sil
export const deleteUser = async (id: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/users/${id}`, { method: "DELETE" });

  return res.json();
};
