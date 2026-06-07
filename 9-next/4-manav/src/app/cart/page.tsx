import CartItem from "@/components/cart/cart-item";
import CartSummary from "@/components/cart/cart-summary";
import ClearButton from "@/components/cart/clear-button";
import EmptyCart from "@/components/cart/empty-cart";
import { getBasket } from "@/service/basket-service";
import { FC } from "react";

export const dynamic = "force-dynamic";

const Cart: FC = async () => {
  const { cart } = await getBasket();

  if (cart.items.length === 0) return <EmptyCart />;

  return (
    <div className="page">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Alışveriş Sepeti</h1>

      <div className="lg:flex gap-6">
        {/* Ürünler */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h2>Sepetiniz ({cart.items.length})</h2>

              <ClearButton />
            </div>

            <ul>
              {cart.items.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </ul>
          </div>
        </div>

        {/* Sipariş Özeti */}
        <div className="lg:w-1/3">{cart.items.length > 0 && <CartSummary cart={cart} />}</div>
      </div>
    </div>
  );
};

export default Cart;
