import { categories, inputs } from "@/utils/constants";
import Field from "./field";
import ImagePreview from "./image-preview";
import Link from "next/link";
import { handleProductForm } from "@/utils/action";
import { Product } from "@/types";
import { FC } from "react";

interface Props {
  product?: Product;
}

const ProductForm: FC<Props> = ({ product }) => {
  return (
    <form action={handleProductForm}>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Sol */}
        <div className="space-y-6">
          {/* Server action içerisinde id'ye erişebilmek için gizli bir input */}
          {product && <input type="hidden" name="id" value={product?.id} />}

          {inputs.map((input, key) => (
            <Field key={key} htmlFor={input.name} label={input.label}>
              <input
                id={input.name}
                type={input.type}
                name={input.name}
                max={input.max}
                min={input.min}
                step={input.step}
                className="input"
                required
                defaultValue={product?.[input.name as keyof Product]}
              />
            </Field>
          ))}

          {/* Kategori */}
          <Field htmlFor="category" label="Kategori">
            <select name="category" id="category" className="input" defaultValue={product?.category}>
              {categories.map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </select>
          </Field>
        </div>

        {/* Sağ */}
        <div className="space-y-6">
          <Field htmlFor="image_url" label="Resim URL">
            <input id="image_url" type="text" name="image_url" className="input" defaultValue={product?.image_url} />
          </Field>

          <ImagePreview />

          <Field htmlFor="description" label="Açıklama">
            <textarea
              id="description"
              name="description"
              className="input sm:text-sm md:min-h-55"
              defaultValue={product?.description}
            />
          </Field>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-6 mt-6 border-t border-zinc-100">
        <Link
          href="/products"
          className="px-5 py-2.5 rounded-lg text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-md transition"
        >
          İptal
        </Link>

        <button
          type="submit"
          className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition"
        >
          Kaydet
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
