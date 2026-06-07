"use client";

import { checkoutBasket } from "@/service/basket-service";
import { FC, useState } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { toast } from "react-toastify";

interface Props {
  totalPrice: number;
}

const CheckoutButton: FC<Props> = ({ totalPrice }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCheckout = async () => {
    if (totalPrice <= 50) return toast.warning("Minimum sipariş tutarı 50₺'dir");

    setIsLoading(true);

    try {
      // sepetekki ürünleri satın almak için ödeme oturumu oluştur
      const res = await checkoutBasket();

      // kullanıcıyı backendin gönderdiği url'e yönlendir
      window.location.href = res.url;
    } catch {
      toast.error("Bir hata oluştu");
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
      Ödeme Yap
    </button>
  );
};

export default CheckoutButton;
