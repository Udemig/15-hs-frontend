"use client";

import { removeFromBasket, updateQuantity } from "@/service/basket-service";
import { BasketItem } from "@/types";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface Props {
  item: BasketItem;
}

const ItemActions: FC<Props> = ({ item }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const t = useTranslations("Cart");

  const handleQuantity = async (newQuantity: number) => {
    setIsLoading(true);

    try {
      await updateQuantity(item.grocery._id, newQuantity);
      router.refresh(); // server component'da çekilen veriyi güncellemek için
      mutate("basket"); // client component'da çekilen veriyi güncellemek için
    } catch {
      toast.error(t("action-failed"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemove = async () => {
    setIsLoading(true);

    try {
      await removeFromBasket(item.grocery._id);
      router.refresh();
      mutate("basket");
    } catch {
      toast.error(t("action-failed"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center border border-gray-300 rounded-md mr-4">
        <button
          onClick={() => handleQuantity(item.quantity - 1)}
          disabled={isLoading || item.quantity === 1}
          className="counter-button"
        >
          <FaMinus />
        </button>

        <span className="px-3 py-1 border-x border-gray-300 min-w-9 text-center">{item.quantity}</span>

        <button
          onClick={() => handleQuantity(item.quantity + 1)}
          disabled={isLoading || item.quantity === item.grocery.stock}
          className="counter-button"
        >
          <FaPlus />
        </button>
      </div>

      <button disabled={isLoading} onClick={handleRemove} className="text-red-600 hover:text-red-700">
        <FaTrash />
      </button>
    </div>
  );
};

export default ItemActions;
