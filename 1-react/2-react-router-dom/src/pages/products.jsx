import { useEffect, useState } from "react";
import api from "../api";
import Card from "../components/card";
import Filter from "../components/filter";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  // url'deki query parametresine erişmek için:
  const [searchParams] = useSearchParams();

  // url'deki arama_terimi parametresine erişelim
  const searchTerm = searchParams.get("arama_terimi");

  // api'dan gelen kitaplar verisini tutan state
  const [books, setBooks] = useState([]);

  // component'ın ekrana basılma anını izle:
  useEffect(() => {
    const params = { q: searchTerm };

    api.get("/books", { params }).then((res) => setBooks(res.data));
  }, [searchTerm]);

  return (
    <div className="container">
      <div>
        <h1 className="display-6 fw-semibold">Ürünler Sayfası</h1>
        <p className="mt-2 text-secondary">Binlerce kitap arasından favorilerinizi keşfedin</p>
      </div>

      <Filter />

      <div className="row g-4 mt-1">
        {books.map((book) => (
          <div key={book.id} className="col-12 col-md-6 col-lg-4">
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
