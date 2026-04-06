import { useState } from "react";
import { products, FILTER_TABS } from "../../data/products";
import ProductCard from "./ProductCard";

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("Tümü");

  const filteredProducts =
    activeFilter === "Tümü"
      ? products
      : products.filter(
          (p) => p.category === activeFilter.toLowerCase()
        );

  return (
    <section className="bg-surface-container-low py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-headline font-extrabold text-4xl text-tertiary mb-4">
              Dondurmalarımız
            </h2>
            <p className="text-on-surface-variant max-w-md">
              Her bir kepçede doğanın en saf lezzetlerini hissedin. Koruyucu
              madde içermez, sadece gerçek tatlar.
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
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={(item) =>
                console.log("Sepete eklendi:", item)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
