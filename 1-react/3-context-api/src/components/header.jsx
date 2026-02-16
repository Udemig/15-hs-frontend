import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../context/productContext";
import { BasketContext } from "../context/basketContext";

const Header = () => {
  const { products } = useContext(ProductContext);
  const { basket } = useContext(BasketContext);

  // dizideki ürünlerin amount alanlarını topla
  const total = basket.reduce((total, item) => total + item.amount, 0);

  return (
    <div className="border-b shadow">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold">
          Context Store
        </Link>

        <nav className="flex gap-5">
          <NavLink to="/" className="py-1 px-3 border rounded-md">
            Anasayfa ({products.length})
          </NavLink>
          <NavLink to="/sepet" className="py-1 px-3 border rounded-md">
            Sepet ({total})
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
