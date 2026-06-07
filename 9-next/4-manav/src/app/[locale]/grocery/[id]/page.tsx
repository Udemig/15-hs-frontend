import ProductDetails from "@/components/detail/product-details";
import ProductInfo from "@/components/detail/product-info";
import { getOneProduct } from "@/service/product-service";
import Link from "next/link";
import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ id: string }>;
}

const GroceryPage: FC<Props> = async ({ params }) => {
  // url'den id parametresini al
  const { id } = await params;

  // api'dan ürün detaylarını al
  const { grocery } = await getOneProduct(id);
  const t = await getTranslations("Product");

  return (
    <div className="page">
      <div>
        <Link href="/" className="flex items-center gap-2 text-green-600 hover:underline">
          <FaArrowLeft />
          {t("back-home")}
        </Link>
      </div>

      <div className="mt-10">
        <ProductDetails product={grocery} />

        <ProductInfo product={grocery} />
      </div>
    </div>
  );
};

export default GroceryPage;
