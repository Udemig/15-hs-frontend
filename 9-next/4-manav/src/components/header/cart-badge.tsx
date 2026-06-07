"use client";

import { getBasket } from "@/service/basket-service";
import Link from "next/link";
import { BiLoader } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import useSWR from "swr";

const CartBadge = () => {
  const { isLoading, data } = useSWR("basket", getBasket);

  const totalAmount = data?.cart?.items?.reduce<number>((total, item) => total + item.quantity, 0) || 0;

  return (
    <Link href="/cart" className="header-link">
      <div className="relative">
        <FaShoppingCart className="text-2xl" />

        <span className="absolute -right-3.75 -top-5 shadow font-bold text-sm text-shadow-xl bg-green-500 text-white size-6 grid place-items-center rounded-full tabular-nums">
          {isLoading ? <BiLoader className="animate-spin" /> : totalAmount}
        </span>
      </div>
      <span className="max-md:hidden">Sepetim</span>
    </Link>
  );
};

export default CartBadge;
