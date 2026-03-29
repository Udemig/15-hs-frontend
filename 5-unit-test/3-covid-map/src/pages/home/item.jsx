import { PiVirus } from "react-icons/pi";

const Item = ({ value, label, color }) => {
  return (
    <div>
      <div>
        <PiVirus className={`${color}`} />
      </div>

      <div>
        <span>{label}</span>
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default Item;
