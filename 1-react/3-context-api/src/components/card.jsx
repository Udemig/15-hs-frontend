import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const Card = ({ product }) => {
  const { addToBasket, basket } = useContext(BasketContext);

  // prop olarak gelen product ürünü sepette arayalım
  const found = basket.find((i) => i.id === product.id);

  return (
    <div className="border p-5 rounded-md">
      <div>
        <img src={product.thumbnail} alt={product.title} className="h-30 mx-auto" />
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-xl line-clamp-1">{product.title}</h1>

        <p className="flex gap-2">
          <span>Kategori:</span>
          <span>{product.category}</span>
        </p>
        <p className="flex gap-2">
          <span>Fiyat:</span>
          <span>{product.price}₺</span>
        </p>
        <p className="flex gap-2">
          <span>Rating:</span>
          <span>⭐️ {product.rating}</span>
        </p>
      </div>

      <button
        onClick={() => addToBasket(product)}
        className="mt-4 bg-black w-full py-2 text-center rounded-md text-white font-semibold cursor-pointer"
      >
        Sepete Ekle {found && `(${found.amount})`}
      </button>
    </div>
  );
};

export default Card;
