import ProductForm from "@/components/form";
import { Product } from "@/types";
import { getOneProduct } from "@/utils/service";
import { FC } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const EditPage: FC<Props> = async ({ params }) => {
  // düzenlenicek ürünün idsi
  const { id } = await params;

  // düzenlenicek ürün verisi
  const product: Product | null = await getOneProduct(id);

  return (
    <div className="page max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="title">Ürünü Düzenle</h1>
        <p className="text-zinc-500 mt-1">Mevcut ürün bilgilerini güncelleyin</p>
      </div>

      <div className="card p-6 md:p-8">
        <ProductForm product={product} />
      </div>
    </div>
  );
};

export default EditPage;
