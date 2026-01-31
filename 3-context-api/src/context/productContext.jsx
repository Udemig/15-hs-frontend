import axios from "axios";
import { createContext, useEffect, useState } from "react";

/*
 ! Context API | useContext
 * Uygulamada birden çok bileşenin ihtiyacı olan verileri, bileşenlerden bağımsız merkezlerde yönetmek için kullanırız.

 * Context yapısı içerisinde state'leri ve state'leri güncelleyen fonksiyonları tanımlarız

 * Context, tuttuğumuz state'leri bileşenler doğrudan aktarım yapabilen state yönetim aracıdır
*/

//! Context yapısının temelini oluşturma
export const ProductContext = createContext();

//! Context sağlayıcı component'ını oluştur (HOC)
export const ProductProvider = ({ children }) => {
  // context yapısında tutulan state'ler
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Bileşen ekrana basılınca:
  useEffect(() => {
    setLoading(true);

    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // value prop'uyla context yapısından diğer component'lara aktarmak istediğiniz verileri belirleyebilirsiniz
  return (
    <ProductContext.Provider
      value={{ products, loading, error }} //
    >
      {children}
    </ProductContext.Provider>
  );
};
