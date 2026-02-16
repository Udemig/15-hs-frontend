import Card from "../components/card";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";

const Home = () => {
  // Bir context yapısındaki verilere erişmek için useContext hook'unu kullanırız
  const { loading, error, products } = useContext(ProductContext);

  return (
    <div className="container">
      <h2 className="my-5 text-3xl font-semibold">Güncel Ürünler</h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading ? (
          <p>Yükleniyor...</p>
        ) : error ? (
          <p>Hata!: {error}</p>
        ) : (
          products.map((product) => <Card product={product} key={product.id} />)
        )}
      </div>
    </div>
  );
};

export default Home;
