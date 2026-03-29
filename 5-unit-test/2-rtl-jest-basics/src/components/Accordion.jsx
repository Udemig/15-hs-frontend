import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div>
        <h3>Unit Test Nedir ?</h3>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Gizle" : "Göster"}</button>
      </div>

      <p role="contentinfo" className={isOpen ? "show" : "hide"}>
        Unit test (Birim testi), yazılımın fonksiyon, metot veya sınıf gibi en küçük işlevsel parçalarının, diğer
        kodlardan izole edilerek doğru çalışıp çalışmadığının test edilmesidir.
      </p>
    </div>
  );
};

export default Accordion;
