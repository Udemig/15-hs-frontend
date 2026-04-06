import { useState } from "react";

const ProductCard = ({ id, name, description, price, image, badge, badgeType, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState("Külah");

  const badgePositionClass = badgeType === "secondary" ? "top-3 right-3" : "top-3 left-3";
  const badgeBgClass =
    badgeType === "secondary"
      ? "bg-secondary-container text-on-secondary-container"
      : "bg-primary-container text-on-primary-container";

  const handleAddToCart = () => {
    onAddToCart?.({ id, name, price, size: selectedSize });
  };

  return (
    <div className="group bg-surface-container-lowest rounded-xl p-5 shadow-[0_10px_30px_rgba(56,58,21,0.03)] hover:shadow-[0_20px_40px_rgba(56,58,21,0.08)] transition-all flex flex-col">
      <div className="relative mb-6 overflow-hidden rounded-lg aspect-square">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          alt={name}
          src={image}
        />
        {badge && (
          <div className={`absolute ${badgePositionClass}`}>
            <span className={`${badgeBgClass} text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full`}>
              {badge}
            </span>
          </div>
        )}
      </div>

      <div className="grow">
        <h3 className="font-headline font-bold text-xl text-tertiary mb-2">{name}</h3>
        <p className="text-on-surface-variant text-sm mb-4 leading-relaxed line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mb-6">
          <span className="text-primary font-headline font-extrabold text-2xl">{price} TL</span>
          <div className="flex gap-1 p-1 bg-surface-container rounded-full">
            <button
              className={`px-3 py-1 text-[10px] font-bold rounded-full ${
                selectedSize === "Külah"
                  ? "bg-tertiary-container text-on-tertiary-container"
                  : "text-on-surface-variant hover:bg-surface-container-highest"
              }`}
              onClick={() => setSelectedSize("Külah")}
            >
              Külah
            </button>
            <button
              className={`px-3 py-1 text-[10px] font-bold rounded-full ${
                selectedSize === "Kap"
                  ? "bg-tertiary-container text-on-tertiary-container"
                  : "text-on-surface-variant hover:bg-surface-container-highest"
              }`}
              onClick={() => setSelectedSize("Kap")}
            >
              Kap
            </button>
          </div>
        </div>
      </div>

      <button
        className="w-full py-3 bg-surface-container-highest text-on-secondary-container rounded-xl font-headline font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-all active:scale-95"
        onClick={handleAddToCart}
      >
        <span className="material-symbols-outlined text-lg" data-icon="add_shopping_cart">
          add_shopping_cart
        </span>
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;
