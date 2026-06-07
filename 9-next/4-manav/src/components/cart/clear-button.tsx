"use client";

import { clearBasket } from "@/service/basket-service";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { mutate } from "swr";

const ClearButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const t = useTranslations("Cart");

  const handleClear = async () => {
    setIsLoading(true);

    try {
      await clearBasket();
      router.refresh();
      toast.success(t("cleared"));
      mutate("basket");
    } catch {
      toast.error(t("error"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button disabled={isLoading} onClick={handleClear} className="hover:text-green-700">
      {t("clear")}
    </button>
  );
};

export default ClearButton;
