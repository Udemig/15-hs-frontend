import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import BasketItem from "../components/basketItem";
import { Link } from "react-router-dom";
import BasketInfo from "../components/basketInfo";

const Basket = () => {
  // basket context'e abone olup sepet verisine eriş
  const { basket, clearBasket } = useContext(BasketContext);

  return (
    <div className="container">
      <div className="my-5 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Sepetiniz</h1>

        {basket.length > 0 && (
          <button onClick={clearBasket} className="bg-zinc-600 py-1 px-4 rounded-md text-white cursor-pointer">
            Sepeti Temizle
          </button>
        )}
      </div>

      <div className="flex flex-col xl:flex-row gap-10">
        <div className="grid gap-5 flex-1">
          {basket.length === 0 ? (
            <p className="text-center my-40 text-xl grid gap-5">
              <span>Sepetiniz Boş</span>
              <Link to="/" className="text-blue-500 underline">
                Ürünler'e Git
              </Link>
            </p>
          ) : (
            basket.map((product) => <BasketItem product={product} />)
          )}
        </div>

        <BasketInfo />
      </div>
    </div>
  );
};

export default Basket;
