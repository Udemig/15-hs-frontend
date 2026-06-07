"use client";

import { checkoutBasket } from "@/service/basket-service";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { toast } from "react-toastify";

interface Props {
  totalPrice: number;
}

const CheckoutButton: FC<Props> = ({ totalPrice }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const t = useTranslations("Cart");

  const handleCheckout = async () => {
    if (totalPrice <= 50) return toast.warning(t("min-order"));

    setIsLoading(true);

    try {
      // sepetekki ürünleri satın almak için ödeme oturumu oluştur
      const res = await checkoutBasket();

      // kullanıcıyı backendin gönderdiği url'e yönlendir
      window.location.href = res.url;
    } catch {
      toast.error(t("error"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleCheckout}
      className="flex items-center cursor-pointer justify-center gap-2 w-full bg-green-600 text-white px-4 h-10 rounded-md hover:bg-green-700"
    >
      <MdOutlineShoppingCartCheckout />
      {t("checkout")}
    </button>
  );
};

export default CheckoutButton;
