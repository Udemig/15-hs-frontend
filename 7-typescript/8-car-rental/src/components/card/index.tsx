import type { FC } from "react";
import type { Car } from "../../types";
import Info from "./info";

interface Props {
  car: Car;
}

const Card: FC<Props> = ({ car }) => {
  return (
    <div className="car-card group">
      {/* Marka */}
      <h2 className="car-card-content-title">
        {car.make} {car.model}
      </h2>

      {/* Fiyat */}
      <div className="flex mt-6 text-[19px]">
        <span className="font-semibold">₺</span>
        <span className="text-[32px]">890</span>
        <span className="font-semibold self-end">/gün</span>
      </div>

      {/* Resim */}
      <img src="/hero.png" className="size-full object-contain min-h-50" />

      {/* Detaylar */}
      <div className="w-full">
        <Info car={car} />
      </div>
    </div>
  );
};

export default Card;
