import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { FILTER_TABS } from "../../data/products";
import { addItem } from "../../store/basketSlice";
import ProductCard from "./ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState("Tümü");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/icecreams")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredProducts =
    activeFilter === "Tümü" ? products : products.filter((p) => p.category === activeFilter.toLowerCase());

  if (loading) {
    return (
      <section className="bg-surface-container-low py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-on-surface-variant text-lg">Yükleniyor...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-surface-container-low py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-500 text-lg">Hata: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-surface-container-low py-24 px-6" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline font-extrabold text-4xl text-tertiary mb-4">
              <span itemProp="name">Dondurmalarımız</span>
            </h2>
            <p className="text-on-surface-variant max-w-md" itemProp="description">
              Her bir kepçede doğanın en saf lezzetlerini hissedin. Koruyucu madde içermez, sadece gerçek tatlar.
            </p>
          </div>
          <div className="flex gap-2 p-1 bg-surface-container-highest rounded-full">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-full font-headline text-sm ${
                  activeFilter === tab
                    ? "bg-primary text-on-primary font-bold"
                    : "text-on-surface-variant font-medium hover:bg-surface-container-low transition-colors"
                }`}
                onClick={() => setActiveFilter(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} onAddToCart={(item) => dispatch(addItem(item))} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
