"use client";

import { deleteProduct } from "@/utils/service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  id: string;
}

const DeleteButton: FC<Props> = ({ id }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Bu ürünü silmek istediğinizden emin misiniz?")) return;

    try {
      setIsLoading(true);
      await deleteProduct(id);
      router.refresh();
      toast.success("Ürün başarıyla silindi");
    } catch (error) {
      toast.error("Silme işlemi başarısız");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleDelete}
      className="flex-1 bg-red-50 text-red-700 px-3 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-100 transition text-center"
    >
      {isLoading ? "Siliniyor..." : "Sil"}
    </button>
  );
};

export default DeleteButton;
