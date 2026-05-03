import type { FC } from "react";
import type { Car } from "../../types";
import { driveOptions } from "../../utils/constants";

interface Props {
  car: Car;
}

const Info: FC<Props> = ({ car }) => {
  // ekrana basılacak bilgiler
  const arr = [
    { icon: "/steering-wheel.svg", text: car.trany.includes("Auto") ? "Auto" : "Manuel" },
    { icon: "/tire.svg", text: driveOptions[car.drive] },
    { icon: "/calendar.svg", text: car.year },
  ];

  return (
    <div className="flex-between">
      {arr.map((item, key) => (
        <div key={key} className="flex-center flex-col gap-1">
          <img src={item.icon} alt="icon" width={25} height={25} />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Info;
