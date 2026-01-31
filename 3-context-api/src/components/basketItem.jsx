import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const BasketItem = ({ product }) => {
  const { addToBasket, removeFromBasket } = useContext(BasketContext);

  return (
    <div className="border rounded-md flex flex-col md:flex-row items-center justify-between p-3 gap-3">
      <div className="md:flex md:place-items-center md:gap-5">
        <img src={product.thumbnail} className="size-20 mx-auto" />

        <h3 className="line-clamp-1 text-lg font-semibold">{product.title}</h3>
      </div>

      <div>
        <p className="text-green-600 font-semibold text-center">{(product.amount * product.price).toFixed(2)}₺</p>

        <div className="flex border rounded-md text-xl my-3">
          <button className="border-r py-1 px-3 cursor-pointer" onClick={() => removeFromBasket(product.id)}>
            -
          </button>
          <span className="py-1 px-3">{product.amount}</span>
          <button className="border-l py-1 px-3 cursor-pointer" onClick={() => addToBasket(product)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
