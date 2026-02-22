import { Plus } from "lucide-react";

const Card = ({ product }) => {
  return (
    <div className="box grid grid-cols-[1fr_130px] gap-4 p-4 transition hover:-translate-y-1 border border-zinc-200">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <p className="muted">{product.desc}</p>
        </div>

        <p className="text-lg font-semibold text-red-500">{product.price}₺</p>
      </div>

      <div className="relative rounded-xl overflow-hidden">
        <img src={product.photo} alt={product.title} className="object-cover size-full" />

        <button className="absolute right-3 bottom-3 bg-white size-9 grid place-items-center rounded-full text-red-500 shadow-lg transition hover:bg-red-50 font-bold text-shadow-black">
          <Plus />
        </button>
      </div>
    </div>
  );
};

export default Card;
