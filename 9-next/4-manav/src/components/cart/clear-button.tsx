"use client";

import { clearBasket } from "@/service/basket-service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { mutate } from "swr";

const ClearButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleClear = async () => {
    setIsLoading(true);

    try {
      await clearBasket();
      router.refresh();
      toast.success("Sepetiniz temizlendi");
      mutate("basket");
    } catch {
      toast.error("Bir hata oluştu");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button disabled={isLoading} onClick={handleClear} className="hover:text-green-700">
      Temizle
    </button>
  );
};

export default ClearButton;
