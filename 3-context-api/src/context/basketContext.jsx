import { createContext, useState } from "react";

//! context yapısının temelini oluştur
export const BasketContext = createContext();

//! context yapısının sağlayıcı component'ını oluştur
export const BasketProvider = ({ children }) => {
  // sepet state'i
  const [basket, setBasket] = useState([]);

  // sepete ürün ekle
  const addToBasket = (newProduct) => {
    // parametre olarak gelen ürün sepet dizisinde var mı?
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      // eğer ürün sepette zaten varsa: miktarını arttır
      // a) bulunan ürünün miktarını 1 arttır
      const updated = { ...found, amount: found.amount + 1 };
      // b) sepet dizisindeki eski ürün yerine güncellenmiş ürünü ekle
      const updatedBasket = basket.map((item) => (item.id === updated.id ? updated : item));
      // c) sepet state'ini güncelle
      setBasket(updatedBasket);
    } else {
      // eğer ürün sepette yoksa: ürünü sepet dizisine ekle
      setBasket([...basket, { ...newProduct, amount: 1 }]);
    }
  };

  //TODO: sepetten ürün çıkar
  const removeFromBasket = () => {};

  // sepeti temizle
  const clearBasket = () => {
    setBasket([]);
  };

  // component'lara aktarılacak verileri belirle
  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
