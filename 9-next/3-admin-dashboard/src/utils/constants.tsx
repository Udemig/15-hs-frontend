import { CardItem, NavItem } from "@/types";
import { TiHome } from "react-icons/ti";
import { FaUsers, FaHeart, FaBox, FaChartArea, FaDiceD6, FaCog } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import icon1 from "@/assets/images/icon-1.webp";
import icon2 from "@/assets/images/icon-2.webp";
import icon3 from "@/assets/images/icon-3.webp";
import icon4 from "@/assets/images/icon-4.png";

export const links: NavItem[] = [
  {
    icon: <TiHome />,
    name: "Anasayfa",
    url: "/",
  },
  {
    icon: <FaDiceD6 />,
    name: "Ürünler",
    url: "/products",
  },
  {
    icon: <FaUsers />,
    name: "Kullanıcılar",
    url: "/users",
  },
  {
    icon: <IoIosPricetags />,
    name: "Siparişler",
    url: "/orders",
  },
  {
    icon: <FaChartArea />,
    name: "Grafikler",
  },
  {
    icon: <FaHeart />,
    name: "Favoriler",
  },
  {
    icon: <FaBox />,
    name: "Envanter",
  },
  {
    icon: <FaCog />,
    name: "Ayarlar",
  },
];

export const cards: CardItem[] = [
  {
    icon: icon1,
    label: "Toplam Kullanıcı",
    value: 1675,
  },
  {
    icon: icon2,
    label: "Toplam Sipariş",
    value: 312,
  },
  {
    icon: icon3,
    label: "Toplam Satış",
    value: "$73.486.236",
  },
  {
    icon: icon4,
    label: "Toplam Ürün",
    value: 1453,
  },
];
