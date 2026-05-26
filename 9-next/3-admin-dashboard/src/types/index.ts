import { StaticImageData } from "next/image";

export interface NavItem {
  icon: React.ReactNode;
  name: string;
  url?: string;
}

export interface CardItem {
  icon: StaticImageData;
  label: string;
  value: string | number;
}

export interface Order {
  id: string;
  order_id: number;
  user_id: number;
  order_date: string;
  status: "Teslim Edildi" | "Kargoya Verildi" | "Hazırlanıyor";
  total_price: number;
  shipping_address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  items: [
    {
      product_id: number;
      name: string;
      quantity: number;
      price: number;
    },
  ];
}

export interface GraphData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string | string[];
    backgroundColor: string | string[];
    fill?: boolean;
    tension?: number;
    borderWidth?: number;
    hoverOffset?: number;
  }[];
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  stock: number;
  rating: number;
  reviews_count: number;
  category: string;
  image_url: string;
  description: string;
}

export interface InputItem {
  label: string;
  name: string;
  type: "text" | "email" | "number" | "date";
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: string | number;
}

export interface OptionItem {
  label: string;
  value: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  address: {
    street: string;
    city: string;
    postal_code: string;
    country: string;
  };
  phone: string;
  orders: {
    order_id: number;
    product_id: number;
    quantity: number;
    total_price: number;
    order_date: string;
  }[];
}
