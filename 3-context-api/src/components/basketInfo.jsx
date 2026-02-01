import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const BasketInfo = () => {
  const { basket, clearBasket } = useContext(BasketContext);

  // sepetteki toplam ürün adedini hesapla
  const totalAmount = basket.reduce((total, item) => total + item.amount, 0);

  // sepetteki toplam fiyatı hesapla
  const totalPrice = basket.reduce((total, item) => total + item.amount * item.price, 0);

  return (
    <div className="border p-4 rounded-md text-lg lg:min-w-80 h-fit">
      <p className="flex gap-3">
        <span>Ürün Adedi:</span>
        <b>{totalAmount} adet</b>
      </p>

      <p className="flex gap-3">
        <span>Toplam Fiyat:</span>
        <b>{totalPrice.toFixed(2)} ₺</b>
      </p>

      <button onClick={clearBasket} className="border w-full mt-5 cursor-pointer">
        Ödeme Yap
      </button>
    </div>
  );
};

export default BasketInfo;
