import { useState } from "react";

const ColorButton = () => {
  const [isRed, setIsRed] = useState(true);

  return (
    <button
      className="btn"
      onClick={() => setIsRed(!isRed)}
      style={{ background: isRed ? "red" : "aqua" }} //
    >
      {isRed ? "Maviye Çevir" : "Kırmızıya Çevir"}
    </button>
  );
};

export default ColorButton;
