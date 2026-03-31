import { PiVirus } from "react-icons/pi";

const Item = ({ value, label, color }) => {
  return (
    <div className="flex gap-4 items-center group hover:scale-105 transition-all duration-300">
      <div className="max-sm:hidden bg-linear-to-br from-gray-50 to-gray-100 p-3 md:p-4 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300">
        <PiVirus className={`${color} text-2xl md:text-4xl`} role="icon" />
      </div>

      <div>
        <span className="text-gray-600 text-sm lg:text-base whitespace-nowrap font-medium">{label}</span>
        <h2 className="text-ld md:text-3xl font-bold">{value}</h2>
      </div>
    </div>
  );
};

export default Item;
